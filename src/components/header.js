import { MdOutlineViewHeadline } from "react-icons/md";
import { CiPalette, CiSearch } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "~/styles/headerComponent.module.scss"
import { MdOutlineClear } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import useDebounce from "~/utils/useDebounce";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { config } from "~/router/config";
import Tooltip from "./ToolTip";
import TippyRender from "./tippyRender";
import ResultSearch from "./resultSearch";
import { useSideBar } from "~/context";


const cx = classNames.bind(styles);

function Header({setSmallSizeMode}) {
    const [isLoading,setIsloading] = useState(false)
    const [isClear,setIsClear] = useState(false)
    const [value,setValue] = useState("")
    const [listSearched,setListSearched] = useState([]) //
    const valueDebounce = useDebounce(value,1000)

    const modeSideBar = useSideBar(state=>state.toggleMode)

    useEffect(()=>{
        setListSearched([])
        if(value === ""){
            setIsloading(false)
            setIsClear(false)
        } 

        const id = setTimeout(()=>{
            setIsloading(false)
            setIsClear(true)

        },1000)
        return ()=>{
            clearTimeout(id)
        }
    },[valueDebounce])

    const handleChangeValue = (e)=>{
        setIsloading(true)
        setIsClear(false)
        setValue(e.target.value)
    }

    useEffect(()=>{
        const value = localStorage.search?JSON.parse(localStorage.search):[]
        const limit = 10
        const result = []
        if(value.length >= limit){
            for (let i = 0; i < limit; i++){
                result.push(value[i])
            }
        }
        else{
            value.forEach((item)=>{
                result.push(item)
            })
        }
        setListSearched(result)
    },[])


    return (
        <div className={cx("wrapper")} >
                <div className={cx('container','d-flex','justify-content-between','align-items-center')}>
                    <div className="d-flex">    
                        <button onClick={modeSideBar} className="fs-1 d-flex align-items-center bg-transparent"><MdOutlineViewHeadline /></button>
                        <Tooltip content="Trang chủ">
                            <Link to={config.home}><h1 className="ps-4">AnYTube</h1></Link>
                        </Tooltip>
                    </div>
                    <div className={cx("d-flex","contain-ip")}>
                        <div>
                            <Tippy
                                interactive={true}
                                visible={true}
                                placement="bottom-start"
                                offset={[0,5]}
                                render={(attrs) => {
                                    return listSearched.length?
                                        <TippyRender attrs={attrs}>
                                            {listSearched.map((item,index)=>{
                                                return <ResultSearch setListSearched={setListSearched} index={index} key={item+"-"+index} title={item}  />
                                            })}
                                        </TippyRender>:<></>
                                }}
                            >
                                <div className={cx("box-ip")}>
                                    <input type="text" value={value} onChange={handleChangeValue} placeholder="Tìm kiếm" />
                                    {isClear&&<button><MdOutlineClear /></button>}
                                    {isLoading && <button ><AiOutlineLoading3Quarters className={cx("loading")} /></button>}
                                </div>
                            </Tippy>
                        </div>
                        <button><CiSearch /></button>
                    </div>
                    <div className="d-flex align-items-center">
                        <Tooltip content="Tạo"><button className="fs-2 pe-4"><BsCameraVideo /></button></Tooltip>
                        <Tooltip content="Thông báo"><button className="fs-1 pe-4 ps-3"><IoNotificationsOutline /></button></Tooltip>
                        <div className="d-flex align-items-center ps-3">
                            <img src="" alt="avatar" />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Header;