
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Sidebar from './Component/Bar/Sidebar';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Animel from './Component/Pages/Animel';
import About from './Component/Pages/About';

import Videos from './Component/Pages/Videos';
import Images from './Component/Pages/Images';
import Place from './Component/Pages/Place';
import Feedback from './Component/Pages/Feedback';
import Faq from './Component/Pages/Faq';
import Privacypolicy from './Component/Pages/Privacypolicy';
import Termsandcondition from './Component/Pages/Termsandcondition';



function App() {
  return (
    <div className="App">
        
         <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/sidebar' element={<Sidebar/>}/>
             <Route path='/contactus' element={<Contact/>}/>
             <Route path='/animel' element={<Animel/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/video' element={<Videos/>}/>
             <Route path='/image' element={<Images/>}/>
             <Route path='/place' element={<Place/>}/>
             <Route path='/feedback' element={<Feedback/>}/>
             <Route path='/faq' element={<Faq/>}/>
             <Route path='/pp' element={<Privacypolicy/>}/>
             <Route path='/tc' element={<Termsandcondition/>}/>
          </Routes>
         </BrowserRouter>
          
    </div>
  );
}

export default App;
