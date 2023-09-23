import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrPage from './components/ErrPage/ErrPage';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Jobs from './components/Jobs/Jobs';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/applied_jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
