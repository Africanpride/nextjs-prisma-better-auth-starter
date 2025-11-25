# Next.js 16 + Prisma + Better-auth + PostgreSQL Starter

This is a modern, production-ready starter template for building full-stack applications with **Next.js 16**, **Prisma ORM**, **Better-auth**, and **PostgreSQL**. It comes pre-configured with essential tools and best practices to jumpstart your development.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Better-auth](https://better-auth.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Email:** [Resend](https://resend.com/) (configured in auth hooks)
- **UI Components:** [Lucide React](https://lucide.dev/) (Icons)

## ✨ Features

- **Robust Authentication:** Secure user authentication flow using Better-auth with Prisma adapter.
- **Type-Safe Database:** Full type safety with Prisma ORM and PostgreSQL.
- **Modern UI:** Styled with Tailwind CSS for rapid UI development.
- **Email Integration:** Ready-to-use email sending setup with Resend.
- **Developer Experience:** TypeScript setup for static type checking and improved tooling.

## 🛠️ Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (running locally or a cloud instance)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Africanpride/nextjs-prisma-better-auth-starter.git
    cd nextjs-prisma-better-auth-starter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Setup

1.  **Configure Environment Variables:**
    Create a `.env` file in the root directory. You can start by copying the example (if available) or adding the following keys:

    ```env
    # Database connection string
    DATABASE_URL="postgresql://user:password@localhost:5432/your_database_name?schema=public"

    # Better-auth secret (generate a secure random string)
    BETTER_AUTH_SECRET="your_secure_random_string"
    
    # App Base URL
    BETTER_AUTH_URL="http://localhost:3000"

    # Resend API Key (for emails)
    RESEND_API_KEY="re_123456789"
    ```

### Database Setup

1.  **Generate Prisma Client:**
    ```bash
    npx prisma generate
    ```

2.  **Run Migrations:**
    Push the schema to your database to create the necessary tables.
    ```bash
    npx prisma migrate dev --name init
    ```

### Running the App

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `lib/`: Utility functions and shared configuration (e.g., `auth.ts`, `prisma.ts`).
- `prisma/`: Prisma schema and migration files.
- `components/`: Reusable React components.
- `emails/`: Email templates (e.g., for Resend).
- `public/`: Static assets.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
