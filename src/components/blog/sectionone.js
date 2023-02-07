import React, { useEffect } from 'react'
import Navbar from '../global/navbar'
import Footer from '../global/footer'

import biz from "../images/biz.jpg"
import make from "../images/make.jpg"
import tech from "../images/tech.jpg"
import acturial from "../images/actuarial.jpg"
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { campusSelector, fetchAllcampus } from '../../api/campus'
import { crmSelector, fetchAllCrm, fetchOneCrm, updateCrm } from '../../api/crm'
import { useState } from 'react'
import { authenticateSelector, fetchAdminProfile } from '../../api/authSlice'
import axios from 'axios'
import { keyUri } from '../../key'
import { useDebounce } from "use-debounce";

const status=[
  {value:'Intrested', label:'Intrested'},
  {value:'Not Intrested', label:'Not Intrested'},
]
const intrstComm=[
  {value:'Call back', label:'Call back'},
  {value:'Will Visit Campus', label:'Will Visit Campus'},
  {value:'After results', label:'After results'},
]
const notIntrstComm=[
  {value:'Distance not suitable', label:'Distance not suitable'},
  {value:'Admitted elsewhere', label:'Admitted elsewhere'},
  {value:'Fees High', label:'Fees High'},
  {value:'Looking for better institute', label:'Looking for better institute'},
]

