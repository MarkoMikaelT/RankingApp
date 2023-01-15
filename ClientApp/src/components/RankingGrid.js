
const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = []

    const topTier = []
    const neartopTier = []
    const middleTier = []
    const bottomTier = []
    const worstTier = []


    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            //console.log(items.find(k => k.rank === rankNum))
            var item = items.find(k => k.rank === rankNum)
            cellCollection.push(<div key={`rank-${rankNum}`} id={`rank-${rankNum}`} className="rank-cell" onDrop={drop} onDragOver={allowDrop} >
                {(item != null) ? <img key={`item-${item.id}`} id={`item-${item.id}`} src={imgArr.find(k => k.id === item.imageId)?.image} draggable="true" onDragStart={drag} />
                    : null}
            </div>);
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0
        var currTier = []
        var label = ""
        const numCells = 6

        for (var i = 1; i <= numCells; i++) {
            rankNum = (i === 1) ? 0 : (numCells * (rowNum - 1)) + i - rowNum

            switch (rowNum) {
                case 1:
                    currTier = topTier
                    label = "Top Tier"
                    break;
                case 2:
                    currTier = neartopTier
                    label = "Almost Top Tier"
                    break;
                case 3:
                    currTier = middleTier
                    label = "OK Tier"
                    break;
                case 4:
                    currTier = bottomTier
                    label = "OK. Tier"
                    break;
                case 5:
                    currTier = worstTier
                    label = "Never again Tier"
                    break;
            }
            pushCellMarkupToArr(currTier, rankNum, label)
            
        }
    }

    function createRowCells() {
        const maxRows = 5;
        for (var i = 1; i <= maxRows; i++) {
            createCellsForRow(i)
        }
    }

    function createGridRows() {
        rankingGrid.push(<div key={"topTier"} className="rank-row top-tier">{topTier}</div>)
        rankingGrid.push(<div key={"neartop"} className="rank-row neartop-tier">{neartopTier}</div>)
        rankingGrid.push(<div key={"middleTier"} className="rank-row middle-tier">{middleTier}</div>)
        rankingGrid.push(<div key={"bottomTier"} className="rank-row bottom-tier">{bottomTier}</div>)
        rankingGrid.push(<div key={"worstTier"} className="rank-row worst-tier">{worstTier}</div>)

        return rankingGrid
    }

    function createRankingGrid() {
        createRowCells()
        return createGridRows()
    }

    return (
        <div className="rankings" key={"ranking1"}>
            {createRankingGrid()}
        </div>    
    )

}
export default RankingGrid;