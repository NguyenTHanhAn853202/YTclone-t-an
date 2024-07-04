import classNames from "classnames/bind"
import styles from "~/styles/tippyRenderComponent.module.scss"

const cx = classNames.bind(styles)

function TippyRender({children,attrs,...props}) {
    return ( 
        <div {...attrs} tabIndex="-1" {...props} className={cx("wrapper")}>
            {children}
        </div>
     );
}

export default TippyRender;