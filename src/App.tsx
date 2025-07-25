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
import Product_report from './Component/product/product_report';
import Product_stock from './Component/product/product_stock';
import Product_wish from './Component/product/product_wish';
import Customer_list from './Component/customer/customer_list';
import Customer_reviews from './Component/customer/customer_reviews';
import Wallet from './Component/wallet/wallet';
import Wallet_bonus_setup from './Component/wallet/wallet_bonus_setup';
import Customer_loyalty_point_report from './Component/customer/customer_loyalty_point_report';
import Add_new_vendor from './Component/vendor/add_new_vendor';
import Vendor_list from './Component/vendor/vendor_list';
import Withdraws from './Component/vendor/withdraws';
import Withdraws_method_list from './Component/vendor/withdraw_method_list';
import Add_new from './Component/delivery_men/add_new';
import Deliverman_list from './Component/delivery_men/list';

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
      < Product_report />
      < Product_stock />
      < Product_wish />
      < Customer_list />
      < Customer_reviews />
      < Wallet />
      < Wallet_bonus_setup />
      < Customer_loyalty_point_report />
      < Add_new_vendor />
      < Vendor_list />
      < Withdraws />
      < Withdraws_method_list />
      < Add_new />
      < Deliverman_list />
    </div>
    
    </>
  )
}

export default App
