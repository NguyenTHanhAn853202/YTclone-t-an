import { Routes,Route, } from "react-router-dom";
import {privatePath, publicPath, adminPath,config, pathNoLayout} from "./config";
import {Fragment, Suspense } from 'react'
import LayoutConfig from "./layoutConfig";

function Router() {
    
    return (
    <>
        <Routes>
            {publicPath.map((item,index)=>{
                const Page = item.Page
                return <Route key={index} path={item.path} element={<LayoutConfig path={item.path} configPath={pathNoLayout}><Page /></LayoutConfig>} />
            })}
            {privatePath.map((item, index)=>{
                const Page = item.Page
                return <Route key={index} path={item.path} element={<Suspense fallback={<div>loading...</div>}><Page /></Suspense>} />
            })}
        </Routes>
    </>
    );
}


export default Router;


