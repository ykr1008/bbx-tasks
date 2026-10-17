const destinationCards = document.querySelectorAll('.destination-card');
const searchInput = document.querySelector('#destination-search');
const seasonFilter = document.querySelector('#season-filter');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const packageDialog = document.querySelector('#package-dialog');
const packageTypeSelect = document.querySelector('#preview-package-type');
const packageQuantity = document.querySelector('#preview-quantity');
const packageDays = document.querySelector('#preview-days');
const descriptionDialog = document.querySelector('#description-dialog');
const descriptionImage = document.querySelector('#description-image');
const galleryCount = document.querySelector('#gallery-count');
const bookingSection = document.querySelector('#booking');
const bookingDestination = document.querySelector('#booking-destination');
const bookingTravelers = document.querySelector('#booking-travelers');
const bookingPackageDialog = document.querySelector('#booking-package-dialog');
const bookingPackageOption = document.querySelector('#booking-package-option');
const bookingPackageQuantity = document.querySelector('#booking-package-quantity');
const bookingPackageDays = document.querySelector('#booking-package-days');
let galleryImages = [];
let galleryIndex = 0;
let activePackageCard = null;
let bookingCard = null;

window.addEventListener('load', function () {
	document.querySelector('#load-time').textContent = new Date().toLocaleString(undefined, {
		dateStyle: 'full',
		timeStyle: 'short'
	});
});

function filterDestinations() {
	const searchTerm = searchInput.value.trim().toLowerCase();
	const selectedSeason = seasonFilter.value;
	let visibleCount = 0;

	destinationCards.forEach(function (card) {
		const matchesSearch = card.textContent.toLowerCase().includes(searchTerm);
		const matchesSeason = selectedSeason === 'all' || card.dataset.season === selectedSeason;
		const isVisible = matchesSearch && matchesSeason;
		card.hidden = !isVisible;

		if (isVisible) visibleCount += 1;
	});

	resultCount.textContent = visibleCount + (visibleCount === 1 ? ' place' : ' places');
	emptyState.hidden = visibleCount !== 0;
}

function highlightDestination(card) {
	destinationCards.forEach(function (destination) {
		destination.classList.remove('is-selected', 'is-highlighted');
	});
	card.classList.add('is-selected');
}

function showPackageDetails(card) {
	const minimumDays = Number(card.dataset.minDays);
	activePackageCard = card;
	document.querySelector('#package-destination').textContent = card.querySelector('h3').textContent;
	packageTypeSelect.value = 'person';
	packageQuantity.value = '1';
	packageDays.min = minimumDays;
	packageDays.value = minimumDays;
	updatePackageEstimate();
	packageDialog.showModal();
}

function updatePackageEstimate() {
	if (!activePackageCard) return;

	const estimate = calculatePackageEstimate(activePackageCard, packageTypeSelect.value, packageQuantity.value, packageDays.value);
	packageDays.value = estimate.days;
	packageQuantity.value = estimate.quantity;
	document.querySelector('#preview-unit-cost').textContent = '₹' + estimate.costPerDay.toLocaleString('en-IN');
	document.querySelector('#preview-total-cost').textContent = '₹' + estimate.total.toLocaleString('en-IN');
}

function calculatePackageEstimate(card, packageType, quantityValue, daysValue) {
	const minimumDays = Number(card.dataset.minDays);
	const costKey = packageType === 'couple' ? 'coupleCost' : 'personCost';
	const packageCost = Number(card.dataset[costKey]);
	const days = Math.max(minimumDays, Number(daysValue) || minimumDays);
	const quantity = Math.max(1, Number(quantityValue) || 1);
	const unitCost = Math.round(packageCost * days / minimumDays);

	return {
		days: days,
		quantity: quantity,
		costPerDay: Math.round(packageCost / minimumDays),
		unitCost: unitCost,
		total: Math.round(packageCost * days / minimumDays * quantity)
	};
}

function showBookingPackageDialog() {
	if (!bookingCard) return;

	const minimumDays = Number(bookingCard.dataset.minDays);
	document.querySelector('#booking-package-destination').textContent = bookingCard.querySelector('h3').textContent;
	bookingPackageOption.value = 'person';
	bookingPackageQuantity.value = '1';
	bookingPackageDays.min = minimumDays;
	bookingPackageDays.value = minimumDays;
	updateBookingPackageEstimate();
	bookingPackageDialog.showModal();
}

function updateBookingPackageEstimate() {
	if (!bookingCard) return;

	const estimate = calculatePackageEstimate(bookingCard, bookingPackageOption.value, bookingPackageQuantity.value, bookingPackageDays.value);
	bookingPackageDays.value = estimate.days;
	bookingPackageQuantity.value = estimate.quantity;
	document.querySelector('#booking-package-unit-cost').textContent = '₹' + estimate.unitCost.toLocaleString('en-IN');
	document.querySelector('#booking-package-estimate').textContent = '₹' + estimate.total.toLocaleString('en-IN');
}

