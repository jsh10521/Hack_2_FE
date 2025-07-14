import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// 모든 페이지 컴포넌트를 가져옵니다.
import HomePage from '../src/Homepage';
import Signup from '../src/routes/signup';
import Login from '../src/routes/login';
import AllList from './routes/all_list'; // 전체 목록 페이지 import
import DetailList from './routes/detail_list'; // 상세 페이지 import

// 라우터 설정을 완성합니다.
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/all_list', // "See all" 페이지 경로 추가
        element: <AllList />,
    },
    {
        path: '/detail_list/:id', // 영화 상세 페이지 경로 추가
        element: <DetailList />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
