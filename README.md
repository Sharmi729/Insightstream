#  InsightStream News web App

Welcome to the Real-time News Web App! This application provides users with the latest news updates in real-time across various topics. It's built with a combination of frontend and backend technologies to deliver a seamless news browsing experience.



## Introduction

**Project Title:** InsightStream  
**Team Members:**  
- **Team Leader:** MOHAMMED ASHIQ M U  
- **Team Members:** AJITH G, PUGAZHENTHI M, SANTHOSH V, YOKESH V  

## Project Overview

### Purpose
InsightStream is a modern news application designed to deliver categorized news to users in an intuitive and engaging manner. The primary goal is to keep users informed with the latest news across multiple categories while providing a seamless user experience.

### Features
- Categorized news display (e.g., Technology, Sports, Business, Entertainment, etc.)
- Responsive and user-friendly UI
- Home page displaying trending and latest news
- About page with details about InsightStream
- Subscribe page for users to sign up for personalized news updates

## Architecture

### Component Structure
- **App.jsx** - Root component managing routes and layout
- **Header.jsx** - Contains navigation and branding
- **Footer.jsx** - Displays copyright and links
- **HomePage.jsx** - Displays top and trending news
- **CategoryPage.jsx** - Shows news based on user-selected category
- **ArticleCard.jsx** - Reusable component to display individual news articles
- **AboutPage.jsx** - Information about InsightStream
- **SubscribePage.jsx** - Allows users to subscribe for updates

### State Management
- **Context API** is used for global state management, storing news data, user preferences, and subscriptions.
- **Local state management** within individual components for UI interactions.

### Routing
- **React Router** is used to handle navigation between pages:  
  `/` - Home Page  
  `/about` - About Page  
  `/subscribe` - Subscription Page  
  `/category/:categoryName` - Dynamic route for news categories  

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- Git
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Ashu1090/insightstream.git
   ```
2. Navigate into the project directory:
   ```sh
   cd insightstream
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure
```
insightstream/
│── src/
│   │── components/   # Reusable components (Header.jsx, Footer.jsx, ArticleCard.jsx)
│   │── pages/        # Page components (HomePage.jsx, AboutPage.jsx, SubscribePage.jsx)
│   │── assets/       # Images, icons, and styles
│   │── utils/        # Utility functions and custom hooks
│   │── context/      # Context API files for global state
│── public/           # Static files
│── package.json      # Project dependencies and scripts
│── README.md         # Project documentation
```

## Running the Application
To start the frontend server locally, run:
```sh
npm run dev
```
This will launch the application at [http://localhost:5173/](http://localhost:5173/).

## Component Documentation

### Key Components
- **ArticleCard.jsx:** Displays a single news article with title, image, and description.
- **CategoryList.jsx:** Renders a list of available news categories.
- **SubscribeForm.jsx:** Handles user subscription input and submission.

### Reusable Components
- **Button.jsx:** Styled button used across the app.
- **Loader.jsx:** Displays a loading spinner while fetching data.

## State Management

### Global State
- Managed via **Context API** to store and share news data and user preferences.

### Local State
- Used within components to handle UI interactions such as toggles and input fields.

## User Interface

### Screenshots

   ```md
   ![Homepage ](assets/Screenshot_140.png)
   ![About Page ](assets/Screenshot_141.png)
   ![Subscription Page](assets/Screenshot_142.png)
   ```

## Styling

### CSS Frameworks/Libraries
- **Styled Components** for modular and dynamic styling.
- **CSS Modules** for scoped styles in individual components.

### Theming
- Dark mode support (if implemented in future versions).

## Testing

### Testing Strategy
- **Jest & React Testing Library** for unit and integration tests.
- **Cypress** (future enhancement) for end-to-end testing.

### Code Coverage
- Code coverage reports generated using **Jest**.

## Demo
[Live Demo](https://insight-stream-wheat.vercel.app/)

## Known Issues
- Performance optimizations needed for large news datasets.
- Improve mobile responsiveness for small-screen devices.

## Future Enhancements
- Implement **dark mode** for better accessibility.
- Add a **search functionality** for articles.
- Improve **animation and transitions** for a smoother user experience.

---






