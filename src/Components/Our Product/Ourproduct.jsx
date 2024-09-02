import React from 'react'

import { useSelector } from 'react-redux';
import ProductCard from './ProductCard/ProductCard';

const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]


const Ourproduct = () => {
    const products = useSelector((state) => state.Data.Products).slice(0, 10);

    return (
        <>
            <div className="container section our-product">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-9 col-md-6 col-6">
                                <h4>Our Products</h4>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6 ">
                                <input type="text" class="form-control " placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4 filter">
                        <div className="d-flex flex-wrap gap-3 align-items-center">
                            {
                                categories.map((e, index) => {
                                    return (
                                        <>
                                            <button className='px-3 py-2 rounded-5 text-capitalize  text-center' key={index} >{e}</button>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            {
                                products.map((e, index) => {
                                    return (
                                        <>
                                            <div className="col mb-4" key={e.id}>
                                                <ProductCard data={e} />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourproduct
