import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import VideoPage from './components/VideoPage.tsx';
import ChannelPage from './components/ChannelPage.tsx';
import SearchPage from './components/SearchPage.tsx';
import NavBar from './components/NavBar.tsx';
import Feed from './components/Feed.tsx';


const App: FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Feed />
            }
        ]
    },
    {
        path: '/video/:id',
        element: <VideoPage />
    },
    {
        path: '/channel/:id',
        element: <ChannelPage />
    },
    {
        path: '/search/:searchTerm',
        element: <SearchPage />
    }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
)
