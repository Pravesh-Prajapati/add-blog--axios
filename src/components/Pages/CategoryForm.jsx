// import axios from 'axios'
// import React, { useState } from 'react'

// function CategoryForm() {
//     let [categorydata, setcategorydata] = useState({})
//     let setinput = (e) => {
//         let { name, value } = e.target
//         setcategorydata({ ...categorydata, [name]: value })
//     }
//     let submit = async(e) => {
//         e.preventDefault()
//         console.log(categorydata);
//         let result=  await axios.post("http://localhost:3000/category",categorydata)
//         console.log(result);
//         setTimeout(() => {
//             window.location='/form'
//         }, 1000);
//     }
//     return (
//         <>
//             <div class="container mx-auto px-4 h-full mt-4">
//                 <form action="" method='post' onSubmit={(e) => { submit(e) }} className='text-center'>
//                     <div class="flex items-center justify-center h-full w-full">
//                         <select required onChange={(e) => { setinput(e) }} name='name'
//                             className="text-black border-2 border-gray-800 bg-white px-3 py-2 transition-all cursor-pointer hover:border-black rounded-lg outline-blue-600/50 invalid:text-black w-64">
//                             <option value="" disabled selected>Select Category</option>
//                             <option value="Entertainment">Entertainment</option>
//                             <option value="Technology">Technology</option>
//                             <option value="Sports">Sports</option>
//                             <option value="Business">Business</option>
//                             <option value="Health">Health</option>
//                             <option value="Science">Science</option>
//                         </select>
//                     </div>
//                     <button type='submit' className='text-center mx-auto bg-blue-700 text-white px-3 py-2 m-4 rounded'>Submit</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default CategoryForm