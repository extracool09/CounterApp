import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from './About';
import Counter from './Counter';
import Error from './Error';
import Shared from './Shared';


function App() {
  return (
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Shared />} > 
    <Route index element={<Counter />} />
    <Route path='/About' element={<About />} />
    <Route path='*' element={<Error />} />
    </Route>
   
    
    </Routes>
    </BrowserRouter>

  )
}

export default App;