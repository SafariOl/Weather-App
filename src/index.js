import ReactDOMClient from 'react-dom/client';
import App from './App';
import './style.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);
