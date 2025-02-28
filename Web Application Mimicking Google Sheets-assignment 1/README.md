# Google Sheets Clone - Assignment 1

## Objective
The objective of this assignment is to develop a web application that closely mimics the user interface and core functionalities of **Google Sheets**. The application focuses on the following features:
- Mathematical and data quality functions.
- Data entry and validation.
- UI interactions that allow users to manipulate the spreadsheet seamlessly.

## Features
### 1. Spreadsheet Interface
- **UI Mimicry**: The design and layout are closely modeled after Google Sheets, including a toolbar, formula bar, and cell structure.
- **Drag Functions**: Cells, formulas, and selections can be dragged to mirror Google Sheets behavior.
- **Cell Dependencies**: Formulas and functions accurately reflect cell dependencies, and updates are made when related cells change.
- **Basic Cell Formatting**: Supports basic formatting features such as bold, italics, font size, and color.
- **Row and Column Management**: Users can add, delete, and resize rows and columns.

### 2. Mathematical Functions
- **SUM**: Calculates the sum of a range of cells.
- **AVERAGE**: Calculates the average of a range of cells.
- **MAX**: Returns the maximum value from a range of cells.
- **MIN**: Returns the minimum value from a range of cells.
- **COUNT**: Counts the number of cells containing numerical values in a range.

### 3. Data Quality Functions
- **TRIM**: Removes leading and trailing whitespace from a cell.
- **UPPER**: Converts the text in a cell to uppercase.
- **LOWER**: Converts the text in a cell to lowercase.
- **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.
- **FIND_AND_REPLACE**: Allows users to find and replace specific text within a range of cells.

### 4. Data Entry and Validation
- Users can input various data types such as numbers, text, and dates.
- Basic data validation ensures that numeric cells only contain numbers.

## How It Works
1. **Spreadsheet Interface**: 
   - Cells are editable, and users can add or remove rows and columns.
   - Users can apply formulas like `SUM`, `AVERAGE`, etc., by entering them in the formula input field.
   - Buttons are available for applying functions like **Trim Spaces**, **Uppercase**, and **Lowercase** to selected cells.

2. **Data Management**: 
   - Users can add, delete, and resize rows and columns.
   - Data can be saved and loaded using local storage to persist spreadsheet data.

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/google-sheets-clone.git
Navigate to the project directory:

bash
Copy code
cd google-sheets-clone
Open index.html in your browser to start the application.

Technologies Used

HTML for the structure of the spreadsheet and controls.

CSS for styling and layout.

JavaScript for functionality, including formula calculations, data manipulation, and event handling.

Local Storage for saving and loading the spreadsheet data.
Usage

Open the application in a browser.

Use the formula input field to enter formulas like SUM(A1:B2).

Apply data quality functions like Trim Spaces, Uppercase, and Lowercase to your selected cells.

Add rows and columns using the provided buttons.

Save and load your spreadsheet using the Save and Load buttons.
License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

Thanks to the Google Sheets team for inspiration in the design and features of this project.

Thanks to the open web community for resources on HTML, CSS, and JavaScript that helped in building this project.

vbnet
Copy code

### Instructions to add it to GitHub:

1. Go to your GitHub repository for the project (Google Sheets Clone).
2. Click on the **`README.md`** file (or create one if it doesn't exist).
3. Paste the above content directly into the file.
4. Scroll down, add a commit message like **"Added README.md file"**, and click **Commit changes**.

This will update your repository with a detailed description of the project and provide users with clear instructions on how to run and use the web application. Let me know if you need further changes or any assistance!





