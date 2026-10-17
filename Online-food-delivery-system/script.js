
const output = document.getElementById("output");

// 1. Customer details stored in an object
const customer = {
  customerName: "Arun Kumar",
  mobileNumber: "9876543210",
  deliveryAddress: "Vattiyoorkavu, Thiruvananthapuram",
  paymentMethod: "UPI",
  membershipType: "Gold"
};

// 2. Array containing six food items
const foodItems = [
  "Burger",
  "Pizza",
  "French Fries",
  "Chicken Biryani",
  "Masala Dosa",
  "Ice Cream"
];

// Helper function to display a heading
function addHeading(text) {
  const heading = document.createElement("h2");
  heading.textContent = text;
  output.appendChild(heading);
}

// Helper function to display a result
function addResult(label, value) {
  const paragraph = document.createElement("p");
  paragraph.className = "result-item";

  const strong = document.createElement("strong");
  strong.textContent = label + ": ";

  paragraph.appendChild(strong);
  paragraph.appendChild(document.createTextNode(String(value)));
  output.appendChild(paragraph);
}

// Helper function to display a list
function addList(items) {
  const ul = document.createElement("ul");

  items.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  output.appendChild(ul);
}

// Display customer details
addHeading("Customer Details");

addResult("Customer Name", customer.customerName);
addResult("Mobile Number", customer.mobileNumber);
addResult("Delivery Address", customer.deliveryAddress);
addResult("Payment Method", customer.paymentMethod);
addResult("Membership Type", customer.membershipType);

// Display initial food items
addHeading("Food Items");
addList(foodItems);
addResult("Total Number of Food Items", foodItems.length);

// Display the same initial results in the browser console
console.log("Customer Details:", customer);
console.log("Food Items:", foodItems);
console.log("Total Number of Food Items:", foodItems.length);
