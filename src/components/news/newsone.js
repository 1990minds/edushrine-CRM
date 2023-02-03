import React from 'react'
import biz from "../images/biz.jpg"
import make from "../images/make.jpg"
import tech from "../images/tech.jpg"
import acturial from "../images/actuarial.jpg"

export default function Sectionone() {
  return (
    <div>

<section class=" pt-12 pb-16 lg:pt-28 lg:pb-14 bg-white overflow-hidden" style={{fontFamily:'poppins'}}>
  <div class="container px-4 mx-auto">
    <h2 class="mb-4 text-4xl md:text-5xl text-center font-bold font-heading font-heading tracking-px-n leading-tight text-indigo-900">Latest News from Sona Machinery</h2>
    <div class="flex flex-wrap   lg:ml-16">
      <div class="w-full md:w-1/2 p-14  hover:-translate-y-2 transition ease-in-out duration-1000">
        <div class="flex flex-wrap lg:items-center -m-2 bg-slate-50">
          <div class=" w-60 lg:w-40 p-4">
            <div class="overflow-hidden rounded-xl">
              <img class="transform hover:scale-105 transition ease-in-out duration-1000" src={biz} alt=""/>
            </div>
          </div>
          <div class="flex-1 p-4">
            <div class="md:max-w-xs">
              <div class="flex flex-col justify-between h-full">
                <div class="mb-6">
                  <p class="mb-1.5 text-sm text-indigo-800 font-medium  tracking-px">News</p>
                  <a class="inline-block hover:text-gray-800 hover:underline" href="/blogs/roleofactuaries/">
                    <h3 class="text-xl font-semibold leading-normal text-indigo-800">23rd International Rice Grain Pro-Tech Expo 2022, Ludhiana, Punjab</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-14 hover:-translate-y-2 transition ease-in-out duration-1000">
        <div class="flex flex-wrap lg:items-center -m-4 bg-slate-50">
          <div class="w-60 lg:w-40  p-4">
            <div class="overflow-hidden rounded-xl">
              <img class="transform hover:scale-105 transition ease-in-out duration-1000" src={make} alt=""/>
            </div>
          </div>
          <div class="flex-1 p-4">
            <div class="md:max-w-xs">
              <div class="flex flex-col justify-between h-full">
                <div class="mb-6">
                  <p class="mb-1.5 text-sm text-indigo-800 font-medium  tracking-px">Events</p>
                  <a class="inline-block hover:text-gray-800 hover:underline" href="/blogs/UnderwritingScoringModel">
                    <h3 class="text-xl font-semibold leading-normal text-indigo-800">23rd International Rice Grain Pro-Tech Expo 2022, Ludhiana, Punjab</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-14 hover:-translate-y-2 transition ease-in-out duration-1000">
        <div class="flex flex-wrap lg:items-center -m-4 rounded-lg bg-slate-50">
          <div class=" w-60 lg:w-40  p-4">
            <div class="overflow-hidden rounded-xl">
              <img class="transform hover:scale-105 transition ease-in-out duration-1000" src={tech} alt=""/>
            </div>
          </div>
          <div class="flex-1 p-4">
            <div class="md:max-w-xs">
              <div class="flex flex-col justify-between h-full">
                <div class="mb-6">
                  <p class="mb-1.5 text-sm text-indigo-800 font-medium  tracking-px">Events</p>
                  <a class="inline-block hover:text-gray-800 hover:underline" href="/blogs/ActuarialPerspective">
                    <h3 class="text-xl font-semibold leading-normal text-indigo-800">23rd International Rice Grain Pro-Tech Expo 2022, Ludhiana, Punjab</h3>
                  </a>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-14 hover:-translate-y-2 transition ease-in-out duration-1000">
        <div class="flex flex-wrap lg:items-center -m-4 bg-slate-50">
          <div class=" w-60 lg:w-40  p-4">
            <div class="overflow-hidden rounded-xl">
              <img class="transform hover:scale-105 transition ease-in-out duration-1000" src={acturial} alt=""/>
            </div>
          </div>
          <div class="flex-1 p-4">
            <div class="md:max-w-xs">
              <div class="flex flex-col justify-between h-full">
                <div class="mb-6">
                  <p class="mb-1.5 text-sm text-indigo-800 font-medium  tracking-px">News</p>
                  <a class="inline-block hover:text-gray-800 hover:underline" href="/blogs/EnterpriseRisk">
                    <h3 class="text-xl font-semibold leading-normal text-indigo-800">23rd International Rice Grain Pro-Tech Expo 2022, Ludhiana, Punjab</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
