
# Kanban Board with JWT Authentication

## Features
- JWT-based login system
- Session handling with auto-expiry
- Protected API routes
- React Kanban board UI with three columns (To Do, In Progress, Done)
- Token stored in localStorage
- Fully styled and matches provided design

## Setup
1. Run `npm install` in both `client/` and `server/`
2. Create a `.env` file in `server/` with:
```
PORT=5050
JWT_SECRET=yourSecretKey
DATABASE_URL=yourPostgresURL
```
3. Start the backend: `npm run dev`
4. Start the frontend: `npm run dev`
