import React from 'react'
import Banner from '../images/banner.webp'

export default function banner() {
  return (
    <div>
        <section class='py-4 md:py-20  lg:py-10 lg:w-full lg:h-auto' style={{fontFamily:'Lato'}}>
<a class="block w-full bg-slate-300" href="#">
              <img class=" sm:h-96 md:h-96 sm:w-full md:w-full object-cover " src={Banner} alt=""/>
            </a>
            </section>
    </div>
  )
}
