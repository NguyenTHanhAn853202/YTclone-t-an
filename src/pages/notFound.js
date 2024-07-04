import classNames from "classnames/bind";
import styles from "~/styles/notfoundPage.module.scss"

const cx = classNames.bind(styles);
function NotFound() {
    return (  
        <div className="text-center pt-5">
            <h1>404</h1>
            <h1>Not Found</h1>
            <p className="text-danger">Không tìm thấy trang này vui lòng kiểm tra lại!</p>
        </div>
    );
}

export default NotFound;