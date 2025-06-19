import { createHashRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import { client } from "./asyncFns/AsyncCollection";
import fetchShows from "./asyncFns/AsyncCollection";

const routes = createHashRouter([
    {
        path: '/', element: <Root />, children: [
            { index: true, element: <Home />, },
            {
                path: 'shows/:id/:page', element: <Shows />, loader: async () => {
                    const shows = await client.fetchQuery({
                        queryKey: ['shows'],
                        queryFn: fetchShows
                    })
                    return shows
                }
            }
        ]
    },
    {
        path: '/login', element: <Signin />, action: async ({ request }) => {
            const formData = await request.formData()
            console.log(formData)
            return null
        }
    },
    { path: '/register/:show/:step', element: <Register /> },
    { path: '/profile', element: <Profile /> },

])
export default routes