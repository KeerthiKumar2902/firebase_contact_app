
```markdown
# Firebase Contact Manager

A simple React + Vite application powered by Firebase Firestore for managing contacts with real-time add, edit, delete, and search features.

> Note: This project is not deployed — intended for local development only.

---

## 🚀 Features

- Add new contacts
- Edit existing contacts
- Delete contacts
- Real-time updates with Firestore `onSnapshot`
- Search contacts by name, email, or phone

---

## 📂 Project Structure

```

firebase\_contact\_app/
├── src/
│   ├── components/      # Reusable React components
│   ├── config/          # Firebase configuration
│   ├── App.jsx          # Main app component
│   └── main.jsx         # React entry point
├── .env                 # Environment variables (not committed)
├── .gitignore           # Files ignored by git
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration

````

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/KeerthiKumar2902/firebase_contact_app.git
cd firebase_contact_app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Firebase

* Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
* Enable **Firestore Database**
* Get your Firebase config object

Create a `.env` file in the project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Start the Project

```bash
npm run dev
```

The app will run locally at `http://localhost:5173/`.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## ⚠️ Notes

* Make sure `.env` is **never committed** (already in `.gitignore`).
* This project is **not deployed** — intended only for **local development**.
* Firebase Firestore rules should be configured properly if extending to production.

---

