# ResuMint 🚀  
### Smart Resume Builder Platform

ResuMint is a modern, full-stack SaaS application that enables users to build professional resumes, securely authenticate, make payments, and download high-quality PDF resumes.  
The platform is built using **React** and **Spring Boot**, with **JWT-based authentication** and **Razorpay payment integration**, following real-world production practices.

---

## 📌 Overview

Creating a professional resume should be simple, secure, and accessible.  
ResuMint solves this by providing an intuitive resume-building experience with premium features such as PDF downloads and secure payments.

This project demonstrates:
- Full-stack application architecture
- Secure authentication & authorization
- Payment gateway integration
- Server-side PDF generation
- Clean, scalable backend design

---

## ✨ Features

### 🔐 Authentication & Security
- User registration and login
- JWT-based authentication
- Protected REST APIs
- Secure token validation

### 📝 Resume Builder
- Dynamic resume creation
- Editable sections (Education, Skills, Experience, Projects, etc.)
- Real-time preview

### 💳 Payments (Razorpay)
- Secure payment gateway integration
- Order creation and verification
- Premium feature unlocking after payment

### 📄 PDF Generation
- Download resumes in professional PDF format
- Print-ready layout
- Consistent formatting

### 👤 User Dashboard
- Manage resumes
- View payment status
- Download purchased resumes

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React
- 🎨 Material UI / CSS
- 🔄 Axios
- 🔐 JWT handling

### Backend
- ☕ Spring Boot
- 🔐 Spring Security + JWT
- 🗄️ MongoDB / MySQL
- 💳 Razorpay Payment Gateway
- 📄 PDF generation (iText / OpenPDF)

---

## 🧩 Architecture

**ResuMint follows a layered architecture:**

**Controller → Service → Repository → Database**

- **Controller Layer**: Handles REST API requests
- **Service Layer**: Business logic
- **Repository Layer**: Database interactions
- **Security Layer**: JWT validation & authorization

---

## 📂 Project Structure

ResuMint/
│
├── frontend/ # React application
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── hooks/
│ └── utils/
│
├── backend/ # Spring Boot application
│ ├── controller/
│ ├── service/
│ ├── repository/
│ ├── security/
│ ├── model/
│ ├── dto/
│ ├── config/
│ └── exception/
│
└── README.md

**🚀 Getting Started**
**Prerequisites**
Java 17+
Maven
MongoDB

**Run Backend**
cd backend
mvn clean install
mvn spring-boot:run

**Backend will start at:**
http://localhost:8080

**Run Frontend**
cd frontend
npm install
npm start

**Frontend will start at:**
http://localhost:3000

**🔐 Authentication Flow**

User registers or logs in
Backend generates JWT
JWT is returned to frontend
Frontend sends JWT in Authorization header
Spring Security validates token for secured endpoints

**💳 Payment Flow (Razorpay)**

User selects premium resume download
Backend creates Razorpay order
Frontend completes payment
Backend verifies payment signature
PDF download is enabled

**🧪 API Highlights**

POST /auth/register – Register user
POST /auth/login – Authenticate user
POST /payment/create-order – Create Razorpay order
POST /payment/verify – Verify payment
GET /resume/download – Download resume PDF

**📈 Future Enhancements**

Multiple resume templates
Resume sharing via public links
Admin dashboard & analytics
Email resume delivery
AI-powered resume suggestions
Subscription-based plans


