import React from "react";
import data from "./data";

// creating an array of buttons category
const categoryArr = data.map((value) => value.category);
// removing repeated categories and it will return an object
const filterArr = new Set(categoryArr);
// convert the object into an array
const catArr = ["all", ...filterArr];

const Menu = ({ handleFilterBtn }) => {
    return (
        <nav className="menu">
            {catArr.map((value, index) => {
                return (
                    <button
                        className="btn"
                        key={index}
                        onClick={() => handleFilterBtn(value)}
                    >
                        {value}
                    </button>
                );
            })}
        </nav>
    );
};
export default Menu;
