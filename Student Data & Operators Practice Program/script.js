
// 1. Student information
let studentName = "Arun Kumar";
let age = 21;
let course = "JavaScript";
let totalMarks = 280;
let attendancePercentage = 85;
let isFeePaid = true;
let phoneNumber = "9876543210";
let address = null;
let email;
let bonusMarks = 10;
let attemptCount = 3;


// 2. Display student information
const studentOutput = document.getElementById("student-output");

const students = [
    ["Student Name", studentName],
    ["Age", age],
    ["Course", course],
    ["Total Marks", totalMarks],
    ["Attendance Percentage", attendancePercentage],
    ["Is Fee Paid", isFeePaid],
    ["Phone Number", phoneNumber],
    ["Address", address],
    ["Email", email],
    ["Bonus Marks", bonusMarks],
    ["Attempt Count", attemptCount]
];

students.forEach(function (student) {
    const name = student[0];
    const value = student[1];

    const dataType = value === null ? "null" : typeof value;

    const item = document.createElement("p");
    item.className = "output-item";
    item.innerHTML =
        `<strong>${name}:</strong> ${String(value)} 
        <br><strong>Data Type:</strong> ${dataType}`;

    studentOutput.appendChild(item);

    console.log(name + ":", value, "| Data Type:", dataType);
});


// 3. Arithmetic Operators

// Add bonus marks to total marks
let updatedTotalMarks = totalMarks + bonusMarks;

// Calculate average marks
let averageMarks = updatedTotalMarks / 5;

// Find remainder
let marksRemainder = updatedTotalMarks % 5;

// Calculate square of age
let ageSquare = age ** 2;

// Display arithmetic results
const arithmeticOutput = document.getElementById("arithmetic-output");

const arithmeticResults = [
    ["Updated Total Marks", updatedTotalMarks],
    ["Average Marks", averageMarks],
    ["Remainder when Total Marks are divided by 5", marksRemainder],
    ["Square of Age", ageSquare]
];

arithmeticResults.forEach(function (result) {
    const item = document.createElement("p");
    item.className = "output-item";
    item.innerHTML = `<strong>${result[0]}:</strong> ${result[1]}`;

    arithmeticOutput.appendChild(item);

    console.log(result[0] + ":", result[1]);
});


// 4. Assignment Operators

totalMarks += 20;
const marksAfterAddition = totalMarks;
console.log("Total Marks after += 20:", totalMarks);

attendancePercentage -= 5;
console.log("Attendance after -= 5:", attendancePercentage);

bonusMarks *= 2;
console.log("Bonus Marks after *= 2:", bonusMarks);

totalMarks /= 2;
const marksAfterDivision = totalMarks;
console.log("Total Marks after /= 2:", totalMarks);

totalMarks %= 7;
console.log("Total Marks after %= 7:", totalMarks);

// Display assignment results on the webpage
const assignmentOutput = document.getElementById("assignment-output");

const assignmentResults = [
    ["Total Marks after += 20", marksAfterAddition],
    ["Attendance Percentage after -= 5", attendancePercentage],
    ["Bonus Marks after *= 2", bonusMarks],
    ["Total Marks after /= 2", marksAfterDivision],
    ["Total Marks after %= 7", totalMarks]
];

assignmentResults.forEach(function (result) {
    const item = document.createElement("p");
    item.className = "output-item";
    item.innerHTML = `<strong>${result[0]}:</strong> ${result[1]}`;
    assignmentOutput.appendChild(item);

    console.log(result[0] + " (displayed):", result[1]);
});


// 5. Comparison Operators

const comparisonResults = [
    ["Age >= 18", age >= 18],
    ["Total Marks > 250", totalMarks > 250],
    ["Attendance Percentage < 75", attendancePercentage < 75],
    ['Course == "JavaScript"', course == "JavaScript"],
    ['Course === "JavaScript"', course === "JavaScript"],
    ['Student Name != "Admin"', studentName != "Admin"],
    ['Student Name !== "Admin"', studentName !== "Admin"],
    ["Age < 25", age < 25],
    ["Attendance Percentage <= 100", attendancePercentage <= 100]
];

const comparisonOutput = document.getElementById("comparison-output");

comparisonResults.forEach(function (result) {
    const item = document.createElement("p");
    item.className = "output-item";
    item.innerHTML = `<strong>${result[0]}:</strong> ${result[1]}`;

    comparisonOutput.appendChild(item);

    console.log(result[0] + ":", result[1]);
});


// 6. Logical Operators

// Exam eligibility: attendance must be 75 or above AND fee must be paid
const examEligible =
    attendancePercentage >= 75 && isFeePaid;

console.log("Eligible for Exam:", examEligible);

// Certificate eligibility: marks must be 250 or above OR attendance must be 90 or above
const certificateEligible =
    totalMarks >= 250 || attendancePercentage >= 90;

console.log("Eligible for Certificate:", certificateEligible);

// NOT operator: opposite of fee-paid value
const oppositeFeeStatus = !isFeePaid;

console.log("Opposite of Is Fee Paid:", oppositeFeeStatus);

// Display results on the webpage
const logicalOutput = document.getElementById("logical-output");

const logicalResults = [
    ["Eligible for Exam", examEligible],
    ["Eligible for Certificate", certificateEligible],
    ["Opposite of Is Fee Paid (!isFeePaid)", oppositeFeeStatus]
];

logicalResults.forEach(function (result) {
    const item = document.createElement("p");
    item.className = "output-item";
    item.innerHTML = `<strong>${result[0]}:</strong> ${result[1]}`;

    logicalOutput.appendChild(item);
});


// 7. Increment and Decrement Operators

attemptCount++;
const incrementedAttemptCount = attemptCount;
console.log("Attempt Count after increment (++):", incrementedAttemptCount);

attemptCount--;
const decrementedAttemptCount = attemptCount;
console.log("Attempt Count after decrement (--):", decrementedAttemptCount);


// 8. Ternary Operators

const passStatus = averageMarks >= 50 ? "Pass" : "Fail";
console.log("Result:", passStatus);

const ageStatus = age >= 18 ? "Adult" : "Minor";
console.log("Age Status:", ageStatus);


// Display results on the webpage
const otherOutput = document.getElementById("other-output");

const otherResults = [
    ["Attempt Count after Increment (++)", incrementedAttemptCount],
    ["Attempt Count after Decrement (--)", decrementedAttemptCount],
    ["Result", passStatus],
    ["Age Status", ageStatus]
];

otherResults.forEach(function (result) {
    const item = document.createElement("p");
    item.className = "output-item";
    item.innerHTML = `<strong>${result[0]}:</strong> ${result[1]}`;

    otherOutput.appendChild(item);
});
