import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

const Footer = (props) => {
const {autor} = props;
autor = 
<>
<h1>Autor stránky</h1>
</>
}
createRoot(
    document.querySelector('#app'),
  ).render(<HomePage />);
  
