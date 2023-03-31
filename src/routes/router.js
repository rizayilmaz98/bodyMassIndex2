import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import BMIPage from "../pages/BMIPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/result",
        element:<Result/>
    },
    {
        path:"/bmi",
        element:<BMIPage/>
    }
    
])

export default router;