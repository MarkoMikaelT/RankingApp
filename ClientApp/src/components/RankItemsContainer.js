import { useState } from 'react'
import RankItems from './RankItems'

const RankItemsContainer = ({ dataType, imgArr }) => {

    const movieLocalStrKey = "movies"
    const gameLocalStrKey = "games"

    var localStorageKey = ""

    const [movieItems, setMovieItems] = useState(JSON.parse(localStorage.getItem(movieLocalStrKey)))
    const [gameItems, setGameItems] = useState(JSON.parse(localStorage.getItem(gameLocalStrKey)))

    var data = []
    var setFunc = null

    switch (dataType) {
        case 0:
            data = movieItems
            setFunc = setMovieItems
            localStorageKey = movieLocalStrKey
            break
        case 1:
            data = gameItems
            setFunc = setGameItems
            localStorageKey = gameLocalStrKey
            break
    }

    return (
        <RankItems items={data} setItems={setFunc} dataType={dataType}
                    imgArr={imgArr} localStorageKey={localStorageKey}>
        </RankItems>
    )
}
export default RankItemsContainer