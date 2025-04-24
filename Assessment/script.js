// Parse Table 1 and build a dictionary of index-value pairs
const table1Rows = document.querySelectorAll('#table1 tr');
const dataMap = {};

for (let i = 1; i < table1Rows.length; i++) {
    const cells = table1Rows[i].getElementsByTagName('td');
    const key = cells[0].textContent.trim();
    const value = parseInt(cells[1].textContent.trim(), 10);
    dataMap[key] = value;
}

// Calculate values for Table 2 based on formulas
const alpha = dataMap['A5'] + dataMap['A20'];
const beta = Math.floor(dataMap['A15'] / dataMap['A7']);
const charlie = dataMap['A13'] * dataMap['A12'];

// Insert calculated values into Table 2
const table2 = document.getElementById('table2');

const insertRow = (category, value) => {
    const row = table2.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = category;
    cell2.textContent = value;
};

insertRow("Alpha", alpha);
insertRow("Beta", beta);
insertRow("Charlie", charlie);
