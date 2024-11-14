# Hanzi Flashcards App

The Hanzi Flashcards App is a tool designed to help users learn and retain Chinese vocabulary effectively. Users can create, view, and manage flashcards for different HSK (Chinese proficiency) levels, enhancing their study experience through interactive flashcards that can be flipped to reveal meanings and translations.

## Features

- **Flashcard Creation**: Easily add new flashcards, specifying the HSK level, Hanzi (Chinese characters), Pinyin, and English translation.
- **Flashcard Viewing and Flipping**: View all created flashcards and flip them to reveal translations. Each card includes the Hanzi character, its pronunciation (Pinyin), and English meaning.
- **Level Selection**: Select HSK levels to categorize vocabulary, allowing structured learning.
- **Persistent Storage**: Cards are stored persistently using a local JSON server, so data remains even after a page refresh.
- **Delete Functionality**: Remove any flashcard from the list and the database with a delete button for easy management.

## Installation and Setup

To run this app locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd hanzi-flashcards-app

2. Install Dependencies:
   ```bash 
    npm install

3. Set Up JSON Server:

    ```bash 
    npx json-server --watch db.json --port 5000

4. Start and run the Application:
    ```bash 
    npm start

5. Open in Browser:

Open your browser and navigate to http://localhost:3000 to view the app.

## Usage Instructions
# Navigation
# Home: 
Brief app introduction and options to sign up or log in.
# Create Cards: 
Access the flashcard creation form to add new flashcards to your collection.
# View Cards: 
See all created flashcards displayed. Flip a card to reveal its translation or delete any unwanted cards.


## Component Breakdown
# App.js: 
Main component managing the state and routing.
# NavBar: 
Allows navigation between the Home, Create Cards, and View Cards pages.
# CreateCards: 
Form component for adding new flashcards, with input validation to ensure all fields are completed before submission.
# ViewCards: 
Displays a list of flashcards, each with flip and delete functionality.
# CardDisplay: 
Each individual flashcard with front (Hanzi and Pinyin) and back (English translation) views.

## Technologies Used
# React: 
For building the user interface and handling component state.
# React Router: 
For managing navigation between different views.
# CSS: 
For styling components.
# JSON Server: 
Provides a local REST API for persisting flashcard data in db.json.

## Future Enhancements
# Search Functionality: 
Add a search bar to filter flashcards based on keywords or HSK levels.
# User Authentication: 
Allow users to log in and save flashcards to personal accounts.
# Quiz Mode: 
Implement a quiz or practice mode to test users on their flashcard knowledge.


## Contributors
Developed by Fridah Karimi. Contributions are welcome! Feel free to submit issues and pull requests for improvements.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
