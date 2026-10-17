
const output = document.getElementById("output");

// 1. Customer details
const customer = {
  customerName: "Arun Kumar",
  mobileNumber: "9876543210",
  deliveryAddress: "Vattiyoorkavu, Thiruvananthapuram",
  paymentMethod: "UPI",
  membershipType: "Gold"
};

// 2. Food items
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

// Function 2: display all food items
function displayFoodItems() {
  addHeading("Food Items");
  addList(foodItems);
}

// Function 3: return the total number of food items
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

// Function 6: check whether a food item exists using includes()
function checkFoodItem(item) {
  return foodItems.includes(item);
}

// Display customer details and initial order
displayCustomerDetails();
displayFoodItems();
addResult("Total Number of Food Items", getTotalFoodItems());

// Demonstrate adding an item
addFoodItem("Pasta");

addHeading("Updated Food List");
addList(foodItems);
addResult("Updated Total", getTotalFoodItems());

// Demonstrate removing the last item
const removedItem = removeLastFoodItem();

addHeading("Remove Last Food Item");
addResult("Removed Item", removedItem);
addList(foodItems);

// Demonstrate searching for an item
const searchItem = "Pizza";

addHeading("Search Result");
addResult("Food Item", searchItem);
addResult("Exists in Order", checkFoodItem(searchItem));

// Browser console output
console.log("Customer Details:", customer);
console.log("Food Items:", ["Burger", "Pizza", "French Fries",
  "Chicken Biryani", "Masala Dosa", "Ice Cream"]);
console.log("Total Number of Food Items:", 6);
console.log("Updated Food List:", foodItems);
console.log("Removed Food Item:", removedItem);
console.log("Search Result:", checkFoodItem(searchItem));
