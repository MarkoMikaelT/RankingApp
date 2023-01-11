import React, { useState, useEffect } from 'react'
import MovieImgArr from './MovieImages';


const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 0;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                //console.log(results.json());
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
        <main>
            <div className="items-not-ranked">
            {
                (items.length > 0) ? items.map((item) =>
                    /*<h3>{item.title}</h3>*/
                    <div className="unranked-cell">
                        <img id={`item-${item.id}`} src={MovieImgArr.find(i => i.id === item.id)?.image } />
                    </div>
                    ) : <div>Loading....</div>
            }
            </div>
        </main>    
    )
}
export default RankItems;