export default function Sectionone() {
  const dispatch=useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const {all_campus}=useSelector(campusSelector)
  const {crm,currentCrm}=useSelector(crmSelector)
  const {branches} = useSelector(authenticateSelector)
  console.log(branches)
  const [status, setStatus]=useState('')
  const [comment, setComment]=useState('')
  const [list, setList]=useState([])
  const [search, setSearch] = useState()
  const [debouncedText] = useDebounce(search, 1000)
  const toast=useToast()

  useEffect(()=>{
    dispatch(fetchAllcampus())
    dispatch(fetchAllCrm())
  },[])

  useEffect(()=>{
    const branchItem=crm.filter((item)=>{
      return branches.map((res)=>{
        return item.branch._id == res._id
      })
    })
    setList(branchItem)
  },[crm,branches])

  useEffect(()=>{
    if(search){
      axios.get(keyUri.BACKEND_URI +`/crm?search=${debouncedText}`).then(({data})=>{
        console.log(data)
      
        console.log(data?.filtercrm)
        const newData= data?.filtercrm.filter((item)=>{
          return item.status==='New' 
        })
        console.log(newData)
        setList(newData)
        })
    }else{
      dispatch(fetchAllCrm())
    }
    // setLoading(false)
    }, [dispatch, debouncedText])


  const fetchHandler=(id)=>{
    dispatch(fetchOneCrm(id))
    onOpen()
  }

  const saveHandler=(crm)=>{
    if(status=='' || comment==''){
      toast({
        position:'top',
        title: "Please fill all the fields",
        status: 'warning',
        duration: 1000,
        isClosable: true,
      })
    }else{
      console.log({...crm,status,comments:comment })
    dispatch(updateCrm(crm._id,{...crm,status,comments:comment }))
    setStatus('')
    setComment('')
    onClose()

    }
  }

  const filterHandel=async(e)=>{
    console.log(e.target.value)
    if(e.target.value){
      const {data}=await axios.get(`${keyUri.BACKEND_URI}/crm?suhas=${e.target.value}`)
    const newData =data.filtercrm.filter((item)=>{
      return item.status==='New' 
    })
    setList(newData)
    }else{
      dispatch(fetchAllCrm())
    }
  }


  return (
    <div>
<Navbar/>


<section class="py-2 sm:py-2 bg-red-100 " style={{fontFamily:'Manrope'}}>
<div class="p-2 px-8 w-full">
        <div class="relative">
          <svg class="absolute top-1/2 left-4 transform -translate-y-1/2" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0467 11.22L12.6667 9.80667C12.3698 9.5245 11.9954 9.33754 11.5915 9.26983C11.1876 9.20211 10.7726 9.25673 10.4 9.42667L9.80001 8.82667C10.5071 7.88194 10.8299 6.70445 10.7037 5.53122C10.5775 4.358 10.0115 3.27615 9.11963 2.50347C8.2278 1.73078 7.07637 1.32464 5.89712 1.36679C4.71788 1.40894 3.59838 1.89626 2.76399 2.73065C1.92961 3.56503 1.44229 4.68453 1.40014 5.86378C1.35799 7.04302 1.76413 8.19446 2.53681 9.08629C3.3095 9.97812 4.39134 10.5441 5.56457 10.6704C6.7378 10.7966 7.91529 10.4737 8.86001 9.76667L9.45335 10.36C9.26341 10.7331 9.19534 11.1564 9.25873 11.5702C9.32212 11.984 9.51377 12.3675 9.80668 12.6667L11.22 14.08C11.595 14.4545 12.1033 14.6649 12.6333 14.6649C13.1633 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3885 13.6713 14.4919 13.4257C14.5952 13.1802 14.6484 12.9164 14.6484 12.65C14.6484 12.3836 14.5952 12.1198 14.4919 11.8743C14.3885 11.6287 14.2372 11.4063 14.0467 11.22V11.22ZM8.39335 8.39333C7.92684 8.85866 7.33288 9.1753 6.68651 9.30323C6.04013 9.43117 5.37034 9.36466 4.76175 9.11212C4.15315 8.85958 3.63305 8.43234 3.26716 7.88436C2.90126 7.33638 2.70597 6.69224 2.70597 6.03333C2.70597 5.37442 2.90126 4.73029 3.26716 4.18231C3.63305 3.63433 4.15315 3.20708 4.76175 2.95454C5.37034 2.702 6.04013 2.6355 6.68651 2.76343C7.33288 2.89137 7.92684 3.208 8.39335 3.67333C8.70377 3.98297 8.95005 4.35081 9.1181 4.75577C9.28614 5.16074 9.37264 5.59488 9.37264 6.03333C9.37264 6.47178 9.28614 6.90592 9.1181 7.31089C8.95005 7.71586 8.70377 8.08369 8.39335 8.39333V8.39333ZM13.1067 13.1067C13.0447 13.1692 12.971 13.2187 12.8897 13.2526C12.8085 13.2864 12.7214 13.3039 12.6333 13.3039C12.5453 13.3039 12.4582 13.2864 12.377 13.2526C12.2957 13.2187 12.222 13.1692 12.16 13.1067L10.7467 11.6933C10.6842 11.6314 10.6346 11.5576 10.6008 11.4764C10.5669 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.5669 11.0449 10.6008 10.9636C10.6346 10.8824 10.6842 10.8086 10.7467 10.7467C10.8087 10.6842 10.8824 10.6346 10.9636 10.6007C11.0449 10.5669 11.132 10.5495 11.22 10.5495C11.308 10.5495 11.3952 10.5669 11.4764 10.6007C11.5576 10.6346 11.6314 10.6842 11.6933 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2526 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2526 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067V13.1067Z" fill="#BBC3CF"></path>
          </svg>
          <input class="w-full md:w-full h-9 py-1 pl-9 pr-4 text-lg text-gray-800 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-md" type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      </div>
            
      <div class="w-full md:w-full xl:w-1/2 px-8 mb-3">
      <Select bg='white' color='grey' placeholder='Filter Campus' onChange={filterHandel} >
        {
          branches?.map((item,i)=>{
            return(
              <option value={item._id} key={i} >{item.campus}</option>
            )
          })
        }
</Select>
        </div>

  <div class="container px-4 mx-auto">

    <div class="  sm:pb-5 px-4 md:px-8 lg:px-20  rounded-xl">
      <div>
        <div class="flex flex-wrap justify-center -mx-3 mb-14 md:mb-28">
          {
            list?.map((item,i)=>{
              return(
                <div class="flex-shrink-0 w-full lg:w-1/3 px-3 mb-3 lg:mb-0 " key={i}>
                <div class=" pb-4 md:pb-1 px-4 md:px-8 "> 
                </div>
                <div class="p-8 bg-white shadow-lg rounded-xl overflow-hidden">
                 
    
                <div class="flex items-center mb-3 ">
                    <h4 class="mr-auto text-xl font-heading font-bold text-gray-800">Name: {item.student_name}</h4>
                  </div>
    
                  <div class="flex items-center mb-3 ">
                    <h4 class="mr-auto text-xl font-heading font-bold text-gray-800">Phone No: {item.parent_phone}</h4>
                  </div>
    
                  <div class="flex items-center mb-3 "> 
                    <h4 class="mr-auto text-xl font-heading font-bold text-gray-800">Campus Name: {item.branch.campus}</h4>
                  </div>
                  
                  <div className="mt-5 mb-2 float-right">
                   <Button onClick={()=>{fetchHandler(item._id)}} className=" py-4 px-6 sm:w-full text-white font-semibold rounded-xl shadow-4xl focus:ring    transition ease-in-out duration-200" colorScheme='red'  type="submit" >Change Status</Button>
                   </div>
    
                </div>
                </div>
              )
            })
          }
      
            {/* -------------------------------------------------------------------- */}
        
        </div>
      </div>
    </div>
  </div>
</section>
<Box >
      <Modal size='xs' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 style={{fontSize:'16px'}}>Name : {currentCrm?.student_name}</h1>
            {/* <Lorem count={2} /> */}
            <Select mt='20px' placeholder='Status' required onChange={(e)=>setStatus(e.target.value)}>
            <option value='Intrested'>Intrested</option>
            <option value='Not Intrested'>Not Intrested</option>
            </Select>
            <Select mt='20px'  placeholder='Status' required onChange={(e)=>setComment(e.target.value)} >
              {
                status==='Intrested'?
                <>
                <option value='Call back'>Call back</option>
                <option value='Will Visit Campus'>Will Visit Campus</option>
                <option value='After results'>After results</option>
                </>:status==="Not Intrested"?<>
                <option value='Distance not suitable'>Distance not suitable</option>
                <option value='Admitted elsewhere'>Admitted elsewhere</option>
                <option value='Fees High'>Fees High</option>
                <option value='Looking for better institute'>Looking for better institute</option>
                </>:<></>

              }
            </Select>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Button colorScheme='red' onClick={()=>saveHandler(currentCrm)}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>

<Footer/>
    </div>
  )
}
