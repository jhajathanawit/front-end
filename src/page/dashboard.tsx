
import Contents from '../Component/contents/contents';

import Footer from '../Component/footer/footer';

export default function Dashboard(){
    return(
        
            <>
                <div className='w-full-screen px-6 py-3'>
                  
                  < Contents />
                  < Footer />
            
                </div>
        </>
    )
}