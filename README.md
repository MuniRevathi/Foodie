# Namaste React 🍽️

A modern React food delivery application built with the latest technologies and best practices. This project demonstrates comprehensive React concepts including routing, state management, testing, and performance optimization.

## 🚀 Live Demo

Visit the live application: [Namaste React](https://github.com/MuniRevathi/namaste-react)

## 📱 Features

- **Restaurant Listing**: Browse through various restaurants with ratings and details
- **Menu Display**: View detailed restaurant menus with categories and items
- **Shopping Cart**: Add/remove items with Redux state management
- **User Authentication**: Context-based user management
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Search Functionality**: Find restaurants and dishes easily
- **Lazy Loading**: Code splitting for optimal performance
- **Error Handling**: Comprehensive error boundaries and 404 pages
- **Testing Coverage**: Complete test suite with Jest and React Testing Library

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Latest React with concurrent features
- **Redux Toolkit** - Modern Redux for state management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

### Build Tools
- **Parcel** - Zero-configuration build tool
- **Babel** - JavaScript transpiler
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

### Backend API
- **Express.js** - REST API server
- **CORS** - Cross-origin resource sharing
- **Node.js** - Runtime environment

## 📁 Project Structure

```
namaste-react/
├── src/
│   ├── components/          # React components
│   │   ├── __tests__/      # Component tests
│   │   └── mocks/          # Mock data for testing
│   └── utils/              # Utility functions and hooks
├── my-api/                 # Express API server
├── coverage/               # Test coverage reports
└── dist/                   # Production build
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MuniRevathi/namaste-react.git
   cd namaste-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the API server**
   ```bash
   cd my-api
   npm install
   npm start
   ```
   The API will run on `http://localhost:3000`

4. **Start the development server**
   ```bash
   # In the root directory
   npm start
   ```
   The app will run on `http://localhost:1234`

## 📜 Available Scripts

### Main Application
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run watch-test` - Run tests in watch mode
- `npm run coverage` - Generate test coverage report

### API Server
```bash
cd my-api
npm start  # Start the Express API server
```

## 🧪 Testing

The project includes comprehensive testing with:

- **Unit Tests**: Component testing with Jest and React Testing Library
- **Integration Tests**: End-to-end user flows
- **Coverage Reports**: Available in the `coverage/` directory

Run tests:
```bash
npm test              # Run all tests
npm run watch-test    # Run tests in watch mode
npm run coverage      # Generate coverage report
```

## 🏗️ Key Components

- **Header**: Navigation with cart and user context
- **Body**: Restaurant listing with search functionality
- **RestaurantCard**: Individual restaurant display component
- **RestaurantMenu**: Detailed menu with categories
- **Cart**: Shopping cart with Redux integration
- **ItemList**: Reusable component for menu items
- **Shimmer**: Loading skeleton components

## 🔧 Custom Hooks

- `useOnlineStatus` - Monitor network connectivity
- `useRestaurantMenu` - Fetch and manage restaurant menu data

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Responsive Design** for all device sizes
- **Custom Components** with consistent design system

## 🔄 State Management

- **Redux Toolkit** for global state (cart, user preferences)
- **React Context** for user authentication
- **Local State** for component-specific data

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Performance Optimizations

- **Lazy Loading** with React.lazy()
- **Code Splitting** for optimal bundle size
- **Memoization** with React.memo()
- **Efficient Re-renders** with proper dependency arrays

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Revathi** - [MuniRevathi](https://github.com/MuniRevathi)

## 🙏 Acknowledgments

- Namaste React course for the foundational concepts
- React community for best practices
- Open source contributors for the amazing tools

---

**Happy Coding! 🎉**