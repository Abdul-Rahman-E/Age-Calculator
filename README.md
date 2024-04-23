# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Key features](#key-features)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

The Age Calculator App is a sophisticated and user-friendly tool, built using React.js, Tailwind CSS, and Framer Motion, designed to accurately calculate a person's age based on the provided birthdate. This application features three input sections for day, month, and year, ensuring precise and error-free data entry. With a robust set of features, including input validation, dark and light mode toggle, responsive design, and interactive elements, the app delivers a seamless experience across various devices.

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Key features

1. Input Validation:

- The app offers comprehensive input validation to ensure accurate data entry.
- Validation errors are displayed under the following conditions:
- When a field is left empty.
- When the day number is not between 1-31.
- When the month number is not between 1-12.
- When the year is in the future.
- When the date is invalid (e.g., 31/04/1991 - as there are 30 days in April).

2. Dark and Light Mode Toggle:

- Enhancing accessibility, the app offers both dark and light mode options.
- Users can seamlessly switch between modes for a comfortable viewing experience.

3. Responsive Design:

- The Age Calculator App is fully responsive, ensuring a consistent and optimized user experience across various devices, including mobile phones, tablets, and desktops.

4. Interactive Elements:

- Integrated hover and active interactions provide a dynamic user experience.
- Users can navigate through the app effortlessly with responsive and engaging elements.

5. Animated Results:

- Age numbers smoothly animate to their final value when the form is submitted, enhancing the overall user experience.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

1. Project Setup:

   - Initialized the project with Create React App.
   - Integrated Tailwind CSS and Framer Motion libraries.
   - Set up the basic project structure.

2. Component Creation:

- Panel Component:

  - Created a Panel component responsible for displaying the age calculator form.
  - Implemented state management for form values, form errors, submission status, and result.
  - Developed validation for the input fields to handle scenarios such as:
    - Empty fields
    - Day not between 1-31
    - Month not between 1-12
    - Year in the future
    - Invalid date (e.g., 31/04/1991)
  - Implemented responsiveness for mobile and desktop screen sizes.
  - Integrated dark and light mode toggle for accessibility.
  - Implemented hover and active interactions.
  - Animated the age numbers to their final number when the form is submitted.

- DarkModeSlider Component:

  - Created a DarkModeSlider component responsible for the dark mode toggle.
  - Implemented functionality to toggle between light and dark mode.

- App Component:

  - Created an App component responsible for integrating the Panel and DarkModeSlider components.
  - Established a context for managing the theme throughout the application.
  - Set up the theme toggle functionality.

3. Styling:

- Styled the components using Tailwind CSS, focusing on a clean and modern design.
- Ensured the application is fully responsive for both mobile and desktop devices.

4. Deployment:

- Deployed the application on GitHub Pages and Netlify.

5. Review and Finalization:

- Reviewed the codebase, ensuring all code is clean, well-commented, and follows best practices.
- Finalized the project, ready for deployment on GitHub Pages and Netlify.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Author

- Website - [Abdul Rahman](https://www.your-site.com)
- Frontend Mentor - [@Abdul-Rahman-E](https://www.frontendmentor.io/profile/Abdul-Rahman-E)
- github - [Abdul-Rahman-E](https://github.com/Abdul-Rahman-E)
