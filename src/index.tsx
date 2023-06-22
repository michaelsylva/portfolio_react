import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PortfolioPage, {links} from './PortfolioPage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PalmCRM from "./components/PalmCRM";
import { MantineProvider } from '@mantine/core';
import {HeaderSimple} from "./components/header";
import PalmWebsite from "./components/PalmWebsite";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <PortfolioPage/>,
    },
    {
        path: "/projects/palm_crm",
        element: <PalmCRM/>
    },
    {
        path: '/projects/palm_website',
        element: <PalmWebsite/>
    }
]);

root.render(
  <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{
          fontFamily: 'Work Sans, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Work Sans, sans-serif' },
      }}>
      <RouterProvider router={router}/>
      </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
