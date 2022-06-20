import React from "react";
import Card from "../components/Card";

const Cardlist = ({ robots }) => {
    // if (true) {
    //     throw new Error("Noooooo!!!!!") 
    // }

    const list = robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        )
    })

    return (
        <div>
            {list}
        </div>
    )
}
export default Cardlist;