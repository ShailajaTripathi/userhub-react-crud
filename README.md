# 🧩 UserHub – React CRUD Application

UserHub is a simple and extensible **React + TypeScript CRUD application** for managing user data.  
It demonstrates clean frontend architecture, API integration, and scalability-focused design.

---

## 🚀 Live Demo
🔗 https://userhub-react-crud.vercel.app/

## 📦 Source Code
🔗 https://github.com/ShailajaTripathi/userhub-react-crud

---

## 🛠 Tech Stack
- **React (Vite)**
- **TypeScript**
- **REST API (json-server hosted on Render)**
- **CSS**
- **Vercel** (Frontend Deployment)

---

## ✨ Features
- Create, Read, Update, Delete users
- Required-field form validation
- Clean and modular component structure
- API integration with async handling
- Easily extensible form architecture
- Deployed and accessible on all systems

---

## 🧠 Extensibility (Key Requirement)
The user form is designed to be **configuration-driven**.

### Adding a new field (e.g. `address`, `dateOfBirth`):
1. Add the field to the form configuration/schema
2. Ensure the backend accepts the new field
3. No major UI or logic changes required

This keeps the application scalable and maintainable.

---

## ⚙️ Local Setup

```bash
git clone https://github.com/ShailajaTripathi/userhub-react-crud
cd userhub-react-crud
npm install
npm run dev
```
 ## 🌐 API Used

The application consumes a REST API hosted on Render:

  🔗 https://userhub-react-crud.onrender.com/users


This API supports full CRUD operations.

## 📌 Design Decisions

- Used TypeScript for better type safety and maintainability

- Decoupled frontend and backend for flexibility

- Used a lightweight REST API to focus on frontend architecture

- Prioritized clean, readable, and modular code