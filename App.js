
import './App.css';
import  {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Contact1 from './Contact1';
import Contact2 from './Contact2';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contect' element={<Contact/>}></Route>
          <Route path='/contact/contact1' element={<Contact1/>}></Route>
          <Route path='/contact/contact2' element={<Contact2/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
