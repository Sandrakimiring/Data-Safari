# DataSafari Academy - Research Methodology Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

## Overview

DataSafari Academy is a web platform designed to provide accessible and engaging data science education. As part of a research methodology assignment, this project focuses on creating a user-friendly environment where students can access study materials, track their progress, and collaborate through a discussion hub.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Project Structure](#project-structure)
-   [Setup and Installation](#setup-and-installation)
-   [Usage](#usage)
-   [Firebase Authentication](#firebase-authentication)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

## Features

-   **User Authentication**: Secure registration and login system using Firebase Authentication.
    -   Email/Password based authentication
    -   Email verification
    -   Password reset functionality
-   **Free Study Materials**: A curated collection of study resources accessible to all users.
    -   Organized by topic and difficulty level
    -   Includes tutorials, articles, and code examples
-   **Progress Tracking**: Tools for students to monitor their learning journey and completed courses.
    -   Tracks course completion
    -   Visual progress indicators
-   **Student Discussion Hub**: A community forum for students to connect, share ideas, and ask questions.
    -   Categorized discussion topics
    -   User profiles and activity tracking
-   **Responsive Design**: Ensures a seamless experience across various devices (desktops, tablets, and mobile phones).
    -   Utilizes CSS media queries for adaptive layouts
-   **Light/Dark Mode**: Offers a toggle for users to switch between light and dark themes, enhancing readability and user preference.
    -   Theme preference saved in local storage
-   **Profile Management**: Allows users to edit their profiles.
    -   Update profile picture
    -   Edit personal information
-   **FAQ Section**: Provides answers to frequently asked questions.
    -   Categorized questions for easy navigation
-   **About Us**: Information about the Data Safari Academy.
    -   Mission and vision
    -   Team members
-   **Documentation**: Detailed documentation for platform usage.
    -   Step-by-step guides
    -   Code examples

## Technologies Used

-   **Frontend**: HTML, CSS, JavaScript
    -   HTML5 for structuring the web pages
    -   CSS3 for styling and layout
    -   JavaScript for interactivity and dynamic content
-   **Backend**: Firebase (Authentication, Firestore)
    -   Firebase Authentication for user management
    -   Firestore for storing user data and study materials
-   **Libraries & Frameworks**:
    -   [Font Awesome](https://fontawesome.com/): For icons
    -   [Google Fonts](https://fonts.google.com/): For typography
-   **Development Tools**:
    -   [VS Code](https://code.visualstudio.com/): Primary code editor
    -   [npm](https://www.npmjs.com/): Node Package Manager

## Project Structure

- `firebase.js` – Initializes Firebase.
- `auth.js` – Handles user sign-up and login.

## Setup and Installation

### Prerequisites

- Node.js installed
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   REACT_APP_FIREBASE_API_KEY=<your-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
   REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
   REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
   REACT_APP_FIREBASE_APP_ID=<your-app-id>
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Firebase Authentication

To manage user authentication, Firebase has been integrated into the project.

### Steps Completed

1. **Firebase Setup**
   - Created a Firebase project.
   - Enabled Email/Password authentication.
   - Configured email verification settings.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact us at [email@example.com](mailto:email@example.com).
