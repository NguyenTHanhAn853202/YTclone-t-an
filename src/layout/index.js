import classNames from "classnames/bind"
import Header from "~/components/header";
import SideBar from "~/components/sideBar";
import styles from "~/styles/layoutPage.module.scss"

const cx = classNames.bind(styles)

function Layout({children}) {
    return (  
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <Header />
            </header>
            <main className="d-flex">
                <nav>   
                    <SideBar />
                </nav>
                <div>{children}</div>
            </main>
            <div className={cx("footer")}>
                <footer>footer</footer>
            </div>
        </div>
    );
}

export default Layout;