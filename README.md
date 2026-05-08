# Midterm Web Project

This is a React + TypeScript web project built for the web development midterm.  
The project focuses on clean React architecture, routing, layouts, authentication UI flow, reusable services, Material UI theme integration, Tailwind CSS styling, and AG Grid dashboard integration.

---
## ChatGPT Assistance Link

This project was developed with guidance from the following ChatGPT conversation:

[ChatGPT Project Assistance Chat]https://chatgpt.com/c/69fd7d5e-68b4-83eb-bb05-afa443df25f7

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Material UI
- React Router DOM
- React Hot Toast
- AG Grid
- Git & GitHub

---

## Project Features

### 1. React + Vite Setup

The project was created using Vite with React and TypeScript.

### 2. GitHub Repository

The project was connected to a GitHub repository and pushed using Git.

### 3. Branching Workflow

The project uses two main branches:

- `main`: stable branch
- `auth`: feature branch used for authentication and project development

The `auth` branch will be merged into `main` after completing the required features.

### 4. Tailwind CSS Setup

Tailwind CSS was configured with Vite and used for layout and utility styling.

### 5. Material UI Theme

Material UI was integrated with a custom global theme to keep the design consistent.

### 6. Layout System

The project includes two layouts:

- `AuthLayout`: used for login and signup pages
- `DashboardLayout`: used for the dashboard page

### 7. Routing System

Routing is handled inside the React app using React Router DOM.

Available routes:

- `/` redirects to `/login`
- `/login` displays the login page
- `/signup` displays the signup page
- `/dashboard` displays the dashboard page

### 8. Login Flow

The login page includes:

- email input
- password input
- login button
- confirmation dialog
- Yes / No options
- loading spinner for 3 seconds
- navigation to dashboard after successful login

### 9. Toast Service

React Hot Toast was integrated using a reusable service file:

```ts
src/services/toastService.ts  