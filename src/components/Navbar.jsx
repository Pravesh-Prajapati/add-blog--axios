import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                <div className="nav bg-black text-white p-6 flex items-center justify-between">
                    <Link to={"/"} className='text-4xl'>
                        News Geek
                    </Link>
                    <div>
                        <Link to={"categoryform"} >
                            <button className='bg-blue-500 px-2 py-1 mx-2 rounded-md'>Add Category</button>
                        </Link>
                        <Link to={"/form"}>
                            <button className='bg-blue-500 px-2 py-1 mx-2 rounded-md'>Add Blog</button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar