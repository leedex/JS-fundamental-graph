// JavaScript Fundamentals

// Declare variables of different data types
let name = "John Doe";  // String
let age = 30;           // Number
let isStudent = true;   // Boolean

// Define and call functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Use console.log() to print output
console.log(add(5, 3));          // Output: 8
console.log(subtract(10, 4));    // Output: 6
console.log(multiply(7, 2));     // Output: 14
console.log(divide(12, 4));      // Output: 3

// DOM Manipulation
document.getElementById('addBtn').addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = `Sum: ${add(num1, num2)}`;
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = `Difference: ${subtract(num1, num2)}`;
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = `Product: ${multiply(num1, num2)}`;
});

document.getElementById('divideBtn').addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = `Quotient: ${divide(num1, num2)}`;
});

// Interactive Charts and Graphs using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Change to 'line', 'pie', etc. for different chart types
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Data',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
