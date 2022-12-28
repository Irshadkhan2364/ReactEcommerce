import React from 'react';
import './Category.scss';
import {Link} from 'react-router-dom'

const Category = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?
                auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                  <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?
                  auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?
                  auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link'>New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?
                  auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link'>Mens</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?
                  auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link'>Women</Link>
                </button>
                    </div>
                </div>
            </div>

            <div className="row">
            <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?
                  auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link'>Women</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Category
