import React from 'react'
import'./List.scss';
import Card from '../feartreprodct/Card';

function List() {
    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long sleeve grapgic t-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long sleeve grapgic shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long sleeve grapgic hoodi",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long sleev t-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        }
    ]
  return (
    <div className='list'>
        {data?.map(item=>(
           <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List
