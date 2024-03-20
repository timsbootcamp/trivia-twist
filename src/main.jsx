import React from 'react'; // Importing React library for JSX usage
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering components
import App from './App.jsx'; // Importing the main App component

// Rendering the App component using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
