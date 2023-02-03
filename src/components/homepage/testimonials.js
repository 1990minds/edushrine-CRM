import React from 'react'
import Logo from '../images/balaji.png'
import Logo1 from '../images/krbl.png'
import Logo2 from '../images/logo-sentini.png'
import Logo3 from '../images/patan.png'
import Logo4 from '../images/rb.png'
import Logo5 from '../images/ruchi.png'
import Logo6 from '../images/teri.png'


import Loadable from '@loadable/component';



    const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

    const options = {
        loop: false,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            0:{
                items:1,
            },
            768:{
                items:4,
            },
            1200:{
                items:5,
            }
        }
    }
    
    const SectionThree = () => {
        const [display, setDisplay] = React.useState(false);
    
        React.useEffect(() => {
            setDisplay(true);
        }, [])
    

  return (



<div>
            <div className=" bg-white py-5 px-4 lg:px-32 lg:py-14" style={{fontFamily:'Poppins'}}>
            <p class=" text-3xl text-indigo-900 text-center font-bold  tracking-px">Trusted by Global Companies</p>
            <div>
                   
                </div>
                {display ? <OwlCarousel 
                    className=" lg:mt-16 lg:ml-8"
                    {...options}
                >
                    <div className=' m-8'>
                           <img src={Logo} alt="image" />
                     
                    </div>

                    <div  className=' m-8'>
                           <img src={Logo1} alt="image" />
                     
                    </div>

                    <div  className=' m-8'>
                           <img src={Logo2} alt="image" />
                     
                    </div>

                    <div  className=' m-8'>
                           <img src={Logo3} alt="image" />
                     
                    </div>

                    {/* <div  className=' m-8'>
                           <img src={Infofive} alt="image" />
                     
                    </div> */}

                    <div  className=' m-8'>
                           <img src={Logo4} alt="image" />
                     
                    </div>

                    {/* <div  className=' m-8'>
                           <img src={Infoseven} alt="image" />
                     
                    </div> */}

                    <div  className=' m-8'>
                           <img src={Logo5} alt="image" />
                     
                    </div>
                    <div  className=' m-8'>
                           <img src={Logo6} alt="image" />
                     
                    </div>
                    <div  className=' m-8'>
                           <img src={Logo} alt="image" />
                     
                    </div>

                   

                 
                </OwlCarousel> : ''}
            </div>
        </div>
    );
}

export default SectionThree;








// import { info } from 'autoprefixer'
// import React from 'react'
// import Info from '../../../static/images/infoThre.png'
// import InfoOne from '../../../static/images/infoFour.png'

// export default function SectionThree() {
//   return (
//     <div>
        
//         <section class="relative pt-14 lg:pt-28 pb-36 bg-blueGray-100 overflow-hidden bg-gray-200" style={{fontFamily:'poppins'}}>
//   <img class="absolute top-0 left-0" src="flaro-assets/images/logos/gradient3.svg" alt=""/>
//   <div class="relative z-10 container px-4 mx-auto">
//     <p class="mb-14 text-3xl text-indigo-800 text-center font-bold  tracking-px">Powering next-gen companies</p>
//     <div class="flex flex-wrap max-w-5xl mx-auto -m-3">
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-auto bg-white rounded-3xl">
//           <img src={Info} alt=""/>
//         </div>
//       </div>
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
//         <img src={InfoOne} alt=""/>
//         </div>
//       </div>
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
//         <img src={Info} alt=""/>
//         </div>
//       </div>
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
//         <img src={InfoOne} alt=""/>
//         </div>
//       </div>
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
//         <img src={Info} alt=""/>
//         </div>
//       </div>
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
//         <img src={InfoOne} alt=""/>
//         </div>
//       </div>
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
//         <img src={Info} alt=""/>
//         </div>
//       </div>
//       <div class="w-full md:w-1/2 lg:w-1/4 p-3">
//         <div class="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
//         <img src={InfoOne} alt=""/>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }
