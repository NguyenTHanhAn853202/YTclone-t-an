import { useMemo } from "react";
import Card from "~/components/card";
import classNames from "classnames/bind";
import styles from '~/styles/homePage.module.scss'
import { Col, Container, Row } from "react-bootstrap";
import { useSideBar } from "~/context";

const cx = classNames.bind(styles)

function Home() {
    const mode = useSideBar(state=>state.mode)

    const arr = useMemo(()=>{
        const arrs = []
        for (let index = 0; index < 15; index++) {
            arrs.push(index)
        }
        return arrs
    },[])
    return ( 
        <div className={cx("wrapper")}>
            <h1>Đề Xuất</h1>
            {/* <div className={cx("contain-card")}> */}
            <Container fluid>
                <Row >
                {arr.map((item,index)=>(
                    <Col className="mt-5" xl={mode?4:3} md={mode?6:4} sm={mode?12:6} key={index}>
                        <Card owner={"Thanh an"} title={"vieo nayf dduaksnfkfn ansk jndaskn k  lsmios lasmd jn aksnd asjldkasl"} avatarUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s"} imageUrl={"http://localhost:3000/api/video/media/images/667d91cbea117c422b6be572.png"} views={50}  />
                    </Col>
                ))}
                </Row>
            </Container>
            {/* </div> */}
        </div> 
    );
}

export default Home;