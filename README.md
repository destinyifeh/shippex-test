# Shippex React Native App

This is a mobile app built with **React Native** that simulates a shipping and logistics workflow. The app features a splash screen, landing screen, login flow, and a shipment listing screen.

---

## 🚀 Features

- ⚡️ **Animated Splash Screen** powered by [`react-native-bootsplash`](https://github.com/zoontek/react-native-bootsplash)
- 🧭 **Navigation Flow**
  - Splash → Landing → Login → Shipments
- 🔐 **Login with Email & Password**
- 📦 **Shipments Screen** (mocked for now)
- 🔌 Axios for HTTP requests (currently mocked due to network issues)

---

## 🧪 Mocked Data

> Due to repeated network errors when calling the real endpoints for **login** and **shipments**, the data is currently **mocked**. The original implementation remains in the codebase, but mocking was used during testing and development to move forward smoothly.

---

## 📱 App Flow

1. **Splash Screen**  
   An animated splash screen fades in with the company logo using `react-native-bootsplash`.

2. **Landing Screen**  
   Simple welcome screen with a button to continue to login.

3. **Login Screen**  
   Users input their **email** and **password**.

   > ✅ On successful login (mocked), users are redirected to the **Shipments** screen.

4. **Shipments Screen**  
   Displays a list of shipment items (using mocked data).

---

## 🛠 Tech Stack

- **React Native**
- **React Navigation**
- **Axios**
- **Tanstack Query**
- **Zustand**
- **Tanstack Query**
- **Mock Service Worker** (manually mocked data)

---

## 🔧 Development Setup

1. The repo:

   ```bash
   git clone https://github.com/destinyifeh/shippex-test
   cd shippex-test
   ```
