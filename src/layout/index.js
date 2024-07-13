import classNames from "classnames/bind"
import { useEffect, useState } from "react";
import Header from "~/components/header";
import SideBar from "~/components/sideBar";
import { useSideBar } from "~/context";
import styles from "~/styles/layoutPage.module.scss"

const cx = classNames.bind(styles)

function Layout({children}) {
    const setMode = useSideBar(state=>state.setMode)
    const mode = useSideBar(state=>state.mode)
    useEffect(()=>{
        const handleEventResize = ()=>{
            const width = window.innerWidth
            if(width <=1300) setMode(false)
            // else setMode(true)   
        }
        window.addEventListener("resize", handleEventResize)
        return ()=>{
            window.removeEventListener("resize", handleEventResize)
        }
    },[])
    return (  
        <div className={cx("wrapper")}>
            <div>
                <header className={cx("header")}>
                    <Header />
                </header>
            </div>
            <main className="d-flex">
                <div >
                    <nav className={cx('side-bar',!mode?"small":"")}>   
                        <SideBar />
                    </nav>
                </div>
                <div className={`${mode?'ms-4':""} mb-5`}>{children}</div>
            </main>
            {/* <div className={cx("footer")}>
                <footer>footer</footer>
            </div> */}
        </div>
    );
}

export default Layout;