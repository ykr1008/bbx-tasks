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
let galleryImages = [];
let galleryIndex = 0;
let activePackageCard = null;

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

	const costKey = packageTypeSelect.value === 'couple' ? 'coupleCost' : 'personCost';
	const packageCost = Number(activePackageCard.dataset[costKey]);
	const minimumDays = Number(activePackageCard.dataset.minDays);
	const days = Math.max(minimumDays, Number(packageDays.value) || minimumDays);
	const quantity = Math.max(1, Number(packageQuantity.value) || 1);
	const costPerDay = Math.round(packageCost / minimumDays);
	packageDays.value = days;
	packageQuantity.value = quantity;
	document.querySelector('#preview-unit-cost').textContent = '₹' + costPerDay.toLocaleString('en-IN');
	const estimatedTotal = Math.round(packageCost * days / minimumDays * quantity);
	document.querySelector('#preview-total-cost').textContent = '₹' + estimatedTotal.toLocaleString('en-IN');
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

[packageDialog, descriptionDialog].forEach(function (dialog) {
	dialog.addEventListener('click', function (event) {
		if (event.target === dialog) dialog.close();
	});
});
