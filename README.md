# Token Management Application

This is a simple Token Management web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. The app allows users to:
- Save API tokens (access token, client ID, customer ID, etc.) associated with user emails.
- View and manage tokens in a tabular format.
- Simulate fetching tokens and display them in the UI.

This project is designed to showcase basic frontend token management features without backend integration for persistence.

## Prerequisites

- **Node.js**: Version 18 or higher.
- **Yarn** or **npm** for package management.

## Tech Stack

- **Next.js 14**: React framework for SSR and client-side rendering.
- **TypeScript**: Strongly typed JavaScript for type safety and scalability.
- **Tailwind CSS**: Utility-first CSS framework for easy and responsive styling.

## Features

- Save and display tokens (email, access token, client ID, API version, etc.).
- Fetch and display default token data on page load.
- Responsive design with form on the left and token table on the right.
- Modern design using Tailwind CSS for easy customization.

## Setup Instructions

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/DevAsadYasin/ad-campaigns.git
cd token-management-app
```

### 2. Install dependencies

Ensure you have Node.js 18 installed. To install the project dependencies, run:

```bash
# Using npm
npm install

# OR using yarn
yarn install
```

### 3. Run the development server

To start the development server, use the following command:

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

This will start the Next.js development server. You can now view the app in the browser at:

```
http://localhost:3000
```

### 4. Build for production

To build the project for production, use the following command:

```bash
# Using npm
npm run build

# OR using yarn
yarn build
```

Once built, you can start the production server:

```bash
# Using npm
npm run start

# OR using yarn
yarn start
```

### 5. Linting

For code quality, linting is set up. To run lint checks:

```bash
# Using npm
npm run lint

# OR using yarn
yarn lint
```

## Folder Structure

```
.
├── public                  # Public assets (images, fonts, etc.)
├── src
│   ├── app                 # Next.js app directory
│   ├── components          # Reusable React components
│   └── styles              # Global and component-level styles
├── .eslintrc.js            # ESLint configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration
```

## Environment Variables

The app doesn't require any specific environment variables to run locally for now, but you can configure environment-specific settings in `.env.local` (if required).

## Future Improvements

- Add backend support to persist tokens.
- Implement user authentication for more secure token management.
- Add more form validation and error handling.
