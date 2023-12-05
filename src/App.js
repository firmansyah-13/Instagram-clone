import './App.css';
import Navbar from './components/Navbar.js';
import {Story} from './components/story-section.js';
import Posting from './components/posting.js';

function App() {
  return (
    <>
    <div className=" bg-black text-yellow-50">
      <Navbar />
      <hr className='my-3'/>
      <Story/>
      <Posting/>
      <Posting/>
      <Posting/>
      
    </div>
    </>
  )
}


export default App;
