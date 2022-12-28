import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/list/List';
import './Products.scss'

const Products = () => {
  const catId =parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort,setSort]=useState(null)
  const Checkbox =[
    {
      id:1,
      title:"Shoes",
      value:1,
    },
    {
      id:2,
      title:"Skart",
      value:2,
    },
    {
      id:3,
      title:"Shirt",
      value:3,
    },
    {
      id:4,
      title:"t-shirt",
      value:4,
    },
    {
      id:5,
      title:"Hoodi",
      value:5,
    },
  ]
  return (
    <div className='products'>
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
           {Checkbox.map(items=>
             <div className="inputItem">
             <input type="checkbox" id={items.id} value={items.value}/>
             <label htmlFor={items.id}>{items.title}</label>
           </div>
           )}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input type="radio" value="asc" id="asc" name="price" onChange={(e)=>setSort('asc')}/>
              <label htmlFor="asc">Price (Lowest First)</label>
            </div>
            <div className="inputItem">
              <input type="radio" value="desc" id="desc" name="price" onChange={(e)=>setSort('desc')}/>
              <label htmlFor="desc">Price (High First)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="https://images.pexels.com/photos/14489134/pexels-photo-14489134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='catImg' />
         <div>
            <List catId={catId} maxPrice={maxPrice} sort={sort}/>
         </div>   
        </div>
    </div>
  )
}

export default Products
