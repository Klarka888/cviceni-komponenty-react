import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

const Header = (props) => {
const {title} = props;
title = 
<>
<h1>Title</h1>
</>
}
createRoot(
    document.querySelector('#app'),
  ).render(<HomePage />);
  
