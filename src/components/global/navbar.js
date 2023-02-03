import {React,useState} from 'react'
import Edulogo from '../images/edulogo.png'
import Kiransidde from '../images/kiransidde.jpg'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../api/authSlice'


export default function Navbar() {
  const [dropevent, setDropevent] = useState(false)
  const dispatch=useDispatch()
  
  const logOutHandler=()=>{
    dispatch(logOut())
  }


  return (
    <div class="sticky top-0  z-50">
<section class="relative">
  <nav class="flex justify-between py-8 bg-white mb-3">
    <div class="w-full xl:w-auto px-2">
      <div class="flex items-center justify-between">
        <a class="inline-flex items-center h-6" href="/">
          <img src={Edulogo} alt=""/>
        </a>
        
      </div>
    </div>
    <div>
  
    <div className=' text-red-600 text-3xl mr-10'> <CgProfile onClick={()=>setDropevent(!dropevent)}/></div>
  

  {dropevent && <div className="dropdown_menu">
  <ul class="mt-2 font-bold">
  {/* <li><Link to='/' >Profile</Link></li> */}

<li className="flex text-gray-800  text-md rounded-lg  shrink-0 " onClick={logOutHandler} >Logout</li>

  </ul>
  </div>}
  </div>

      </nav>
  {/* -------------------------------------------------- */}
  
</section>
    </div>
  )
}
