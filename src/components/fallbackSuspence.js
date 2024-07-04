import classNames from "classnames/bind"
import style from  "~/styles/FallbackSuspenceComponent.module.scss"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const cx = classNames.bind(style)

function FallbackSuspence() {
    return (
        <div className={cx("wrapper","d-flex","justify-content-center","align-items-center")}>
            <span><AiOutlineLoading3Quarters /></span>
        </div>
    );
}

export default FallbackSuspence;