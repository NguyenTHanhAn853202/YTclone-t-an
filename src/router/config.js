import { lazy } from "react"
const Login =  lazy(()=>import("~/pages/login.js"))
const NotFound = lazy(()=>import("~/pages/notFound"))
const Home = lazy(()=>import("~/pages/home"))

const config = {
    home:"/",
    login:"/login",
    register:"/register",
    notFound:"*"
}

const pathNoLayout = [
    config.login,
    config.register,
    config.notFound,
]

const publicPath = [
    {path:config.login,Page:Login},
    {path:config.notFound,Page:NotFound},
    {path:config.home,Page:Home},
]

const privatePath = []

const adminPath = []




export {privatePath, publicPath, adminPath,config,pathNoLayout}