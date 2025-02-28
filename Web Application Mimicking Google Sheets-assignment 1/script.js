
document.addEventListener("DOMContentLoaded", () => {
    console.log("Spreadsheet Ready!");
});



function addRow() {
    let table = document.getElementById("spreadsheet").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    let cols = table.rows[0].cells.length;
    for (let i = 0; i < cols; i++) {
        let cell = newRow.insertCell();
        cell.contentEditable = "true";
    }
}

function addColumn() {
    let table = document.getElementById("spreadsheet").getElementsByTagName('tbody')[0];
    for (let row of table.rows) {
        let cell = row.insertCell();
        cell.contentEditable = "true";
    }
}

function calculateFormula() {
    let input = document.getElementById("formulaInput").value.toUpperCase();
    
    if (input.startsWith("SUM(")) {
        let range = input.match(/\((.*?)\)/)[1]; 
        alert("SUM formula detected for range: " + range);
    }
    // Similarly, implement AVERAGE, MAX, MIN, COUNT
}

function trimCells() {
    document.querySelectorAll("td").forEach(cell => {
        cell.innerText = cell.innerText.trim();
    });
}

function convertToUpper() {
    document.querySelectorAll("td").forEach(cell => {
        cell.innerText = cell.innerText.toUpperCase();
    });
}

function convertToLower() {
    document.querySelectorAll("td").forEach(cell => {
        cell.innerText = cell.innerText.toLowerCase();
    });
}

document.querySelectorAll("td").forEach(cell => {
    cell.addEventListener("input", function() {
        if (!isNaN(this.innerText)) {
            this.style.backgroundColor = "lightgreen";
        } else {
            this.style.backgroundColor = "LIGHTBLUE";
        }
    });
});

function saveSpreadsheet() {
    let data = [];
    document.querySelectorAll("tr").forEach(row => {
        let rowData = [];
        row.querySelectorAll("td").forEach(cell => {
            rowData.push(cell.innerText);
        });
        data.push(rowData);
    });
    localStorage.setItem("spreadsheetData", JSON.stringify(data));
    alert("Spreadsheet saved!");
}

function loadSpreadsheet() {
    let data = JSON.parse(localStorage.getItem("spreadsheetData"));
    if (!data) return;
    
    let table = document.getElementById("spreadsheet").getElementsByTagName('tbody')[0];
    table.innerHTML = ""; 

    data.forEach(rowData => {
        let newRow = table.insertRow();
        rowData.forEach(cellData => {
            let cell = newRow.insertCell();
            cell.contentEditable = "true";
            cell.innerText = cellData;
        });
    });
    alert("Spreadsheet loaded!");
}

