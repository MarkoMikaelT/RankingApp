
const Item = ({ item, drag, imgObj }) => {
    return (
        <div key={`${item.id}`} className="unranked-cell">
            <img key={`${item.id}`} id={`item-${item.id}`} src={imgObj}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>
    )

}
export default Item;