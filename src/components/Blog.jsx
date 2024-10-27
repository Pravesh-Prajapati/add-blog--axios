import React from 'react'
import { Link } from 'react-router-dom';

function Blog(props) {
    // console.log(props.blogdata);
    return (
        <>
            <div>
                <div className="container mx-auto">
                    <div className='flex flex-wrap'>
                        {props.blogdata.map((val, i) => {
                            return (
                                <>
                                    <div className='w-1/4'>
                                        <Link to={"/blogdetail/" + val.id}>
                                            <div className='m-3 rounded-lg shadow-lg'>
                                                <div className='rounded-xl'>
                                                    <img src="https://picsum.photos/600/400/?1" alt="" />
                                                </div>
                                                <div className='p-5 border-b-2'>
                                                    <h3 className='font-bold text-lg text-neutral-700'>{val.title}</h3>
                                                    <h2 className='text-right mt-2'>{val.name}</h2>
                                                </div>
                                                <div className='p-5'>
                                                    <p className=''> {val.description.substring(0, 100)}
                                                        <Link to={"/blogdetail/" + val.id} className='text-blue-600'> ... Read More
                                                        </Link></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div >
                                </>
                            )
                        })

                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Blog