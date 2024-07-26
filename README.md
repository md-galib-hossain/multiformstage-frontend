# Multi-Stage Mars Visit Application Form

Welcome to the Multistaged Form Project! This repository contains frontend code for a multi-step form designed for submitting responses to the Mars Visit Application Form.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Live URLs](#live-urls)
- [Repositories](#repositories)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Challenges and Solutions](#challenges-and-solutions)

## Introduction

The Multistaged Form Project provides a seamless user experience for submitting a multi-step application form. It leverages modern technologies to ensure a robust and scalable application, including handling user input across multiple stages and providing a smooth user experience.

## Features

- Multi-step form for application submission
- Validation of form inputs using Zod
- User-friendly UI with TailwindCSS and Shadcn
- Efficient state management with Redux
- Form handling with React Hook Form and Sonner for notifications
- Seamless communication with the backend using RTK query

## Prerequisites

Before running this project locally, ensure you have the following installed:

- Node.js
- npm or yarn

## Getting Started

To get started with this project, follow these steps:

### Backend

1. Clone the backend repository to your local machine.
2. Navigate to the backend directory.
3. Install dependencies by running `npm install` or `yarn install`.
4. Create a `.env` file in the backend directory and add the required environment variables (see [Environment Variables](#environment-variables)).
5. Start the backend server using `npm run start:dev` or `yarn start:dev`.

### Frontend

1. Clone the frontend repository to your local machine.
2. Navigate to the frontend directory.
3. Install dependencies by running `npm install` or `yarn install`.
4. Create a `.env` file in the frontend directory and add the required environment variables (see [Environment Variables](#environment-variables)).
5. Start the development server using `npm run dev` or `yarn dev`.

## Live URLs

- **Frontend**: [https://multiformstage-frontend.vercel.app](https://multiformstage-frontend.vercel.app)
- **Backend**: [https://multistaged-form-backend.vercel.app](https://multistaged-form-backend.vercel.app)

## Repositories

- **Frontend Repository**: [https://github.com/md-galib-hossain/multiformstage-frontend](https://github.com/md-galib-hossain/multiformstage-frontend)
- **Backend Repository**: [https://github.com/md-galib-hossain/multiformstage-backend](https://github.com/md-galib-hossain/multiformstage-backend)

## Technologies Used

### Frontend

- Next.js
- React Hook Form
- TailwindCSS
- TypeScript
- Redux
- Sonner
- Zod
- Shadcn

### Backend

- Express.js
- Mongoose
- Nodemailer
- Zod
- Node.js
- TypeScript
- MongoDB

## Environment Variables

### Frontend

- `VITE_APP_SERVER_URL`: The URL of the backend server (e.g., `http://localhost:5000`)
- `VITE_APP_CLIENT_URL`: The URL of the frontend server (e.g., `http://localhost:5173`)
- `VITE_APP_IMGBB_URL`: Your ImageBB API key for image uploads

### Backend

- `NODE_ENV`: The environment (e.g., `development` or `production`)
- `PORT`: The port for the backend server (e.g., `5000`)
- `DATABASE_URL`: The MongoDB connection string
- `EMAIL`: Your email address for sending notifications
- `APP_PASSWORD`: The app-specific password for email

## Challenges and Solutions

### 1. Data Loss on Form Closure

**Challenge**: If the user accidentally closed the form, all data was lost, and they had to start over.

**Solution**: Implemented Redux for state management to persist form data across different stages and prevent data loss. Although solutions with Context API and local storage were possible, Redux was chosen for its robustness.

### 2. TypeScript and Toast Notifications

**Challenge**: Encountered issues with TypeScript when trying to display error or response messages from the submission form via toast notifications. TypeScript struggled with the response object structure.

**Solution**: Used Axios to handle responses and errors. Due to time constraints and approaching deadlines, opted for Redux's RTK Query with TypeScript, simplifying the process of managing API interactions and error handling.

### 3. Datepicker Default Value Issue

**Challenge**: The datepicker component was receiving an invalid date type by default.

**Solution**: Identified the issue was due to an incorrect default value set in the datepicker configuration. Corrected the default value to resolve the error.

Thank you for using the Multistaged Form Project! If you have any questions or need further assistance, please feel free to contact me.
