import Contents from './Component/contents/contents';
import Banner from './Component/banner/banner';
import './index.css'
import Footer from './Component/footer/footer';
import Category from './Component/category/category';
import Product_Gallery from './Component/product_gallery/product_gallery';
import Banner_setup from './Component/banner/banner_setup';


function App() {
  

  return (
    <>
    <div className='w-full-screen px-6 py-3'>
      < Banner />
      < Contents />
      < Footer />
      < Category />
      < Product_Gallery />
      < Banner_setup />
    </div>
    
    </>
  )
}

export default App
