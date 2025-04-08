# 🛒 E-Commerce Website (Ongoing Project)

A modern and responsive front-end e-commerce website designed using **HTML**, **CSS**, and **JavaScript**. This project focuses on creating a clean user interface and improving user experience for online shopping. Currently in progress, with plans to implement AI-powered features.

---

## 🚀 Features

- ✅ Fully responsive design for mobile, tablet, and desktop
- 🛍️ Product listing and product detail layout
- 🔐 User login and signup pages
- 🛒 Basic cart structure
- ✨ Clean UI with smooth user interactions

---

## 🔮 Upcoming Features

- 🤖 **AI-Enhanced Virtual Try-On System**  
  A planned feature that will allow users to upload their profile picture and preview how selected clothes would look on them using AI-based image processing.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Tools**: Visual Studio Code, Git
- **Version Control**: GitHub

---

## 🧠 Learning Objectives
- Enhance web development skills with HTML, CSS, and JavaScript
- Apply responsive design techniques
- Understand user authentication page setup
- Explore the integration of AI in real-world web applications

---
## 📸 Screenshots

![Screenshot 2025-04-08 213626](https://github.com/user-attachments/assets/34956b63-df8f-4ba0-b02a-5f49e28907d2)
![Screenshot 2025-04-08 213649](https://github.com/user-attachments/assets/ce8883a3-3b00-4b18-8d05-7382bcabd173)
![Screenshot 2025-04-08 213739](https://github.com/user-attachments/assets/c405f7c3-8c75-435b-8380-852cc49dae25)
![Screenshot 2025-04-08 213754](https://github.com/user-attachments/assets/a6f42fd1-a4d2-4d7a-a62a-9ee25a4aa84d)
![Screenshot 2025-04-08 213820](https://github.com/user-attachments/assets/c35e9957-d46e-46de-9a33-27cf23c97cc2)
![Screenshot 2025-04-08 213840](https://github.com/user-attachments/assets/f1b81f41-459b-42fd-9048-750091631f27)
![Screenshot 2025-04-08 224254](https://github.com/user-attachments/assets/c7bea6e7-84ff-4372-9883-0f65ae072449)
![Screenshot 2025-04-08 224344](https://github.com/user-attachments/assets/6b3ac3a8-1e10-4892-a49b-885081446ff3)
![Screenshot 2025-04-08 224413](https://github.com/user-attachments/assets/592f0110-dffa-41ed-aee0-ba31df2e1a95)
![Screenshot 2025-04-08 224445](https://github.com/user-attachments/assets/958b5c90-c33c-4316-8ecf-5d499fc6e9c4)
![Screenshot 2025-04-08 224505](https://github.com/user-attachments/assets/35931b23-7890-427d-bc16-71d2bf642df5)
![Screenshot 2025-04-08 224609](https://github.com/user-attachments/assets/0f34fb1b-9d21-4347-8e92-43d97276252d)
![Screenshot 2025-04-08 224640](https://github.com/user-attachments/assets/74242e3f-ad24-404d-8d05-9011e06347bc)


## 👨‍💻 Author
- Trishna Bhattarai
- 📧 trishnabhattarai36@gmail.com
- 🔗 https://www.linkedin.com/in/trishna-bhattarai/


## 📌 Note
- This project is still under development. Contributions, suggestions, and feedback are welcome!


---


## 📌 How to Run

1. Clone the repository:
```bash
git clone https://github.com/your-username/ecommerce-website.git
```
2. Navigate to the project:
```bash
cd ecommerce-website
```
3. Install dependencies:
```bash
cd ecommerce-backend
npm install

cd ../my-app
npm install

```
4. Start the backend:
```bash
node Server.js
```
5. Start the frontend:
```bash
npm start
```

---
## 📁 Project Structure

```bash
📦 ecommerce-website/
│![Screenshot 2025-04-08 213626](https://github.com/user-attachments/assets/6489a0bf-7285-4b82-a8ae-55d7c7df48f0)

├── 📂 ecommerce-backend/               # Backend API for product handling
│   ├── 📂 models/                      # MongoDB schema files
│   │   └── Product.js                 # Product schema model
│   ├── 📜 Server.js                   # Main backend server file
│   ├── 📜 package.json                # Backend dependencies & scripts
│   └── 📜 package-lock.json
│
├── 📂 my-app/                          # Main React frontend application
│   ├── 📂 public/                      # Public static files
│   │   ├── 📂 photo/                  # Images used in the app
│   │   ├── 📜 index.html              # Root HTML file
│   │   ├── 📜 favicon.ico, manifest.json, robots.txt
│   │
│   ├── 📂 src/                         # Source files for React app
│   │   ├── 📂 Component/              # All UI components
│   │   │   ├── BabiesToy.jsx
│   │   │   ├── CategoryPage.jsx / .css
│   │   │   ├── Contact.jsx
│   │   │   ├── Createaccount.jsx
│   │   │   ├── ElectronicDevices.jsx
│   │   │   ├── Errorpage.jsx
│   │   │   ├── Healthbeauty.jsx
│   │   │   ├── Image.jsx
│   │   │   ├── ImForm.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Mensfashion.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Payment.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── RatingComponent.jsx / .css
│   │   │   ├── ReviewBox.jsx
│   │   │   ├── SellerAccount.jsx
│   │   │   ├── Service.jsx
│   │   │   ├── StarRating.jsx
│   │   │   ├── TVHome.jsx
│   │   │   ├── UploadProduct.jsx
│   │   │   ├── User.jsx / User.css
│   │   │   ├── WatchesAcc.jsx
│   │   │   └── Women.jsx
│   │   │
│   │   ├── 📂 Context/                # App-wide styling and test configs
│   │   │   ├── App.css, index.css
│   │   │   ├── App.test.js, setupTests.js
│   │   │   └── reportWebVitals.js
│   │   │
│   │   ├── 📜 App.js, index.js        # Main app component and entry
│   │
│   ├── 📜 package.json                # React app dependencies
│   ├── 📜 package-lock.json
│   ├── 📜 README.md
│   └── 📜 .gitignore
│
├── 📂 women-category-backend/         # Backend for women’s product section
│   ├── 📜 Server.js                   # Server file for separate product logic
│   ├── 📜 package.json / lock.json
│   └── 📂 node_modules/
│
└── 📜 (other global files as needed)
```

---
## 🔮 Future Improvements
- Full database integration (MongoDB or SQL)
- Implement complete authentication & session management
- Deploy using Netlify (Frontend) and Render/Heroku (Backend)
- Integrate AI-powered Virtual Try-On system

