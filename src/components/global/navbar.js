import {React,useState} from 'react'
import Edulogo from '../images/edulogo.png'
import Kiransidde from '../images/kiransidde.jpg'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../api/authSlice'
import {Button, Select} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {MdOutlineLogout} from 'react-icons/md'

export default function Navbar() {
  const [dropevent, setDropevent] = useState(false)
  const dispatch=useDispatch()
  
  const logOutHandler=()=>{
    dispatch(logOut())
  }


  return (
    <div class="sticky top-0  z-50">
<section class="relative">
  <nav class="flex justify-between bg-white mb-3">
    <div class="w-full xl:w-auto px-2">
      <div class="flex items-center justify-between">
        <a class="inline-flex items-center" href="/">
          <img class="h-12 " src={Edulogo} alt=""/>
        </a>
      </div>
    </div>
    

    <div class="mt-5">
    <Menu>
  <MenuButton  className=' text-red-600 text-3xl mr-10'>
  <CgProfile onClick={()=>setDropevent(!dropevent)}/>
  </MenuButton>
  <MenuList maxWidth={'50px'}>
    <MenuItem onClick={logOutHandler} className='flex justify-between'><b>Logout </b><span className='text-lg'><MdOutlineLogout/></span></MenuItem>

  </MenuList>
</Menu>

  </div>
      </nav>  
</section>
    </div>
  )
}
