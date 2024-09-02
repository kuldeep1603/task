import React from 'react';
import "./Banner.css";

// Redux
import { useSelector } from 'react-redux';
import Product from './Product/Product';

const Banner_img = "../img/banner-new.png";

const Banner = () => {
    // Redux get data 
    const products = useSelector((state) => state.Data.Products).slice(0, 4);

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-5">
                    <img src={Banner_img} alt="banner" title="banner" className="img-fluid" loading="lazy" />
                </div>
                <div className="col-lg-7 mt-3">
                    <h1 className="text-capitalize banner-text">Discover the latest <br className='d-lg-block d-none'></br> Trends in fashion ecommerce</h1>
                    <p className="fs-16">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus minima, provident nemo error ut beatae aliquid sapiente aspernatur dolore repellat porro cumque ratione sed.
                    </p>
                    <button type="button" className="btn btn-primary px-4 py-2 text-center">Shop Now</button>
                    <div className="row mt-4">
                        {
                            products.map((e) => (
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3" key={e.id}>
                                    <Product data={e} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
