import React, { useState, useEffect } from 'react'
import MovieImgArr from './MovieImages'
import RankingGrid from './RankingGrid'


const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 0;

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id)
    }

    function allowDrop(ev) {
        ev.preventDefault()
    }

    function drop(ev) {
        ev.preventDefault();
        const targetElm = ev.target
        if (targetElm.nodeName === "IMG") {
            return false;
        }
        if (targetElm.childNodes.length === 0) {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5))
            const transformedRow = items.map((item) => (item.id === parseInt(data)) ?
                { ...item, rank: parseInt(targetElm.id.substring(5)) } : {...item, rank: item-rank})
            setItems(transformedRow)
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
            <div className="items-not-ranked">
            {
                (items.length > 0) ? items.map((item) =>
                    /*<h3>{item.title}</h3>*/
                    <div className="unranked-cell">
                        <img id={`item-${item.id}`} src={MovieImgArr.find(i => i.id === item.id)?.image}
                            style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
                        />
                    </div>
                    ) : <div>Loading....</div>
            }
            </div>
        </main>    
    )
}
export default RankItems;