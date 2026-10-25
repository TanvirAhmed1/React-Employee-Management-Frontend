# Employee Management System - Frontend

Single-page application for the Employee Management System, built with **React 19** and **Vite**. It consumes the [Spring Boot REST API](https://github.com/TanvirAhmed1/Java-Employee-Management-Backend) to list, add, update, and delete employees.

## Tech Stack

- React 19 and React DOM
- Vite 8 (dev server and build tool)
- React Router DOM 7 (routing)
- Axios (HTTP client)
- Bootstrap 5 (styling)
- Oxlint (linting)
- npm

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 20+ (LTS recommended) |
| npm | 10+ |
| Editor | VS Code (recommended) |
| Backend | Running at `http://localhost:8080` |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TanvirAhmed1/React-Employee-Management-Frontend.git
cd React-Employee-Management-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API URL

Make sure the backend base URL in your service file (for example `src/services/EmployeeService.js`) matches your running backend:

```js
const REST_API_BASE_URL = "http://localhost:8080/api/employees";
```

### 4. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

> Vite uses port 5173 by default. The project runs on port 3000, which is set in `vite.config.js`:
>
> ```js
> export default defineConfig({
>   plugins: [react()],
>   server: { port: 3000 },
> });
> ```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code with Oxlint |

## Features

- View the list of all employees
- Add a new employee
- Update an existing employee
- Delete an employee
- Client-side routing between pages

## Project Structure

```
.
├── public/               # Static assets
├── src/                  # Components, services, and app entry point
├── index.html
├── vite.config.js
├── .oxlintrc.json
└── package.json
```

## Troubleshooting

- **CORS error in the browser console:** allow the frontend origin (`http://localhost:3000`) in the backend.
- **Network error or connection refused:** confirm the Spring Boot app and MySQL are running.
- **Port already in use:** stop the other process or change the `port` value in `vite.config.js`.

## Related Repository

- Backend (Spring Boot 4): https://github.com/TanvirAhmed1/Java-Employee-Management-Backend

## License

This project is for learning purposes.
