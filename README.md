# Currency Master

A simple currency converter built with React that fetches live exchange rates from [exchangeratesapi.io](https://exchangeratesapi.io).

---

## 🚀 Features
- Convert between currencies
- Select base and target currencies
- Responsive design (works on mobile and desktop)

---

## 🛠️ Tech Stack
- [React](https://reactjs.org/) 18
- [Axios](https://axios-http.com/) for API calls  
- [Zustand](https://github.com/pmndrs/zustand) for state management  
- [Material UI](https://mui.com/) + Emotion for styling  
- [Poppins](https://fonts.google.com/specimen/Poppins) font

---

## 🌐 API
This app uses the free tier of **[exchangeratesapi.io](https://exchangeratesapi.io/)**.  
- Requires an API key (free tier allows **100 requests/month**).  
- Rates are fetched via the standard API endpoint.  

---

## ⚙️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/currency-master.git
   cd currency-master
   ```

2. Install dependencies:
  ```bash
  npm install
  ```
3. Add your API key in a .env file at the root:
  ```bash
  VITE_API_KEY=your_api_key_here
  ```

4. Run the development server:
  ```bash
  npm run dev
  ```
## 📖 Usage
- Enter an amount.  
- Choose a base currency and a target currency.  
- The conversion result updates automatically.  

---

## 📸 Screenshot
<img width="1888" height="860" alt="App Screenshot" src="https://github.com/user-attachments/assets/a7c4b5fb-d0a3-44e3-b5ba-af19d53b77ac" />

---

## 🌍 Live Demo
👉 [https://currencymaster.vercel.app/](https://currencymaster.vercel.app/)

---

## ⚠️ Limitations
- Free API tier allows **100 requests per month**.  
- If you hit the limit, conversions will stop until the quota resets.  
