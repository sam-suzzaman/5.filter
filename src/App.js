import React, { useState } from "react";
import data from "./data";
import SingleItem from "./SingleItem";
import Menu from "./menu";

function App() {
    const [items, setItems] = useState(data);

    const handleFilterBtn = (targetCat) => {
        if (targetCat === "all") {
            setItems(data);
        } else {
            const newItems = data.filter(
                (value) => value.category === targetCat
            );
            setItems(newItems);
        }
    };

    return (
        <div className="container">
            <div className="wrapper">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Menu handleFilterBtn={handleFilterBtn} />
                <div className="content">
                    {items.map((value) => {
                        return <SingleItem key={value.id} {...value} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
