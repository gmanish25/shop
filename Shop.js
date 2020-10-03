import React from 'react'

import './App.js'
import logo1 from './1mg.jpg'
import logo2 from './apollo.jpg'
import logo3 from './p.jpg'
import logo4 from './netmeds.jpg'
import logo5 from './med.jpg'
const Shop = () => {
    return (
        <div className="shopping-cart m-auto  h-auto mt-24 mb-24 rounded-md bg-white  shadow-md flex flex-col  xl:overflow-hidden " style={{width: '750px'}} >
                <div className="title text-center text-2xl font-semibold pb-2 pt-2">
          Med Shops
        </div>
                <div class="item pt-5 pb-5 pr-8 pl-8 hover:shadow-md border-t-2 xl:h-auto xl:flex-wrap xl:max-w-xxl xl:justify-center">
          
            <div className="image float-left w-16 h-16">
            <img src={logo1} alt="1mg" style={{borderRadius: '5px' }} />
            </div>
          <div className="description ml-20 mt-5 w-16 cursor-pointer float-left xl:max-w-full">
            <span className="font-medium" >1mg</span>
          </div>
          <div className="quantity ml-20 float-left mt-3 xl:max-w-full xl:text-center">
            <div className="font-medium">2 Day</div>
            <h6 style={{color: 'gray'}}>Delivery</h6>
          </div>
          <a className="next h-5 text-2xl ml-6 float-right mt-4 text-blue-700 cursor-pointer hover:text-5xl">❯</a>
          <button className="total-price float-right mt-3 h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800">₹500
            <span className="  text-xs block  text-opacity-75 ">BUY</span>
          </button>
        </div>
        
        <div class="item pt-5 pb-5 pr-8 pl-8 hover:shadow-md border-t-2 xl:h-auto xl:flex-wrap xl:max-w-xxl xl:justify-center">
          
            <div className="image float-left w-16 h-16">
              <img src={logo2} alt="Apollo" />
            </div>
            <div className="description ml-20 mt-5 w-16 cursor-pointer float-left xl:max-w-full">
              <span className="font-medium" >Apollo</span>
            </div>
            <div className="quantity ml-20 float-left mt-3 xl:max-w-full xl:text-center">
              <div className="font-medium" >2 Day</div>
              <h6 style={{color: 'gray'}}>Delivery</h6>
            </div>
            <a className="next h-5 text-2xl ml-6 float-right mt-4 text-blue-700 cursor-pointer hover:text-5xl">❯</a>
            <button className="total-price float-right mt-3 h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800">₹550
              <span className="  text-xs block  text-opacity-75 ">BUY</span>
            </button>
          </div>

          <div className="item pt-5 pb-5 pr-8 pl-8 hover:shadow-md border-t-2 xl:h-auto xl:flex-wrap xl:max-w-xxl xl:justify-center">
          
          <div className="image float-left w-16 h-16">
            <img src={logo3} alt="Pharmeasy" />
          </div>
          <div className="description ml-20 mt-5 w-16 cursor-pointer float-left xl:max-w-full">
            <span className="font-medium" >Pharmeasy</span>
          </div>
          <div className="quantity ml-20 float-left mt-3 xl:max-w-full xl:text-center">
            <div className="font-medium" >3 Day</div>
            <h6 style={{color: 'gray'}}>Delivery</h6>
          </div>
          <a className="next h-5 text-2xl ml-6 float-right mt-4 text-blue-700 cursor-pointer hover:text-5xl">❯</a>
          <button className="total-price float-right mt-3 h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800">₹600
            <span className="  text-xs block  text-opacity-75 ">BUY</span>
          </button>
        </div>

        <div className="item pt-5 pb-5 pr-8 pl-8 hover:shadow-md border-t-2 xl:h-auto xl:flex-wrap xl:max-w-xxl xl:justify-center">
          
            <div className="image float-left w-16 h-16">
              <img src={logo4} alt="Net Meds" />
            </div>
            <div className="description ml-20 mt-5 w-16 cursor-pointer float-left xl:max-w-full">
              <span className="font-medium" >NetMeds</span>
            </div>
            <div className="quantity ml-20 float-left mt-3 xl:max-w-full xl:text-center">
              <div className="font-medium" >3 Day</div>
              <h6 style={{color: 'gray'}}>Delivery</h6>
            </div>
            <a className="next h-5 text-2xl ml-6 float-right mt-4 text-blue-700 cursor-pointer hover:text-5xl">❯</a>
            <button className="total-price float-right mt-3 h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800">₹622
              <span className="  text-xs block text-opacity-75  ">BUY</span>
            </button>
          </div>


          <div className="item pt-5 pb-5 pr-8 pl-8 hover:shadow-md border-t-2 xl:h-auto xl:flex-wrap xl:max-w-xxl xl:justify-center">
          
            <div className="image float-left w-16 h-16 ">
              <img src={logo5} alt="MedLife"  class=" rounded-md"/>
            </div>
            <div className="description ml-20 mt-5 w-16 cursor-pointer float-left
             xl:max-w-full ">
              <span className="font-medium" >MedLife</span>
            </div>
            <div class="quantity ml-20 float-left mt-3 xl:max-w-full xl:text-center">
              <div className="font-medium" >2 Day</div>
              <h6 style={{color: 'gray'}}>Delivery</h6>
            </div>
            <a class="next h-5 text-2xl ml-6 float-right mt-4 text-blue-700 cursor-pointer hover:text-5xl">❯</a>
            <button className="total-price float-right mt-3 h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800">₹622
              <span className="  text-xs block  text-opacity-75 ">BUY</span>
            </button>
          </div>

        </div>
            
    
        
    )
}

export default Shop
