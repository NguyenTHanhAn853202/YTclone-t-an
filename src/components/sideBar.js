import classNames from "classnames/bind";
import style from "~/styles/sideBarComponent.module.scss"
import { NavLink } from "react-router-dom";
import { MdOutlineExpandMore,MdOutlineExpandLess } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import {listCategory,listHistory,listSettings} from "~/utils/sideBarElement"
import { useSideBar } from "~/context";

const cx = classNames.bind(style);

const subscrited = [
    {},{},{},{},{},{},{}
]
function SideBar() {
    const [isMoreSub, setIsMoreSub] = useState(false)
    const [newSub, setNewSub] = useState([])
    const mode = useSideBar(state=>state.mode)

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
        <div className={cx("wrapper",!mode?"w-auto":"")}>
            <div className={cx("main-content",!mode?"border-0":"")}>
                {listCategory.map((item,index)=>
                    <NavLink to={item.to} className={(nav)=>cx(nav.isActive?"active":"","navigate",!mode?"small":"")} key={index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                    </NavLink>
                )}
            </div>
            {mode && <>
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
                <div className={cx("setting")}>
                    {listSettings.map((item, index) =>(
                        <NavLink to={item.to} className={(nav)=>cx(nav.isActive?"active":"",'navigate')} key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                        </NavLink>
                    ))}
                </div>
            </>
            }
        </div>
    );
}

export default SideBar;