'use strict';

let storeHours = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"]

function randomNumberBetween(min, max) {
    return Math.ceil(Math.random() * ((max - min)) + min);
}

const storeLocations = [];
const tableBodyEl = document.getElementById("table-values");

function Store (city, minCustomersHr, maxCustomersHR, avgCustomerPurchase, hourlyCustomers, cookiesSoldPerHour, totalCookieSoldPerStore, randNumber) {
    this.city = city;
    this.minCustomersHr = minCustomersHr;
    this.maxCustomersHR = maxCustomersHR;
    this.avgCustomerPurchase = avgCustomerPurchase;
    this.hourlyCustomers = hourlyCustomers;
    this.cookiesSoldPerHour = cookiesSoldPerHour;
    this.totalCookieSoldPerStore = totalCookieSoldPerStore;
    this.randomNumberBetween = randomNumberBetween
}

Store.prototype.drawRow = function () {
    const tableRow = document.createElement('tr');
    tableBodyEl.appendChild(tableRow);
    const tableData1 = document.createElement('td');
    tableData1.textContent = this.city;
    tableRow.appendChild(tableData1);
    const tableData2 = document.createElement('td');
    tableData2.textContent = this.name;
    tableRow.appendChild(tableData2);
    const tableData3 = document.createElement('td');
    tableData3.textContent = this.age;
    tableRow.appendChild(tableData3);
}

let Seattle = new Store ('Seattle', 23, 65, 6.3, [], [], 0, (23,65));
storeLocations.push(Seattle);

console.log(Seattle);

let Tokyo = new Store ('Tokyo', 3, 24, 1.2, [], [], 0, 0);
storeLocations.push(Tokyo);

console.log(Tokyo);

let Dubai = new Store ('Dubai', 11, 28, 3.7, [], [], 0, 0);
storeLocations.push(Dubai);

console.log(Dubai);

let Paris = new Store ('Paris', 20, 38, 2.3, [], [], 0, 0);
storeLocations.push(Paris);

console.log(Paris);

let Lima = new Store ('Lima', 2, 16, 4.6, [], [], 0, 0);
storeLocations.push(Lima);

console.log(Lima);

let Total = new Store ();
storeLocations.push(Total);

console.log(storeLocations);

Store.prototype.customerPerHour = function(a, b) {
    for (let i = 0; i < storeHours.length; i++) {
        randomNumberBetween() * 6.3;
    }
}

console.log(Seattle);

for (let i = 0; i < storeLocations.length; i++) {
    storeLocations[i].drawRow();
}
