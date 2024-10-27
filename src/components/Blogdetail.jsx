import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Blogdetail() {
    let pos = useParams()
    const [leftdata, setleftdata] = useState([])
    const [leftdetail, setleftdetail] = useState([])
    const [singledetail, setsingledetail] = useState({})
    // console.log(pos);
    useEffect(() => {
        let singledata = axios.get("http://localhost:3000/blog/" + pos.id)
        singledata.then((res) => {
            setsingledetail(res.data)
            console.log(res.data);
        })

    }, [])

    useEffect(() => {
      let leftdata= axios.get("http://localhost:3000/blog?id !="+ !pos.id)
      leftdata.then((res)=>{
        console.log(res.data);
      })
    }, [setsingledetail])
    

    return (
        <>
            <div>
                <div className="container mx-auto">
                    <div className='flex justify-between items-center max-w-[900px] p-4'>
                        <Link to={"/"}>
                            <button className='text-3xl font-bold  text-blue-600'>&larr; Go Back</button>
                        </Link>
                        <h1 className='text-center font-bold text-4xl'>Blogs</h1>
                    </div>
                    <div className='flex'>
                        <div className='w-1/3 '>
                            <div className='m-3 rounded-lg'>
                                <div className='rounded-xl'>
                                    <img src={singledetail.img} className='' alt="" />
                                </div>
                            </div >
                        </div>
                        <div className='w-1/2'>
                            <div className='p-5 border-b-2 m-3'>
                                <h3 className='font-bold text-lg text-neutral-700'>{singledetail.title}</h3>
                                <h2 className='text-right mt-2'>{singledetail.description}</h2>
                            </div>
                            <div className='p-5'>
                                <p className=''>-- {singledetail.name}</p>
                            </div>
                        </div>
                    </div>
                </div>

             
            </div>
        </>
    )
}

export default Blogdetail