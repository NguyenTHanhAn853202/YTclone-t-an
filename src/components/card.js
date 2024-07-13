import styles from "~/styles/cardComponent.module.scss"
import classNames from "classnames/bind";
import { useEffect, useMemo } from "react";

const cx = classNames.bind(styles);

function Card({imageUrl,owner,avatarUrl,time=new Date("07,13,2024"),title,views}) {
   const duration = useMemo(()=>{
    const diffTime = (new Date() - time)/(1000*60)
    if(diffTime/(24*60) >=1){
        return `${Math.floor(diffTime/(24*60))} ngày`
    }
    if(diffTime/60 >=1){
        return `${Math.floor(diffTime/60)} giờ`
    }
    return `${Math.floor(diffTime)} phút`
   },[time])
    return (
        <div className={cx("wrapper")}>
            <img src={imageUrl} />
            <div className={cx("information")}>
                <div className="d-flex">
                    <img src={avatarUrl} />
                    <div className="ms-3">
                        <h4 className="fw-bold">{title}</h4>
                        <h4 className="mt-3">{owner}</h4>
                        <h5>{`${views} người xem - ${duration} trước`}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;