Multi-Tenant Sales Dashboard

This is a frontend assignment project built using React.  
The goal of this project is to show how a single application can support multiple organizations (tenants) with different user roles.

There is no backend involved. All data is mocked and handled on the frontend.

## What is this project about?

The app simulates a sales dashboard where:
a. Multiple organizations can use the same app
b. Each organization has its own data
c. Users have roles like Admin and Agent
d. Access is controlled based on role

## Tech Used

a. React (JavaScript)
b. Context API for global state
c. Vite for project setup
d. Simple CSS for styling

## Folder Structure

src/
context/
    - AuthContext.jsx

data/  
    - callLogs.js (mock data)
    - leads.js (mock data)

modules/
    callLogs/
        - CallLogsList.jsx

    leads/
        - LeadsList.jsx

pages/
    - DashBoard.jsx
    - Login.jsx

App.jsx/ - Main entry point

## How Tenancy Works

The application supports two organizations:
- Organization A
- Organization B

Tenant is selected during login.  
Based on the selected tenant, the app loads different leads and call logs.

When tenant changes, the whole dashboard data updates automatically.

## Role Handling

There are two roles:

### Admin
- Can view leads
- Can edit lead status

### Agent
- Can only view leads
- Cannot edit lead status

Role is checked before showing actions like the Edit button.

## Leads Module

a. Shows list of leads with name, phone and status
b. Has a dropdown to filter leads by status
c. Data is tenant-specific
d. Only Admin can edit lead status

## Call Logs Module

a. Shows call history with lead name, time, duration and outcome
b. Data is tenant-specific
c. Read-only for both Admin and Agent.

## Authentication

Authentication is mocked.  
User selects:
a. Tenant (Org A / Org B)
b. Role (Admin / Agent)

This is stored using React Context and used across the app.

## Optimization Notes

The project is small, but the structure is kept modular so that:
a. New tenants can be added easily
b. New roles can be added later
c. Modules can be lazy loaded if needed in future

## How to Run

1. Install dependencies:
   
    npm install (bash)

2. Start the app:

    npm run dev (bash)

3. Open browser and go to:

    http://localhost:5173 

4. Select tenant and role, then click Login.

## Deployment

The project can be deployed on Netlify.

1. Build Command

    npm run build (bash)

2. Output Folder

    dist

    This project focuses more on structure, clarity and handling of tenants and roles rather than UI design or backend integration.