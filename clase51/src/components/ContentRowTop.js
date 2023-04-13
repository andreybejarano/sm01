import React from "react";

import SmallCard from "./SmallCard";

const cardsData = [
    {
        title: 'Peliculas en base de datos',
        value: 21,
        color: 'primary',
        icon: 'fa-film'
    },
    {
        title: 'Total awards',
        value: 79,
        color: 'success',
        icon: 'fa-award'
    },
    {
        title: 'Actors quantity',
        value: 49,
        color: 'warning',
        icon: 'fa-user'
    }
];

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <div className="row">
                {cardsData.map((element, index) => 
                    <SmallCard 
                        key={index} 
                        title={element.title} 
                        value={element.value} 
                        icon={element.icon} 
                        color={element.color}
                    />
                )}
            </div>
            {/* <!-- End movies in Data Base --> */}
        </div>
    );
}

export default ContentRowTop;