import React from 'react';
import "./ProductCard.css";
const ProductCard = ({ data }) => {
    const { price, image, title } = data;

    return (
        <>
            <div className="our-product">
                <div className="card h-100 card-body  border-0 rounded-2 h-100">
                    <img src={image} alt={title} title={title} className="img-fluid p-3" loading="lazy" />
                </div>
                <div className="d-flex mt-2 justify-content-between  align-items-center">
                    <h6 className='fs-16 m-0'>{title.length <= 10 ? title : title.slice(0, 10) + ".."}</h6>
                    <b>$ {price}</b>
                </div>
            </div>
        </>
    )
}

export default ProductCard
