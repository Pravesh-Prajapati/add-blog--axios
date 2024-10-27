import axios from 'axios'
import React from 'react'

function Category(props) {
  // console.log(props.categories);
  

  return (
    <>
      <div className='bg-slate-100'>
        <div className="container mx-auto">
          <div className='flex gap-7 p-5 items-center font-medium ' >
            <button className='font-bold text-xl' onClick={()=>{props.filtereddata("all")}}>All</button>
            {props.categories.map((val, i) => {
              return (
                <>
                  <div>
                    <div>
                      <button onClick={()=>{props.filtereddata(val)}}>{val.name}</button>
                    </div>
                  </div>
                </>
              )
            })
            }
          </div>
        </div>
      </div>

      {/* <div className='bg-slate-100'>
        <div className="container mx-auto">
          <div className='flex gap-7 p-5 items-center font-medium ' >
            <button className='font-bold text-xl' onClick={()=>{props.filtereddata("all")}}>Home</button>
            {props.categories.map((val, i) => {
              return (
                <>
                  <div>
                    <div>
                      <button onClick={()=>{props.filtereddata(val)}}>{val}</button>
                    </div>
                  </div>
                </>
              )
            })
            }
          </div>
        </div>
      </div> */}

    </>
  )
}

export default Category