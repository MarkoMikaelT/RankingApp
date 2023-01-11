
const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = []

    const topTier = []
    const neartopTier = []
    const middleTier = []
    const bottomTier = []
    const worstTier = []


    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(k => k.ranking === rankNum)
            cellCollection.push(<div id={`rank-${rankNum}`} className="rank-cell" onDrop={drop} onDragOver={allowDrop} >
                {(item != null) ? <img id={`item-${item.id}`} src={imgArr.find(k => k.id === item.id)?.img} draggable="true" onDragStart={drag} />
                                : null}
            </div>)
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>)
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0
        var currTier = []
        var label = ""
        const numCells = 5

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
        rankingGrid.push(<div className="rank-row top-tier">{topTier}</div>)
        rankingGrid.push(<div className="rank-row neartop-tier">{neartopTier}</div>)
        rankingGrid.push(<div className="rank-row middle-tier">{middleTier}</div>)
        rankingGrid.push(<div className="rank-row bottom-tier">{bottomTier}</div>)
        rankingGrid.push(<div className="rank-row worst-tier">{worstTier}</div>)

        return rankingGrid
    }

    function createRankingGrid() {
        createRowCells()
        return createGridRows()
    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>    
    )

}
export default RankingGrid;