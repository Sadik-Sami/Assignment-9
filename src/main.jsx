import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import Statistics from './components/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs.jsx'
import Blogs from './components/Blogs.jsx';
import JobDetails from './components/JobDetails.jsx';
import { appliedJobsLoader } from './loader/Loader.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/applyJobs.json'),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
        loader: appliedJobsLoader
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
