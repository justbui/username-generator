# Username Generator

The Username Generator is a web application that allows users to generate unique usernames based on their personal information.

## Features

- Collects basic user information: first name, last name, date of birth, favorite fruit.
- Generates a username by concatenating the user's information.
- Handles edge cases such as invalid dates and spaces in names or favorite fruits.

## Technologies Used

- Frontend:
  - React (TypeScript)
  - HTML/CSS

- Backend:
  - Node.js
  - Express.js
  - TypeScript

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/justbui/username-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd username-generator
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install  # or yarn install
   cd ../backend
   npm install  # or yarn install
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

   This will start the backend server on port 3001 by default.

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

   This will start the React development server on port 3000 by default and open the application in your default web browser.

### Usage

- Open your web browser and navigate to `http://localhost:3000` to access the application.
- Fill out the form with your personal information (first name, last name, date of birth, favorite fruit) and submit the form to generate your username.
- The generated username will be displayed on the screen.