function applyBookingPackage() {
	const estimate = calculatePackageEstimate(bookingCard, bookingPackageOption.value, bookingPackageQuantity.value, bookingPackageDays.value);
	const isCouplePackage = bookingPackageOption.value === 'couple';
	document.querySelector('#booking-package-type').value = isCouplePackage ? 'Couple Package' : 'Person Package';
	document.querySelector('#booking-days').value = estimate.days + (estimate.days === 1 ? ' day' : ' days');
	document.querySelector('#booking-accommodation').value = 'Yes';
	document.querySelector('#booking-food').value = 'Yes';
	document.querySelector('#booking-package-cost').value = '₹' + estimate.unitCost.toLocaleString('en-IN');
	document.querySelector('#booking-total-cost').value = '₹' + estimate.total.toLocaleString('en-IN');
	bookingTravelers.value = isCouplePackage ? estimate.quantity * 2 : estimate.quantity;
	bookingPackageDialog.close();
}

function showDescription(card) {
	const mainImage = card.querySelector('.destination-image');
	const extraImages = card.querySelectorAll('.gallery-sources img');
	galleryImages = [mainImage].concat(Array.from(extraImages));
	galleryIndex = 0;

	document.querySelector('#description-title').textContent = card.querySelector('h3').textContent;
	document.querySelector('#description-location').textContent = card.querySelector('.country-full').textContent;
	document.querySelector('#description-attractions').textContent = card.querySelector('.attractions').textContent;
	updateGalleryImage();
	descriptionDialog.showModal();
}

function updateGalleryImage() {
	const currentImage = galleryImages[galleryIndex];
	descriptionImage.src = currentImage.src;
	descriptionImage.alt = currentImage.alt;
	galleryCount.textContent = (galleryIndex + 1) + ' / ' + galleryImages.length;
}

searchInput.addEventListener('input', filterDestinations);
seasonFilter.addEventListener('change', filterDestinations);

destinationCards.forEach(function (card) {
	card.addEventListener('click', function (event) {
		highlightDestination(card);

		const actionButton = event.target.closest('[data-action]');
		if (!actionButton) return;

		if (actionButton.dataset.action === 'package') showPackageDetails(card);
		if (actionButton.dataset.action === 'description') showDescription(card);
		if (actionButton.dataset.action === 'ready') {
			if (bookingCard !== card) {
				bookingCard = card;
				bookingTravelers.value = '1';
				document.querySelectorAll('#booking-form input[readonly]:not(#booking-destination)').forEach(function (input) {
					input.value = '';
				});
			}
			bookingDestination.value = card.querySelector('h3').textContent;
			bookingSection.hidden = false;
			bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});

	card.querySelector('.destination-image').addEventListener('dblclick', function (event) {
		event.stopPropagation();
		event.currentTarget.classList.toggle('is-zoomed');
	});
});

[packageTypeSelect, packageQuantity, packageDays].forEach(function (control) {
	control.addEventListener('input', updatePackageEstimate);
	control.addEventListener('change', updatePackageEstimate);
});

document.querySelector('#choose-package').addEventListener('click', showBookingPackageDialog);
[bookingPackageOption, bookingPackageQuantity, bookingPackageDays].forEach(function (control) {
	control.addEventListener('input', updateBookingPackageEstimate);
	control.addEventListener('change', updateBookingPackageEstimate);
});
document.querySelector('#apply-package').addEventListener('click', applyBookingPackage);

document.querySelectorAll('.rated-info .text-link, .rated-photo').forEach(function (link) {
	link.addEventListener('click', function () {
		const targetCard = document.querySelector(link.getAttribute('href'));
		if (!targetCard) return;
		destinationCards.forEach(function (card) {
			card.classList.remove('is-selected', 'is-highlighted');
		});
		targetCard.classList.add('is-selected', 'is-highlighted');
	});
});

document.querySelectorAll('[data-close-dialog]').forEach(function (button) {
	button.addEventListener('click', function () {
		button.closest('dialog').close();
	});
});

document.querySelector('.gallery-prev').addEventListener('click', function () {
	galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
	updateGalleryImage();
});

document.querySelector('.gallery-next').addEventListener('click', function () {
	galleryIndex = (galleryIndex + 1) % galleryImages.length;
	updateGalleryImage();
});

[packageDialog, descriptionDialog, bookingPackageDialog].forEach(function (dialog) {
	dialog.addEventListener('click', function (event) {
		if (event.target === dialog) dialog.close();
	});
});
