import Contents from './Component/contents/contents';
import Banner from './Component/banner/banner';
import './index.css'
import Footer from './Component/footer/footer';
import Category from './Component/category/category';
import Product_Gallery from './Component/product_gallery/product_gallery';
import Banner_setup from './Component/banner/banner_setup';
import Chatting_list from './Component/chatting/chatting_list';
import Support_ticket from './Component/support/support_ticket';
import Inhouse_sale from './Component/Inhouse/Inhouse_sale';
import Transaction_report from './Component/transaction/transaction_report';
import Expense_transactions from './Component/transaction/expense_transactions';
import Refund_transactions from './Component/transaction/refund_transactions';
import Order_report from './Component/order/order_report';


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
      < Inhouse_sale />
      < Transaction_report />
      < Expense_transactions />
      < Refund_transactions />
      < Order_report />
    </div>
    
    </>
  )
}

export default App
