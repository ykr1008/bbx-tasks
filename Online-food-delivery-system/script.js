
const output = document.getElementById("output");

// 1. Customer details object
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

// Helper function: display a heading
function addHeading(text) {
  const heading = document.createElement("h2");
  heading.textContent = text;
  output.appendChild(heading);
}

// Helper function: display a result
function addResult(label, value) {
  const paragraph = document.createElement("p");
  paragraph.className = "result-item";

  const strong = document.createElement("strong");
  strong.textContent = label + ": ";

  paragraph.appendChild(strong);
  paragraph.appendChild(document.createTextNode(String(value)));
  output.appendChild(paragraph);
}

// Helper function: display a list
function addList(items) {
  const ul = document.createElement("ul");

  items.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  output.appendChild(ul);
}

// Function 1: display customer details
function displayCustomerDetails() {
  addHeading("Customer Details");

  addResult("Customer Name", customer.customerName);
  addResult("Mobile Number", customer.mobileNumber);
  addResult("Delivery Address", customer.deliveryAddress);
  addResult("Payment Method", customer.paymentMethod);
  addResult("Membership Type", customer.membershipType);
}

// Function 2: display all ordered food items
function displayFoodItems() {
  addHeading("Food Items");
  addList(foodItems);
}

// Function 3: return total number of food items
function getTotalFoodItems() {
  return foodItems.length;
}

// Function 4: add a food item using push()
function addFoodItem(item) {
  foodItems.push(item);
}

// Function 5: remove the last food item using pop()
function removeLastFoodItem() {
  return foodItems.pop();
}

// Function 6: check whether a food item exists
function checkFoodItem(item) {
  return foodItems.includes(item);
}

// Function 7: display food items alphabetically
function displaySortedFoodItems() {
  const sortedItems = [...foodItems];
  sortedItems.sort();

  addHeading("Sorted Food List");
  addList(sortedItems);
}

// Function 8: display food items in reverse order
function displayReversedFoodItems() {
  const reversedItems = [...foodItems];
  reversedItems.reverse();

  addHeading("Reversed Food List");
  addList(reversedItems);
}

// Function 9: display all food items as one string
function displayJoinedFoodItems() {
  const joinedItems = foodItems.join(" | ");

  addHeading("Joined Food List");
  addResult("Complete Order", joinedItems);
}

// Function 10: personalized welcome message
function displayWelcomeMessage(name) {
  return "Welcome, " + name + "! Thank you for ordering with us.";
}

// Function expression: display delivery status
const displayDeliveryStatus = function() {
  return "Your order is confirmed and being prepared.";
};

// Arrow function: estimated delivery time
const getEstimatedDeliveryTime = () => {
  return "30–45 minutes";
};

// Display customer details
addHeading("Welcome");
addResult(
  "Message",
  displayWelcomeMessage(customer.customerName)
);

displayCustomerDetails();

// Display initial food items and count
displayFoodItems();
addResult("Total Number of Food Items", getTotalFoodItems());

// Add a new item
addFoodItem("Pasta");

addHeading("Updated Food List");
addList(foodItems);
addResult("Updated Total", getTotalFoodItems());

// Remove the last item
const removedItem = removeLastFoodItem();

addHeading("Remove Last Food Item");
addResult("Removed Item", removedItem);
addList(foodItems);

// Search for a food item
const searchItem = "Pizza";

addHeading("Search Result");
addResult("Food Item", searchItem);
addResult("Exists in Order", checkFoodItem(searchItem));

// Display sorted, reversed, and joined lists
displaySortedFoodItems();
displayReversedFoodItems();
displayJoinedFoodItems();

// Delivery status
addHeading("Delivery Status");
addResult("Status", displayDeliveryStatus());

// Estimated delivery time
addHeading("Estimated Delivery Time");
addResult("Delivery Estimate", getEstimatedDeliveryTime());

// Display all required results in the browser console
console.log("Welcome Message:", displayWelcomeMessage(customer.customerName));
console.log("Customer Details:", customer);
console.log("Food Items:", foodItems);
console.log("Total Number of Food Items:", getTotalFoodItems());
console.log("Updated Food List:", foodItems);
console.log("Removed Food Item:", removedItem);
console.log("Search Result:", checkFoodItem(searchItem));
console.log("Sorted Food List:", [...foodItems].sort());
console.log("Reversed Food List:", [...foodItems].reverse());
console.log("Joined Food List:", foodItems.join(" | "));
console.log("Delivery Status:", displayDeliveryStatus());
console.log("Estimated Delivery Time:", getEstimatedDeliveryTime());
