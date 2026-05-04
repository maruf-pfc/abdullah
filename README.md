# Muhammad Abdullah's Portfolio Website

Welcome to the fully responsive, dynamic portfolio website of Muhammad Abdullah. This application uses a modern Next.js 15 App Router architecture with a MongoDB backend.

<div align="center">
  <h3 align="left">Iphone 12 Pro Max View</h3>
  
  ![image](https://github.com/user-attachments/assets/8a0ff166-7e38-4e2c-a390-65da33fcdd31)
  
  <h3 align="left">Macbook Air 13.3 inch View</h3>
  
  ![image](https://github.com/user-attachments/assets/d21c7ad4-844c-4f9b-b782-5bb4a408009e)

</div>

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Database:** MongoDB & Mongoose
- **Styling:** Tailwind CSS
- **Authentication:** Custom JWT-based HttpOnly Cookies using `jose` and `bcryptjs`
- **Icons:** `lucide-react` & `react-icons`

## Admin Panel

The site features a complete, database-driven Admin Panel allowing you to perform full CRUD operations on all content blocks seamlessly.

### How to Access
Navigate to `/admin` to access the Admin Login page. The panel is fully protected by a secure, encrypted cookie-based session.

### Default Login
On your first login, the application will automatically create an admin user using the credentials from your `.env` file:
- **Email:** Derived from `ADMIN_EMAIL` in `.env`
- **Password:** Derived from `ADMIN_PASS` in `.env`

### Changing Your Password
Once logged in, navigate to **Settings** in the left sidebar (or mobile menu) to securely update your password.

## Features
- **Fully Responsive:** The dashboard layout transitions seamlessly from a sticky side navigation bar on desktops to an off-canvas drawer accessed via a hamburger menu on mobile devices. Data tables employ horizontal scrolling to prevent layout breaking.
- **Dynamic Content:** All sections (Projects, Publications, Thesis, Industrial Attachments, Profile stats) are editable and instantly sync with the public-facing site.
