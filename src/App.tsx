import Contents from './Component/contents/contents';
import Banner from './Component/banner/banner';
import './index.css'
import Footer from './Component/footer/footer';
import Category from './Component/category/category';
import Product_Gallery from './Component/product_gallery/product_gallery';
import Banner_setup from './Component/banner/banner_setup';
import Chating_list from './Component/chatting/chatting_list';
import Chatting_list from './Component/chatting/chatting_list';
import Support_ticket from './Component/support/support_ticket';


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
      < Chatting_list />
      < Support_ticket />
    </div>
    
    </>
  )
}

export default App
