import React from "react";

const SingleItem = ({ id, title, category, price, img, desc }) => {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <div className="text">
                <header>
                    <h4>{title}</h4>
                    <h4>${price}</h4>
                </header>
                <p className="info">{desc}</p>
            </div>
        </div>
    );
};

export default SingleItem;
