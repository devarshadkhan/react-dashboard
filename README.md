# Sales Dashboard – Aforro React Assignment

A full-featured Sales Dashboard built with React, TypeScript, Tailwind CSS, and shadcn/ui. This project fulfills both Part 1 (UI Implementation) and Part 2 (API Integration & Data Table) of the Aforro React Assignment.

---

## Project Setup

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd horizon-dashboard-kit-main

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Login Credentials

| Role  | Email             | Password |
|-------|-------------------|----------|
| Admin | admin@example.com | password |
| User  | user@example.com  | password |

---

## Features Implemented

### Part 1 – Sales Dashboard UI

Implemented a fully responsive Sales Dashboard with:

- **4 KPI Stat Cards** – Total Revenue, Total Orders, Total Customers, Avg. Order Value (each with growth % vs last month)
- **Sales Area Chart** – Dual-axis area chart showing monthly Revenue and Orders trend (Recharts)
- **Sales by Category** – Donut chart showing product category distribution
- **Recent Sales** – Latest 5 transactions with avatar, product, amount, and status badge
- **Top Selling Products** – Top 5 products ranked by revenue with growth trend indicator
- **Collapsible Sidebar** – Animated sidebar with mobile overlay support
- **Dark / Light Mode** – Full theme toggle powered by next-themes
- **Responsive Layout** – Mobile, tablet, and desktop friendly

### Part 2 – API Integration & Data Table

Route: `/api-users` — accessible via **"API Users"** in the sidebar

- **Data Source** – Live data from `https://jsonplaceholder.typicode.com/users` via Fetch API
- **Columns** – Name, Email, Company Name, City
- **Search** – Real-time search filtering by name or email
- **Sort by Name** – Toggle A→Z / Z→A with arrow indicator on the column header
- **Filter by City** – Dropdown dynamically populated from the API response
- **Loading State** – Spinner shown while fetching
- **Error State** – Error message with a "Try Again" retry button
- **Empty State** – Helpful message with "Clear filters" button when no results match

---

## Tech Stack

| Library | Purpose |
|---------|---------|
| React 18 + TypeScript | Core framework |
| Vite | Build tool |
| Tailwind CSS | Utility-first styling |
| shadcn/ui + Radix UI | Accessible component library |
| Recharts | Data visualisation / charts |
| Framer Motion | Animations and transitions |
| React Router v6 | Client-side routing |
| Zustand | Auth & sidebar state |
| Fetch API | HTTP requests (Part 2) |

---

## Assumptions & Decisions

1. **Fetch API for Part 2** – Native Fetch was chosen over Axios to avoid an extra dependency for a single endpoint. Both are available in the project.
2. **Protected routes** – The entire dashboard is behind authentication. Use the credentials above to log in.
3. **Separate page for API Users** – Added as `/api-users` with its own sidebar entry to keep the existing internal Users management page (`/users`, admin-only) untouched.
4. **Mock data for dashboard** – Part 1 uses static mock data to demonstrate the UI layout. The API Users page (Part 2) fetches real live data.
5. **Pixel-perfect not targeted** – The dashboard closely follows the Figma Sales Dashboard structure (KPI cards → area chart + pie → recent sales + top products) while using the project's existing design tokens (shadcn/ui + Tailwind CSS variables).
