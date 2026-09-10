# Smart Fish Feeder 🐟

An automated, cloud-connected Smart Fish Feeder dashboard and control system powered by Firebase.

## ✨ Features

- **Real-Time Monitoring**: Live device connection status, system health, and status indicators.
- **Instant Feed Trigger**: Manual one-click feeding with animated ripple feedback and confirmation.
- **Smart Scheduling**: Program recurring feeding times with easy-to-use time pickers and schedule management.
- **Feeding History & Analytics**: Log and review feeding events with timestamped records.
- **Customizable Settings**: Control portion sizes, notifications, and dark/light UI modes.
- **Secure Authentication**: Dedicated login screen and session management.
- **Firebase Backend**: Hosted on Firebase Hosting with Cloud Functions for server-side operations.

## 🚀 Tech Stack

- **Frontend**: HTML5, Modern Glassmorphic CSS3, Vanilla JavaScript, Lucide Icons & FontAwesome
- **Backend & Cloud**: Firebase Hosting, Firebase Realtime Database / Firestore, Firebase Cloud Functions (Node.js 22)
- **Deployment**: Firebase CLI (`firebase-tools`)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20 or v22 recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli) installed:
  ```bash
  npm install -g firebase-tools
  ```

### Local Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Rithicksanjay/FISH_FEEDER.git
   cd FISH_FEEDER
   ```

2. Install Cloud Functions dependencies:
   ```bash
   cd functions
   npm install
   cd ..
   ```

3. Start Firebase emulators (optional):
   ```bash
   firebase emulators:start
   ```

4. Or serve the frontend locally:
   ```bash
   npx serve .
   ```

### Deploying to Firebase

1. Log in to Firebase:
   ```bash
   firebase login
   ```

2. Deploy hosting and cloud functions:
   ```bash
   firebase deploy
   ```

## 📄 License

This project is licensed under the MIT License.
