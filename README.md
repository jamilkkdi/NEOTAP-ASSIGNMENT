# NEOTAP Assignment - Web Application Projects

This repository contains two web application projects developed for NEOTAP assignments. Each project mimics real-world applications with core functionalities implemented using HTML, CSS, and JavaScript.

## Assignment 1: Web Application Mimicking Google Sheets

### Objective
Develop a web application that closely mimics the user interface and core functionalities of **Google Sheets**. This assignment focuses on implementing mathematical functions, data quality functions, data entry, validation, and essential UI interactions.

### Features
1. **Spreadsheet Interface**
   - UI resembling Google Sheets with a formula bar and cell structure.
   - Drag functionality for cell content, formulas, and selections.
   - Support for cell dependencies and dynamic updates.
   - Basic cell formatting options: bold, italics, font size, and color.
   - Ability to add, delete, and resize rows and columns.

2. **Mathematical Functions**
   - **SUM**: Calculates the sum of a range of cells.
   - **AVERAGE**: Calculates the average of a range of cells.
   - **MAX**: Returns the maximum value from a range of cells.
   - **MIN**: Returns the minimum value from a range of cells.
   - **COUNT**: Counts the number of cells containing numerical values in a range.

3. **Data Quality Functions**
   - **TRIM**: Removes leading and trailing whitespace from a cell.
   - **UPPER**: Converts text to uppercase.
   - **LOWER**: Converts text to lowercase.
   - **REMOVE_DUPLICATES**: Removes duplicate rows.
   - **FIND_AND_REPLACE**: Find and replace specific text in a range.

4. **Data Entry and Validation**
   - Users can enter text, numbers, and dates.
   - Basic validation ensures only numbers are entered in numeric cells.

### Technologies Used
- **HTML** for structure.
- **CSS** for styling and layout.
- **JavaScript** for functionality (formulas, cell management, data quality functions).
- **LocalStorage** for saving and loading data.

### How to Use
1. Open `index.html` in any modern browser to use the application.
2. Input formulas like `SUM(A1:B2)` and see calculations in the spreadsheet.
3. Apply functions like **Trim**, **Uppercase**, **Lowercase** to the data.
4. Add rows and columns and use the buttons to save and load data.

---

## Assignment 2: Web Application Mimicking Google Sheets (Updated Features)

### Objective
The goal of this assignment is to develop a web application that closely mimics the user interface and core functionalities of **Google Sheets**. This includes mathematical and data quality functions, enhanced data entry, and validation features.

### Key Features
1. **Spreadsheet Interface** (Enhanced)
   - Improved UI mimicking Google Sheets, with support for toolbar, formula bar, and cell structures.
   - Dragging functionality for cells, formulas, and selections, mimicking Google Sheets' behavior.
   - Support for cell dependencies where formulas automatically update based on changes in related cells.
   - Support for basic cell formatting (bold, italics, color, etc.).
   - Capability to add, delete, and resize rows and columns dynamically.

2. **Mathematical Functions**
   - **SUM**: Adds up the range of cells.
   - **AVERAGE**: Calculates the average of the range.
   - **MAX**: Returns the largest value in a range.
   - **MIN**: Returns the smallest value in a range.
   - **COUNT**: Counts numerical values in a given range.

3. **Data Quality Functions**
   - **TRIM**: Removes extra spaces from data in cells.
   - **UPPER**: Converts text in cells to uppercase.
   - **LOWER**: Converts text in cells to lowercase.
   - **REMOVE_DUPLICATES**: Removes duplicate entries.
   - **FIND_AND_REPLACE**: Allows users to search and replace text in selected cells.

4. **Data Entry and Validation**
   - Supports different data types (numbers, text, dates).
   - Includes validation to ensure numeric cells only accept numbers.

### Technologies Used
- **HTML** for building the page structure.
- **CSS** for styling the spreadsheet layout and UI.
- **JavaScript** for handling data manipulation, cell management, and formulas.
- **LocalStorage** to save and load spreadsheet data.

### How to Use
1. Open the application by launching the `index.html` file in a browser.
2. You can enter formulas, such as `SUM(A1:B2)`, directly into the formula input to calculate cell values.
3. Apply data quality functions (e.g., **Trim**, **Uppercase**, **Lowercase**) to your selected cells.
4. Add, delete, and resize rows and columns using the provided buttons.
5. Use the **Save** and **Load** buttons to store and retrieve your data using local storage.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by **Google Sheets** for the interface and functionality design.
- Thanks to the open-source community for providing resources on HTML, CSS, and JavaScript.

---

### How to Run the Project
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/NEOTAP-ASSIGNMENT.git

