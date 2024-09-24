
import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from 'react'
const Home = lazy(() => import('@/pages/home/home'));
const Record = lazy(() => import('@/pages/record/record'));
const HelpCenter = lazy(() => import('@/pages/helpcenter/helpcenter'));
const Production = lazy(() => import('@/pages/production/production'));
const Balance = lazy(() => import('@/pages/balance/balance'));

// 使用了 Routes 和 Route 组件来配置路由
// 使用 lazy 函数来实现组件的懒加载，以提高应用的性能
const RouteConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/record" element={<Record/>}/>
            <Route path="/helpcenter" element={<HelpCenter/>}/>
            <Route path="/production" element={<Production/>}/>
            <Route path="/balance" element={<Balance/>}/>

        </Routes>
    )
}

export default RouteConfig