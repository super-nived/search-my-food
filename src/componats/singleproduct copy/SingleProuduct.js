import React from 'react'
import './SingleProduct.css'
import PIC from './search.png'
import { Link } from 'react-router-dom'
function SingleProuduct({data,index}) {
  return (
    <div>
      <div className="col hp">
        <div className="card h-100 shadow-sm">
          <a  >
            <img src={data.foodImage ? data.foodImage :PIC} className="card-img-top " alt="product.image" />
          </a>

          <div className="label-top shadow-sm">
          <Link to='sponser'> <a className="text-white" target="_blank" href="#">{data.sponserName}</a></Link> 
          </div>
          <div className="card-body">
            <div className="clearfix mb-3">
              <span className="float-start badge rounded-pill text-white bg-success">{data.drug}</span>

              <span className="float-end"><a  className="small  text-uppercase aff-link" style={{color:'black'}}>{data.price?data.price:'free'}</a></span>
            </div>
            <h5 className="card-title">
              <a target="_blank" className='text-center' href="#"><b>@{data.area? data.area:'area'} </b>#{data.district ? data.district :'district'}({data.detail.slice(0,50)})</a>
            </h5>

            <div className="d-grid gap-2 ">
              <a href="#" className="btn bg-success  text-white bold-btn py-2 px-0">Visit Page</a>
            </div>
            <div className="clearfix mb-1">
              <span className="float-start"><a href="#"><i className="fas fa-question-circle"></i></a></span>
              <span className="float-end">
                <i className="far fa-heart" style={{ cursor: 'pointer' }}>{data.visit ? data.visit:0}</i>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SingleProuduct