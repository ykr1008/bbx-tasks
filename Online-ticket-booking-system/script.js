function startBooking() {
  // 1. Welcome message
  alert("Welcome to the Online Movie Ticket Booking System!");

  // 2. Get customer name
  const customerName = prompt("Enter your full name:");

  if (customerName === null) {
    alert("Booking Cancelled.");
    return;
  }

  if (customerName.trim() === "") {
    alert("Full name cannot be empty.");
    return;
  }

  // 3. Get movie name
  const movieName = prompt("Enter the movie name:");

  if (movieName === null) {
    alert("Booking Cancelled.");
    return;
  }

  if (movieName.trim() === "") {
    alert("Movie name cannot be empty.");
    return;
  }

  // 4. Get ticket count
  alert("One ticket costs ₹200.");

  const ticketInput = prompt("Enter the number of tickets:");

  if (ticketInput === null) {
    alert("Booking Cancelled.");
    return;
  }

  const numberOfTickets = Number(ticketInput);
  const ticketPrice = Number("200");

  // 5. Validate ticket count BEFORE asking for seat type
  let bookingStatus = "";

  if (
    ticketInput.trim() === "" ||
    !Number.isFinite(numberOfTickets) ||
    numberOfTickets < 1
  ) {
    bookingStatus = "Invalid Number of Tickets.";
  } else if (numberOfTickets > 6) {
    bookingStatus = "Maximum 6 Tickets Allowed.";
  } else {
    bookingStatus = "Booking Successful!";
  }

  if (bookingStatus !== "Booking Successful!") {
    alert(bookingStatus);
    return;
  }

  // 6. Get seat type
  const seatType = prompt("Choose your seat type:\nRegular\nPremium\nVIP");

  if (seatType === null) {
    alert("Booking Cancelled.");
    return;
  }

  if (seatType.trim() === "") {
    alert("Seat type cannot be empty.");
    return;
  }

  // 7. Confirm booking
  const bookingConfirmed = confirm("Do you want to proceed with your booking?");

  if (!bookingConfirmed) {
    alert("Booking Cancelled.");
    console.log("Booking Status: Booking Cancelled.");
    return;
  }

  console.log("Booking Confirmed:", bookingConfirmed);
  console.log("Booking Status:", bookingStatus);

  // 8. Calculate the bill
  const totalTicketCost = numberOfTickets * ticketPrice;

  let discountAmount = 0;

  if (numberOfTickets > 3) {
    discountAmount = totalTicketCost * 0.1;
  }

  const convenienceFee = 50;

  const finalAmount = totalTicketCost - discountAmount + convenienceFee;

  const averageCostPerTicket = finalAmount / numberOfTickets;

  const remainder = finalAmount % numberOfTickets;

  // 9. Determine booking category
  let bookingCategory = "";

  if (finalAmount >= 2000) {
    bookingCategory = "Premium Booking";
  } else if (finalAmount >= 1000) {
    bookingCategory = "Standard Booking";
  } else {
    bookingCategory = "Budget Booking";
  }

  // 10. Handle seat type using switch
  let seatMessage = "";

  switch (seatType.trim().toLowerCase()) {
    case "regular":
      seatMessage = "You selected Regular seating.";
      break;

    case "premium":
      seatMessage = "You selected Premium seating.";
      break;

    case "vip":
      seatMessage = "You selected VIP seating.";
      break;

    default:
      seatMessage = "Invalid Seat Type.";
  }

  if (seatMessage === "Invalid Seat Type.") {
    alert(seatMessage);
    return;
  }

  // 11. Display calculation results
  console.log("Seat Message:", seatMessage);
  console.log("Total Ticket Cost:", totalTicketCost);
  console.log("Discount Amount:", discountAmount);
  console.log("Convenience Fee:", convenienceFee);
  console.log("Final Amount:", finalAmount);
  console.log("Average Cost per Ticket:", averageCostPerTicket.toFixed(2));
  console.log("Remainder:", remainder);
  console.log("Booking Category:", bookingCategory);

  // 12. Display ticket readiness using a for loop
  for (let i = 1; i <= numberOfTickets; i++) {
    if (i === 5) {
      break;
    }

    console.log(`Ticket ${i} Ready`);
  }

  // 13. Countdown using a while loop
  let countdown = 3;

  while (countdown >= 1) {
    console.log(countdown);
    countdown--;
  }

  // 14. Prepare tickets using a do...while loop
  let preparationCount = 0;

  do {
    console.log("Preparing Your Tickets...");
    preparationCount++;
  } while (preparationCount < 1);

  // 15. Display cinema seats using nested loops
  for (let row = 65; row <= 67; row++) {
    for (let seat = 1; seat <= 5; seat++) {
      // Skip seat A3
      if (row === 65 && seat === 3) {
        continue;
      }

      console.log(`Seat ${String.fromCharCode(row)}${seat}`);
    }
  }

  // 16. Display final booking details on the webpage
  const bookingOutput = document.getElementById("booking-output");

  bookingOutput.innerHTML = `
  <h3>Booking Summary</h3>
  <p><strong>Customer Name:</strong> ${customerName}</p>
  <p><strong>Movie:</strong> ${movieName}</p>
  <p><strong>Seat Type:</strong> ${seatType}</p>
  <p><strong>Number of Tickets:</strong> ${numberOfTickets}</p>
  <p><strong>Ticket Price:</strong> ₹${ticketPrice}</p>
  <p><strong>Total Ticket Cost:</strong> ₹${totalTicketCost}</p>
  <p><strong>Discount:</strong> ₹${discountAmount}</p>
  <p><strong>Convenience Fee:</strong> ₹${convenienceFee}</p>
  <p><strong>Final Amount:</strong> ₹${finalAmount}</p>
  <p><strong>Average Cost per Ticket:</strong> ₹${averageCostPerTicket.toFixed(2)}</p>
  <p><strong>Remainder:</strong> ${remainder}</p>
  <p><strong>Booking Category:</strong> ${bookingCategory}</p>
  <p><strong>Booking Status:</strong> ${bookingStatus}</p>
  <p><strong>Confirmation Status:</strong> ${bookingConfirmed ? "Confirmed" : "Not Confirmed"}</p>
`;
}

startBooking();
