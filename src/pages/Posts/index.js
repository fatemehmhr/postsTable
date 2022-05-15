import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from 'antd';
import { data } from "../../requests/posts";





const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (text,record)=>{
      return(
            <img src={record.url} />
           )
    }
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'item',
  },
  

];

// const data = [
//   {
//     key:1,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:2,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:3,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:5,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:6,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:7,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:8,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:9,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
//   {
//     key:10,
//     productimage: 'https://img.icons8.com/dusk/2x/chart.png',
//     title:' jdjdjdjj'
//   },
    
  
// ];


export default function Posts(){
  const [dataItems,setDataItems] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

 const getData = async (limit) =>{
   setLoading(true);
   await data (limit)
   .then((response)=>{
     setDataItems(response.data);
     console.log(response);
   }).catch(()=>{
     console.log(error);
     setError(error.message);
   }).finally(()=>{
      setLoading(false);
   })
 }


//  useEffect(()=>{
//     getData(2);
//    },[])

  return(
    <div className="postItems">
      {data.map((item,index)=>{
          return (
            // <div className="posts" key={item.id}>
            //   <p>item={item.title}</p>
            //   <img  src={item.url}/>
            // </div>
            <Table  columns={columns} dataSource={()=>{getData(20)}}  key={item.id} />
          )
         
      })}
           

    </div>
    
    
  )
} 
