import { Container, Row, Col } from "react-bootstrap";
import HeroSlider from "./HeroSlider";
import Video from "./Video";
const Hero = ( {fullHeight, overlay, withSlider} ) => {
    return (
        <>
            <section data-overlay={overlay} className={fullHeight ? 'hero full-height' : 'hero'}>
                <Video />
                <Container> 
                    <Row>
                        <Col md={12}>
                            {/* <div className="slider">
                                <h1>Grow Your Business</h1>
                                <h1>Turn Every Click Into Customers.</h1>
                                <h1>Target Ready-To-Purchase Buyers!</h1>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hero;