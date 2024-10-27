import React, { useEffect, useState } from 'react'
import Category from '../Category'
import axios from 'axios'
import Blog from '../Blog'

function Home() {
  const [data, setdata] = useState(["Entertainment", "Technology", "Sports", "Business", "Health", "Science"])
  const [category, setcategory] = useState([])
  let [blog, setblog] = useState([])


  useEffect(() => {
    blogdata()
  }, [])

  let blogdata = () => {
    let blogdata = axios.get("http://localhost:3000/blog")
    blogdata.then((res) => {
      // console.log(res.data);
      setblog(res.data)
    })
  }

  // let filterdata = async (val) => {
  //   console.log(val);
  //   if (val == "all") {
  //     blogdata()
  //   }
  //   else {
  //     let getdata = await axios.get("http://localhost:3000/blog?Category=" + val)
  //     setblog(getdata.data)
  //   }
  // }


  useEffect(() => {
    getcategory()
  }, [])
  let getcategory = () => {
    let categoryapi = axios.get("http://localhost:3000/category")
    categoryapi.then((res) => {
      // console.log(res.data);
      setcategory(res.data)
    })
  }

  // useEffect(() => {
  //   let getcategory= axios.get("http://localhost:3000/category")
  //   getcategory.then((res)=>{
  //     console.log(res.data);
  //   })
  // }, [])

  let filterdata = async (val) => {
    if (val == "all") {
      blogdata()
    }
    else {
      let blogdata = await axios.get("http://localhost:3000/blog?Category=" + val.name)
      console.log(blogdata.data);
      setblog(blogdata.data)
    }
  }


  return (
    <>
      {/* <Category categories={data} filtereddata={filterdata} /> */}
      <Category categories={category} filtereddata={filterdata} />
      <Blog blogdata={blog} />
    </>
  )
}

export default Home