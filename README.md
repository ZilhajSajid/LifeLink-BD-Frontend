Updated README.md
# LifeLink BD - Frontend

LifeLink BD is a blood donation and emergency support platform that connects blood donors with people in urgent need of blood. This is the frontend application built with Next.js 16, React 19, and TypeScript, designed to provide a seamless experience for donors, requesters, and administrators.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Application Flow](#application-flow)
- [Role-Based Access](#role-based-access)
- [API Integration](#api-integration)
- [UI & Styling](#ui--styling)
- [Validation](#validation)
- [Deployment](#deployment)
- [Author](#author)
- [License](#license)

## Features

### Public Features

- **Home Page** – Hero section, platform overview, and call-to-actions
- **About Us** – Mission, vision, values, and blood donation process explained
- **Donor Registration** – Easy onboarding for users who want to become blood donors
- **Blood Request Creation** – Requesters can submit blood requests with complete details
- **Authentication** – Secure login, registration, and account verification
- **Google OAuth** – Quick sign-in using Google accounts
- **Custom 404 Page** – User-friendly fallback for invalid routes

### Authenticated Features

- **Role-Based Dashboards** – Separate dashboards for Donors, Requesters, and Admins
- **Donor Application** – Multi-step form to apply as a verified donor
- **Blood Request Management** – Create, view, and track blood requests
- **Payment Integration** – Seamless redirection to bKash payment gateway
- **OTP Verification** – Email/phone-based account verification flow
- **Responsive Design** – Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** – Theme support via `next-themes`

## Tech Stack

### Core

- [Next.js 16](https://nextjs.org/) – App Router with React Server Components
- [React 19](https://react.dev/) – Modern UI library
- [TypeScript 5](https://www.typescriptlang.org/) – Static type checking
- [Bun](https://bun.sh/) – Fast runtime & package manager

### State Management & Data Fetching

- [TanStack Query](https://tanstack.com/query) – Server state, caching, and mutations
- [TanStack Form](https://tanstack.com/form) – Type-safe form handling
- [Zod](https://zod.dev/) – Schema validation

### Styling & UI

- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) – Reusable, accessible UI components
- [Radix UI / Base UI](https://base-ui.com/) – Headless component primitives
- [Lucide React](https://lucide.dev/) – Icon library
- [Motion](https://motion.dev/) – Smooth animations
- [next-themes](https://github.com/pacocoursey/next-themes) – Theme management
- [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) – Tailwind animations

### Utilities

- [ofetch](https://github.com/unjs/ofetch) – Lightweight HTTP client with interceptors
- [date-fns](https://date-fns.org/) – Date formatting & manipulation
- [react-day-picker](https://react-day-picker.js.org/) – Date picker component
- [input-otp](https://input-otp.rodz.dev/) – OTP input component
- [class-variance-authority](https://cva.style/) – Component variant management
- [cn](https://github.com/jorgebucaran/classnames) – Class name merging utility
- [@react-oauth/google](https://github.com/MomenSherif/react-oauth) – Google OAuth integration

### Development Tools

- [Biome](https://biomejs.dev/) – Fast linter & formatter (replaces ESLint + Prettier)
- [PostCSS](https://postcss.org/) – CSS processing

## Project Structure

```text
LifeLink-frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/             # Auth-related routes
│   │   ├── (public)/           # Public routes
│   │   ├── admin/              # Admin dashboard
│   │   ├── donor/              # Donor dashboard
│   │   ├── requester/          # Requester dashboard
│   │   ├── account-verify/     # Account verification
│   │   ├── apply/              # Donor application
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── not-found.tsx       # 404 page
│   │   └── page.tsx            # Home page
│   ├── api/                    # API service layer
│   │   ├── auth.api.ts
│   │   ├── donor.api.ts
│   │   ├── requests.api.ts
│   │   └── index.ts
│   ├── assets/                 # Static assets (SVGs, images)
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── shared/             # Shared app components
│   │   ├── forms/              # Form components
│   │   └── layouts/            # Layout components
│   ├── hooks/                  # Custom React hooks
│   │   ├── auth.hook.ts
│   │   ├── donor.hook.ts
│   │   ├── request.hook.ts
│   │   ├── blood-requests.hook.ts
│   │   ├── debounce.hook.ts
│   │   └── use-mobile.ts
│   ├── lib/                    # Core utilities & config
│   │   ├── apiClient.ts        # Axios-like HTTP client (ofetch)
│   │   └── utils.ts            # Utility functions
│   ├── providers/              # Context providers
│   │   ├── query.provider.tsx
│   │   ├── theme-provider.tsx
│   │   ├── google-auth.provider.tsx
│   │   └── index.tsx
│   ├── routes/                 # Route configuration by role
│   │   ├── admin.routes.ts
│   │   ├── donor.routes.ts
│   │   ├── requester.routes.ts
│   │   └── index.ts
│   ├── types/                  # TypeScript type definitions
│   │   ├── auth.types.ts
│   │   ├── donor.type.ts
│   │   ├── request-list-type.ts
│   │   ├── requester.type.ts
│   │   ├── donation.type.ts
│   │   ├── user.type.ts
│   │   ├── api.type.ts
│   │   └── sidebar.type.ts
│   ├── utils/                  # Helper utilities
│   │   ├── file-size.utils.ts
│   │   └── index.ts
│   └── validation/             # Zod validation schemas
│       ├── auth.validation.ts
│       ├── donor-application-validation.ts
│       └── index.ts
├── public/                     # Public static files
├── components.json             # shadcn/ui config
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript config
├── biome.json                  # Biome config
├── postcss.config.mjs          # PostCSS config
├── bun.lock                    # Bun lockfile
├── package.json                # Dependencies & scripts
└── README.md                   # Project documentation
Getting Started
Prerequisites
Before running this project, ensure you have the following installed:
- Bun (https://bun.sh/) >= 1.3.5 (recommended)
- Node.js (https://nodejs.org/) >= 18.18.0 (minimum for Next.js 16)
You'll also need access to the LifeLink BD Backend API (https://github.com/ZilhajSajid/LifeLink-backend).
1. Clone the Repository
git clone https://github.com/ZilhajSajid/LifeLink-frontend.git
cd LifeLink-frontend
2. Install Dependencies
bun install
3. Set Up Environment Variables
Create a .env.local file in the root directory:
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
Note: Replace the URL with your backend API base URL. Only use NEXT_PUBLIC_* for variables that are safe to expose to the browser.
4. Start the Development Server
bun run dev
The app will be available at http://localhost:3000 (http://localhost:3000).
Environment Variables
Variable	Type	Required	Description
NEXT_PUBLIC_API_URL	string	Yes	Base URL of the LifeLink BD backend API
Available Scripts
Script	Command	Description
dev	bun run dev	Starts development server with Turbopack
build	bun run build	Creates production build
start	bun run start	Starts production server
lint	bun run lint	Runs Biome linter & formatter checks
format	bun run format	Formats code using Biome
Application Flow
Blood Request Workflow
1. Submit Request – Requester fills out the blood request form with required details (blood group, units, hospital, urgency, date, reason).
2. Client Validation – Form data is validated using Zod schemas before submission.
3. API Call – TanStack Query sends the request to the backend via ofetch.
4. Payment URL – Backend creates the request and returns a payment URL.
5. Redirect – Frontend redirects the user to the bKash payment gateway.
6. Verification – Backend handles payment verification and updates the request status.
⚠️ Important: Redirecting to the payment gateway does not guarantee a successful payment. Final confirmation is handled by the backend.
Role-Based Access
Role	Access Level
SUPER_ADMIN	Full platform control, user management, and system settings
ADMIN	Administrative operations, donor approvals, and request oversight
DONOR	Donor profile, donation history, and availability management
REQUESTER	Blood request creation, tracking, and payment history
Role-based sidebar navigation and protected routes are managed via src/routes/.
API Integration
- Centralized Client – src/lib/apiClient.ts uses ofetch with base URL, timeout, and error handling
- Modular APIs – Separate API modules for auth, donor, and requests
- Type Safety – All API requests/responses are strictly typed
- React Query Hooks – Custom hooks abstract API logic for clean component usage
- Token Management – Auth tokens are handled securely for protected endpoints
UI & Styling
- shadcn/ui – Consistent, accessible, and customizable components
- Tailwind v4 – Modern styling with CSS variables for theming
- Component Variants – Managed via class-variance-authority
- Responsive First – Mobile-friendly layouts throughout
- Theme Support – Seamless light/dark mode switching
- Animations – Subtle transitions using Motion & tw-animate-css
Validation
All forms use a combination of:
- TanStack Form – Field-level state management
- Zod – Runtime schema validation
- Custom Validation – Role-specific schemas in src/validation/
Schemas include auth validation, donor application validation, and more to ensure data integrity.
Deployment
This project is optimized for deployment on Vercel (https://vercel.com/).
Deploy to Vercel
1. Push your code to GitHub/GitLab
2. Import the repository on vercel.com (https://vercel.com)
3. Add the environment variable:
- NEXT_PUBLIC_API_URL – Your production backend URL
4. Deploy with default Next.js settings
Manual Build
bun run build
bun run start
Author
Md Zilhaj Un Noor
- GitHub (https://github.com/ZilhajSajid)
- LinkedIn (https://www.linkedin.com/in/md-zilhaj-un-noor/)
License
This project is part of an academic assignment. All rights reserved by the author.
LifeLink BD — Every drop matters. Every life counts.
