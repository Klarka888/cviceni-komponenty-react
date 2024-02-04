import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

const Main = (props) => {
const {content} = props;
content = 
<>
<h1>Content</h1>
</>
}
createRoot(
    document.querySelector('#app'),
  ).render(<HomePage />);
  
