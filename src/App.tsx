
import Banner from './Component/banner/banner';
import './index.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Refund from './page/Refund'
import Dashboard from './page/dashboard';
import NewProduct from './page/newProduct';


function App() {
  return (
    <Router>  {/* ห่อแอปด้วย Router */}
      <div className='w-full-screen px-6 py-3'>
        <Banner />
        
        
        
        {/* กำหนดเส้นทาง */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/refund" element={<Refund/>}/>
          <Route path="/newproduct" element={<NewProduct/>}/>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
