import React from 'react';
import { Main } from './main';


let App = () => { 
  return (
    <>
      <div className='shadow  rounded-3' >
        <h1 className='text-danger text-center p-2 text-uppercase font-monospace' onClick={() => { window.location.reload() }}>the root of any number</h1>
        <h6 className='text-light text-center p-2 font-monospace'>this app calc root of any number using taylor series the more bigger number you put on the secend input the more accurate the resulte  </h6>
      </div>
      <div  className='h-100 d-flex justify-content-center align-items-center bg-dark '>
        <div className='shadow h-75 w-75 rounded-5 d-flex flex-wrap justify-content-center  align-content-around '>
          <div className='h-25 w-75 bg-dark rounded-5 border-top border-danger  d-flex justify-content-center align-items-center shadow'>
            <input type="number" min={0} id="typeText" className=" form-control bg-dark border border-danger h-50 w-75 text-danger text-center font-monospace shadow-lg text-uppercase" placeholder="WRITE number DOWN HERE !! " />
          </div>
          <div className='w-75 d-flex align-items-center justify-content-around '>
          <input defaultValue={10000000000}  type="number"  id="test" className=" form-control bg-dark border border-danger h-100 w-25 text-danger text-center font-monospace shadow-lg text-uppercase" placeholder="wait...." />
            <button type="submit" className='btn btn-outline-danger shadow text-uppercase font-monospace' onClick={() => {Main()}}>
            calc
            </button>

            
            </div>
          <div className='h-25 w-75 bg-dark rounded-5 d-flex justify-content-center align-items-center shadow border-bottom border-danger '>
          <input disabled type="number"  id="test" className=" form-control bg-dark border border-danger h-50 w-75 text-danger text-center font-monospace shadow-lg text-uppercase" placeholder="wait...." />

        </div>
        </div>
      </div>
    </>
  )
}
export default App;
