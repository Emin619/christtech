# ChristTech - Industrial Engineering & Fabrication Website

A modern, high-performance website built for ChristTech, a leader in heavy mechanical engineering and industrial fabrication. This project utilizes React, TypeScript, and Vite to deliver a fast, responsive, and visually engaging user experience.

## 🚀 Features

-   **Modern Tech Stack**: Built with React 18 and TypeScript for type safety and maintainability.
-   **Blazing Fast**: Powered by Vite for instant server start and lightning-fast HMR.
-   **Responsive Design**: Fully responsive layout using Tailwind CSS, ensuring compatibility across all devices.
-   **Smooth Animations**: Integrated Framer Motion for sophisticated entrance animations and scroll effects.
-   **Component-Based Architecture**: Modular design with reusable components for buttons, headers, and layout elements.
-   **Iconography**: Uses `lucide-react` for clean and consistent icons.

## 🛠️ Tech Stack

-   **Framework**: React
-   **Language**: TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Routing**: React Router DOM

## 📂 Project Structure

```text
src/
├── components/         # Reusable UI components
│   ├── common/         # Generic components (Buttons, Inputs, etc.)
│   └── layout/         # Layout components (Header, Footer, etc.)
├── data/               # Static data definitions (sitedata.ts)
├── pages/              # Page components (Home, About, Services, Projects, Contact)
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🧠 Application Logic

-   **Routing**: The application uses `react-router-dom` for client-side routing. Navigation is handled in `App.tsx`, and the `Header` component automatically highlights the active page based on the current route.
-   **Data Management**: Core company information (Name, Contact Details, Social Links) is centralized in `src/data/sitedata.ts`. This allows for easy updates across the entire site from a single source of truth.
-   **Styling System**: Tailwind CSS is configured with a custom color palette (e.g., `industrial-navy`, `industrial-orange`) in `tailwind.config.js` to maintain brand identity.

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd industrial-firm
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:5173`.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate static files in the `dist` directory, ready to be deployed.

## 📄 License

This project is licensed under the MIT License.
