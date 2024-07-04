import classNames from "classnames/bind"
import Header from "~/components/header";
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
                    side bar
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