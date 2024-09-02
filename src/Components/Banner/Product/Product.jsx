import React from 'react';
import { MdNotStarted } from "react-icons/md";

const Product = ({ data }) => {
    const { category, image, title } = data;

    return (
        <div className="product-card">
            <div className="card card-body px-2 border-0 rounded-1 h-100">
                <img src={image} alt={title} title={title} className="img-fluid " loading="lazy" />
                <div className="d-flex  align-items-center justify-content-center">
                    <div>
                        <h6 className='fs-16 m-0'>{title.length <= 10 ? title : title.slice(0, 8) + ".."}</h6>
                        <p className='m-0 fs-14'>{category.length <= 10 ? category : category.slice(0, 8) + ".."}</p>
                    </div>
                    <MdNotStarted size={20} className="primary-color" />
                </div>
            </div>
        </div>
    );
};

export default Product;
