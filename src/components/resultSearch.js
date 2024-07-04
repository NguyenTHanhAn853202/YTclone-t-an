import classNames from "classnames/bind";
import styles from "~/styles/resultSearchComponent.module.scss"
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";



const cx = classNames.bind(styles);

function ResultSearch({title,onHandleEvent,index,setListSearched}) {

    const handleRemove = ()=>{
        setListSearched((props)=>{
            const newProps = [...props]
            newProps.splice(index,1)
            return newProps
        });
        const valueSearchs = JSON.parse(localStorage.search)
        valueSearchs.splice(index,1)
        localStorage.setItem('search',JSON.stringify(valueSearchs))
        
    }

    const hasTitle = useMemo(()=>{
        const listSearched = JSON.parse(localStorage.getItem('search'));
        return listSearched.find((item)=>item === title)
    },[])

    return (
        <div className={cx("wrapper","d-flex","align-items-center","justify-content-between","ps-4","pe-5")}>
            <div className="d-flex align-items-center">
                <span className="fs-1 me-3">{hasTitle?<PiClockCounterClockwiseLight />:<IoIosSearch />}</span>
                <h4>{title}</h4>
            </div>
            <span onClick={handleRemove}>Remove</span>
        </div>
    );
}

export default ResultSearch;