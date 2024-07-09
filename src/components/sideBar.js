import classNames from "classnames/bind";
import style from "~/styles/sideBarComponent.module.scss"
import { IoMdHome } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { config } from "~/router/config";
import { MdOutlineHistory } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineExpandMore,MdOutlineExpandLess } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";

const cx = classNames.bind(style);

const listCategoty = [
    {
        icon: <IoMdHome />,
        title:"Trang chủ",
        to:config.home
    },
    {
        icon: <AiOutlineFire />,
        title: "Trending",
        to:"/trending"
    },
    {
        icon: <MdOutlineSubscriptions />,
        title: "Kênh Đăng Ký",
        to:"/subscriptions"
    }
]

const listHistory = [
    {
        icon:<MdOutlineHistory  />,
        title: "Lịch sử",
        to:"/history"
    },
    {
        icon:<AiFillLike />,
        title: "Video đã thich",
        to:"/liked-videos"
    }
]

const subscrited = [
    {},{},{},{},{},{},{}
]
function SideBar() {
    const [isMoreSub, setIsMoreSub] = useState(false)
    const [newSub, setNewSub] = useState([])

    useEffect(()=>{
        let newSub = []
        const isLength = subscrited.length > 5
        if(isLength){
            for(let i=0; i<5;i++)
                newSub.push(subscrited[i])
        }
        else{
            newSub = [...subscrited]
        }
        setNewSub(newSub)
    },[])
    const isShowMore = useMemo(()=>{
        return subscrited.length > 5
    },[subscrited.length])

    const handleShowMoreSub = ()=>{
        setIsMoreSub(true)
        setNewSub(subscrited)
    }

    const handleShowLessSub = ()=>{
        setIsMoreSub(false)
        setNewSub((props)=>{
            const [one,two,three,four,five] = props 
            return [one,two,three,four,five]
        })
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("main-content")}>
                {listCategoty.map((item,index)=>
                    <NavLink to={item.to} className={(nav)=>cx(nav.isActive?"active":"","navigate")} key={index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                    </NavLink>
                )}
            </div>
            <div className={cx("history")}>
                {listHistory.map((item,index)=>(
                    <NavLink to={item.to} className={(nav)=>cx(nav.isActive?"active":"",'navigate')} key={index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                    </NavLink>
                ))}
            </div>
            <div className={cx("subscribed")}>
                {newSub.map((item,index)=>(
                    <NavLink to={"/thanh-an"} className={(nav)=>cx(nav.isActive?"active":"",'navigate')} key={index}>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s"} />
                        <h6>Nguyen Thanh An office</h6>
                    </NavLink>

                ))}
                {isShowMore && (isMoreSub?
                    <button onClick={handleShowLessSub} className={cx("navigate")}>
                        <span><MdOutlineExpandLess/></span>
                        <h6>Ẩn</h6>
                    </button>:
                    <button onClick={handleShowMoreSub} className={cx("navigate")}>
                    <span><MdOutlineExpandMore/></span>
                    <h6>Thêm</h6>
                    </button>
                )}
            </div>
        </div>
    );
}

export default SideBar;