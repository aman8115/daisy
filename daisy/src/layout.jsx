import{ AiFillCloseCircle, } from 'react-icons/ai'

import {Link} from 'react-router-dom'





function Home(){
    function Onchangwidth(){
        const drawerSide = document.getElementsByClassName('drawer-side')
        drawerSide[0].style.width = 0;
    }
    function Hidedrawer(){
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false;
        Onchangwidth()
    }
    return (
      <>
     <div className=' h-[90vh]'>
        
        <div className='text-4xl drawer absolute left-0 w-'>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
   
                <ul className=' menu p-4 w-80  min-h-full bg-base-200 text-base-content '>
                    <li>
                        <button onClick={Hidedrawer}  className='  absolute w-fit'>
                            <AiFillCloseCircle size={24}/>
                        </button>
                    </li>
                    <li> <Link to="/courses"></Link>All course</li>
                    <li> <Link to="/about"></Link>AboutUS</li>
                    <li> <Link to="contact"></Link>contactUS</li>
                </ul>
            </div>

        </div> 


      
     </div>
     </>
      

      
    )

}
export default Home;
