import React, { useState, useEffect } from 'react'

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
            {
                (items.length > 0) ? items.map((item) => <h3>{item.title}</h3>) : <div>Loading....</div>
            }
            
        </main>    
    )
}
export default RankItems;