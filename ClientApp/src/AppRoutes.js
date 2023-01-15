import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItemsContainer";
import MovieImgArr from "./components/MovieImages";
import GameImgArr from "./components/GameImages";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/rank-movies',
        element: <RankItemsContainer dataType={0} imgArr={MovieImgArr} />
    },
    {
        path: '/rank-games',
        element: <RankItemsContainer dataType={1} imgArr={GameImgArr} />
    }
];

export default AppRoutes;
