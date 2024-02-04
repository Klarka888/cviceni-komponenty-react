import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import {Header} from './aplikace-react/src/header'
import {Main} from './aplikace-react/src/main'
import {Footer} from './aplikace-react/src/footer'

const App = () => {
  return (
  <>
  {Header}
  {Main}
  {Footer}
  </>
  
  );
};

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
