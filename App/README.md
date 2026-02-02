# User Management System

A modern React-based user management application with secure authentication and user profile management. Built with Firebase for real-time backend services.

## Overview

This application provides a complete user management solution with features including user registration, login, profile management, and an admin dashboard. It is designed for both learning purposes and practical QA testing with manual testing and automated end-to-end tests.

## Key Features

- **User Authentication:** Secure login and registration system using Firebase Authentication
- **User Profiles:** Create and manage user profiles with editable information
- **Dashboard:** View user statistics and general application information after login
- **Admin Panel:** Administrative interface for managing users and system settings
- **Protected Routes:** Private routes that require user authentication to access
- **Responsive Design:** Bootstrap-based UI for mobile and desktop support
- **Real-time Database:** Firebase Firestore integration for data persistence

## Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | User interface framework |
| **React Router 7** | Client-side navigation |
| **Firebase 12** | Authentication and Firestore database |
| **Bootstrap 5** | UI component library and styling |
| **React Hooks** | State management and lifecycle handling |
| **React Testing Library** | Unit and component testing |

## Requirements

- Node.js (LTS version recommended)
- npm (version 6+) or yarn (version 1.22+)
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Firebase project (configured in `src/fire.js`)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-managment-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open automatically at `http://localhost:3000`

## Available Scripts

- `npm start` - Run the development server
- `npm build` - Create a production build
- `npm test` - Run unit tests
- `npm eject` - Eject from Create React App (irreversible)

## Project Structure

```
src/
├── components/          # React components
│   ├── Login.jsx        # Login page component
│   ├── Register.jsx     # Registration page component
│   ├── Dashboard.jsx    # User dashboard
│   ├── Profile.jsx      # User profile page
│   ├── Admin.jsx        # Admin panel
│   ├── Navbar.jsx       # Navigation bar
│   ├── PrivateRoute.jsx # Protected route wrapper
│   └── UserList.jsx     # User list display
├── App.js               # Main app component with routing
├── App.css              # Global styles
├── fire.js              # Firebase configuration
└── index.js             # Application entry point
```

## User Flows

### Authentication Flow
1. New users: Navigate to **Register** → Enter details → Create account → Redirected to Login
2. Existing users: Navigate to **Login** → Enter credentials → Access Dashboard

### Main Application Flow
```
Login/Register → Dashboard → Profile (Edit Info) 
              → Admin Panel (Admin users only)
              → Navbar Navigation (Switch between pages)
```

## Testing Guide

### Manual QA Checklist

#### Login Test
- **Steps:** 
  1. Navigate to Login page
  2. Enter test credentials (email: test@example.com / password: Password123)
  3. Click Login button
- **Expected Result:** 
  - User redirected to Dashboard
  - User name displayed in navigation
  - No error messages

#### Registration Test
- **Steps:**
  1. Navigate to Register page
  2. Fill in all required fields (email, password, display name)
  3. Click Register button
- **Expected Result:**
  - Success message displayed
  - New account created in Firebase
  - User can login with new credentials

#### Profile Management Test
- **Steps:**
  1. Login to the application
  2. Navigate to Profile page
  3. Edit user information (name, email, etc.)
  4. Click Save button
- **Expected Result:**
  - Changes saved to Firestore database
  - Updated information persists after page refresh
  - Confirmation message displayed

#### Dashboard Test
- **Steps:**
  1. Login with valid credentials
  2. Navigate to Dashboard
- **Expected Result:**
  - Dashboard loads successfully
  - User information displayed correctly
  - Protected content is visible only to authenticated users

#### Protected Routes Test
- **Steps:**
  1. Attempt to access Dashboard without logging in
  2. Try to access Admin panel without admin privileges
- **Expected Result:**
  - Unauthenticated users redirected to Login
  - Non-admin users redirected appropriately
  - No access to protected content

## Firebase Configuration

The application uses Firebase for authentication and data storage. Configuration is located in `src/fire.js`:

- **Authentication:** Firebase Authentication for user login/register
- **Database:** Firestore for storing user profiles and data
- **Storage:** Firebase Storage for potential file uploads

## Environment Setup

Make sure your Firebase project is properly configured with:
1. Email/password authentication enabled
2. Firestore database created and secured with rules
3. Web app registered in Firebase console

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 already in use | Change port: `PORT=3001 npm start` |
| Firebase connection errors | Verify Firebase config in `src/fire.js` |
| Components not rendering | Clear node_modules and reinstall: `rm -rf node_modules && npm install` |
| Tests failing | Run `npm test -- --clearCache` before running tests |

## Development Notes

- Uses modern React with Hooks for state management
- Component-based architecture for reusability
- Firebase Hooks for simplified authentication logic
- CSS Modules available for component-specific styling
- Testing library for unit and integration tests

## Contributing

When contributing to this project:
1. Create feature branches for new functionality
2. Write tests for new features
3. Follow existing code style and naming conventions
4. Test components manually before submitting changes

## License

This project is created for educational and learning purposes.

## Support

For issues or questions about the application, please check the Firebase documentation or React Router documentation for specific errors.
  - Expected: dashboard widgets load, no console errors.

- **Admin:**
  - Steps: login as admin -> open Admin page -> perform admin actions.
  - Expected: admin features available and function correctly.

Record results, steps, environment (OS, browser), and any defects with reproduction steps.

**Cypress (E2E) Setup**

1. Install Cypress as a dev dependency:

```bash
npm install --save-dev cypress
# or
yarn add --dev cypress
```

2. Add useful npm scripts (optional) to `package.json`:

```json
{
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
}
```

3. Initialize Cypress (first-run will scaffold `cypress/`):

```bash
npx cypress open
```

4. Example test (put under `cypress/e2e` or `cypress/integration` depending on your Cypress version):

```js
// cypress/e2e/login.spec.js
describe('Login flow', () => {
  it('allows a user to login', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('input[name="password"]').type('Password123')
    cy.contains('Login').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard')
  })
})
```

5. Run tests:

```bash
npm run cypress:open   # interactive
npm run cypress:run    # headless
# or using npx
npx cypress run
```

**Notes & Tips**

- If the app requires seeded users or a backend, ensure test accounts exist or mock network responses.
- For CI, run `npx cypress run --record` if using Cypress Dashboard (requires setup).
- Keep E2E tests focused on critical user journeys to keep runtime manageable.

**Files of Interest**

- src/commponents/Login.jsx  login UI
- src/commponents/Register.jsx  registration UI
- src/commponents/Profile.jsx  profile UI
- src/commponents/Dashboard.jsx  dashboard view

**Contributing / Next Steps**

- Add example Cypress tests for Register, Profile, and Admin flows.
- Add `cypress.json` (or `cypress.config.js`) configuration as needed for baseUrl and env variables.

**License**

MIT
