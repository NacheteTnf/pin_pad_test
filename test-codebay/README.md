## Pinpad Project Documentation:

Before we dive into the project, we need to prepare the styles. To do this, we'll compile the Sass code. Sass is a preprocessor that allows us to write CSS in a more organized and efficient way.

To compile Sass, we recommend installing the Live Sass Compiler extension in your code editor. Once installed, run the following command in your terminal:
sass src/css/main.scss src/css/main.css

For the live server:
sass --watch src/css/main.scss:src/css/main.css

This project implements a digital Pinpad designed to provide an additional layer of security for accessing an application or system. Users establish a unique PIN that must be entered correctly to proceed.

## Key Features

PIN setup: Upon launching the application, a modal prompts the user to create a numeric PIN.
PIN validation: Each time a PIN is entered, it's compared to the stored value.
Limited attempts: A maximum number of failed attempts is allowed. Exceeding this limit redirects the user to an error page.
Informative messages: Clear messages are displayed on the LCD screen to indicate the operation's status (PIN saved, validation error, etc.).
Responsive design: The interface adapts to different screen sizes for an optimal user experience.

## Technologies Used

HTML5: Provides the basic structure of the page.
CSS3 (Sass): Styles and designs the interface.
JavaScript: Handles application logic, event management, and validation.
localStorage: Stores the PIN in the user's browser.

## Folder Structure:

*assets:
Contains all images, icons, and fonts used in the project.
*src:
Houses the source code for the project.
Contains two subfolders for CSS and JavaScript files.
*css:
Contains a set of folders organized by purpose, along with the main Sass file for imports.
*abstracts: Holds variables for the project.
*base: Contains global styles for the application.
*components: Stores styles for individual components from the Figma UI Kit.
*layouts: Separates responsive styles for mobile and desktop.
*js:
Contains all JavaScript logic for the application.
Additionally, you would have index.html (the main HTML file) and README.md (a document explaining the project).
