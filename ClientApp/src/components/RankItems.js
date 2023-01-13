import React, { useState, useEffect } from 'react'
import MovieImgArr from './MovieImages'
import RankingGrid from './RankingGrid'
import ItemCollection from './ItemCollection'

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 0;

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {

        ev.preventDefault();
        const targetElm = ev.target;
        if (targetElm.nodeName === "IMG") {
            return false;
        }
        if (targetElm.childNodes.length === 0) {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
            { ...item, rank: parseInt(targetElm.id.substring(5)) } : { ...item, rank: item.rank });
            setItems(transformedCollection);
        }
    }

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
            <RankingGrid items={items} imgArr={MovieImgArr} drag={drag} allowDrop={allowDrop} drop={drop} />
            <ItemCollection items={items} drag={drag} imgArr={MovieImgArr}/>
            
        </main>    
    )
}
export default RankItems;