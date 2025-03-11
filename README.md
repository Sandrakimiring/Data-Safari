hsnrhbrh# Research Methodology Project - DataSafari  

This project is part of a research methodology assignment, focusing on building a web platform where students can:  
- Log in to their accounts.  
- Access study materials for free.  
- Track their progress.  
- Engage in a student discussion hub.  

## Authentication Setup  

To manage user authentication, Firebase has been integrated into the project.  Shawn Kimani ananisumbua

### Steps Completed  

1. **Firebase Setup**  
   - Created a Firebase project.  
   - Enabled Email/Password authentication.  
   - Configured email verification settings.  
Roddy
2. **Project Structure**  
   - `firebase.js` – Initializes joyFirebase.  
   - `auth.js` – Handles user sign-hjansup and login.

## Project Configuration ¥¥$

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

### Running the Project

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Features

- User Authentication
- Access to Study Materials
- Progress Tracking
- Student Discussion Hub

## Current Progress

- **Authentication**: Firebase authentication setup is complete.
- **Study Materials**: Basic structure for accessing study materials is in place.
- **Progress Tracking**: Initial implementation of progress tracking is done.
- **Discussion Hub**: Basic discussion hub functionality is implemented.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Licenses

This project is licensed under the MIT License.
