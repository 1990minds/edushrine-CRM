import React,{useEffect} from 'react'
import Founder from '../images/kiransidde.jpg'
import Fav from '../images/fav-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { authenticateSelector, fetchlogin } from '../../api/authSlice'
import { createGlobalStyle } from 'styled-components'


export default function Loginpage() {
  const dispatch = useDispatch()
  const history = useNavigate()
  const {register,handleSubmit} = useForm();
  const {isAuthenticate} = useSelector(authenticateSelector)
  const onSubmit = data => dispatch(fetchlogin(data))

    useEffect(()=>{
      if(!isAuthenticate){
          // window.location.href = '/user-profile'
          console.log('first')
          history('/')
      }else{
          // history.push('/')
          console.log("second")
          history('/mainpage')
      }
  },[isAuthenticate]) 


  return (
    <div>
        <section class="relative pt-16 md:py-32 bg-red-50" style={{fontFamily:'Manrope'}} >
  <div class="container px-4 mx-auto mb-16 md:mb-0">
    <div class="w-full md:w-1/2 md:pr-4">
      <div class="max-w-sm mx-auto">
        <div class="mb-6 text-center">
          {/* <a class="inline-block mb-6" href="/blogs"> */}
            <img class="h-16 inline-block mb-6" src={Fav} alt=""/>
          {/* </a> */}
          <h3 class="mb-10 text-2xl md:text-2xl font-bold">Login to you Account</h3>
          <p class="text-lg text-coolGray-500 font-medium"></p>
        </div>
        <form class='form' onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-6 " >
            <input {...register("email")} class="appearance-none block w-full p-3 leading-5 bg-white text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" type="email" placeholder="Email address"/>
          </div>
          <div class="mb-4">
            <input {...register("password")} class="appearance-none block w-full p-3 bg-white leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" type="password" placeholder="Password"/>
          </div>
          <div class="flex flex-wrap items-center justify-between mb-6">
            
          </div>
          <button class="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-red-700 hover:bg-black focus:ring-2  focus:ring-opacity-50 rounded-md shadow-sm" type="submit" >Sign In</button>
          
        </form>
      </div>
    </div>
  </div>
  <div class="md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full md:pl-4">
    <div class="flex items-center justify-center h-full px-8 py-14 bg-coolGray-50">
      <div class="md:max-w-xl mx-auto text-center">
        <span class="relative z-10 inline-block py-px px-2 mb-4 text-xs leading-5 text-red-700 bg-red-100 font-medium uppercase rounded-full shadow-sm">Quotes</span>
        <div class="relative mb-8">
          <img class="absolute -top-10 left-0 2xl:-left-12" src="flex-ui-assets/elements/sign-up/quotes-top.svg" alt=""/>
          <img class="absolute -bottom-16 right-0" src="flex-ui-assets/elements/sign-up/quotes-bottom.svg" alt=""/>
          <h3 class="relative text-xl md:text-xl leading-tight font-semibold text-coolGray-800"><span className='text-red-700'>EduShrine Academic Services Pvt Ltd</span> is the Dream Child of Mr. Kiran Sidde, a Post Graduate in Organic Chemistry and Psychology</h3>
        </div>
        <div class="relative text-center">
          <img class="w-24 h-24 mb-6 mx-auto rounded-full" src={Founder} alt=""/>
          <h4 class="mb-2 text-xl text-red-700 font-semibold">Kiran Sidde</h4>
          <span class="block mb-8 text-lg text-coolGray-400">CEO &amp; Founder at EduShrine</span>
          <div class="flex items-center justify-center"><a class="w-3 h-3 mr-3 bg-coolGray-100 rounded-full" href="#"></a><a class="w-3 h-3 mr-3 bg-red-700 rounded-full" href="#"></a><a class="w-3 h-3 bg-coolGray-100 rounded-full" href="#"></a></div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}