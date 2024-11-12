# Calendar App

A simple calendar app that allows users to schedule and manage events with basic CRUD functionality, browser notifications, and additional features. This app is built with a React-based frontend using Vite, a NestJS backend, and an in-memory database for storing events.

## Table of Contents

- [Project Setup](#project-setup)
- [Installation](#installation)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Features](#features)
  - [Checkpoint 1: Project Setup](#checkpoint-1-project-setup)
  - [Checkpoint 2: Basic CRUD Operations](#checkpoint-2-basic-crud-operations)
  - [Checkpoint 3: Calendar UI & Event Display](#checkpoint-3-calendar-ui--event-display)
  - [Checkpoint 4: Form Validation](#checkpoint-4-form-validation)
  - [Checkpoint 5: Browser Notifications](#checkpoint-5-browser-notifications)
  - [Checkpoint 6: Optional Features](#checkpoint-6-optional-features)

## Project Setup

### Folder Structure
- `calendar-app/`
  - `frontend/` - The Vite-based frontend for managing and displaying the calendar.
  - `backend/` - The NestJS-based backend for event management.

### Technologies Used
- **Frontend**: React (Vite)
- **Backend**: NestJS
- **Database**: In-memory storage for events (temporary)
## Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/calendar-app.git
   ```
2. Navigate into the project directory:

   ```bash
   cd calendar-app
   ```

## Frontend Setup

1. Navigate to the `frontend/` directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the frontend:

   ```bash
   npm run dev
   ```
## Backend Setup

1. Navigate to the backend/ directory:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the backend:

   ```bash
   npm run start
   ```
## Features

### Checkpoint 1: Project Setup
- Set up a public repository and initialized the frontend with Vite and backend with NestJS.
- Configured an in-memory database to store events.

### Checkpoint 2: Basic CRUD Operations
- Implemented CRUD (Create, Read, Update, Delete) operations for events.
- Frontend includes forms for creating, editing, and deleting events.
- Backend provides corresponding RESTful API endpoints for managing events.

### Checkpoint 3: Calendar UI & Event Display
- Built a user-friendly calendar interface using React and displayed events.
- Clicking a date allows users to create an event.
- Each event can contain text, images, and videos.

### Checkpoint 4: Form Validation
- Added form validation to ensure required fields (event title, date, and time) are properly filled before submission.
- Prevented submission of incomplete or invalid data.

### Checkpoint 5: Browser Notifications
- Implemented browser notifications for scheduled events.
- Notifications trigger when an event’s scheduled time arrives.
- Notifications include options to dismiss or snooze (with a 5-minute snooze time).

### Checkpoint 6: Optional Features
- **Search**: Implemented search functionality to allow users to find specific events.
- **Filter Options**: Added filtering by event type.


## Thank You
Thank you for reviewing this Calendar App project. This application has been developed as part of an assignment to demonstrate the implementation of a calendar with CRUD functionality, event management, browser notifications, and additional features. I hope the project meets the expectations outlined in the assignment, and I appreciate any feedback or suggestions.
