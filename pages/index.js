
import Head from 'next/head'
import { Col, Row, Container } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.scss';
import HeroSlider from '../components/HeroSlider';
import Card from '../components/Card';
import CtaSection from './../components/CtaSection';
import PortfolioItem from '../components/PortfolioItem';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
//images
import marketing from '../public/marketing.png';
import web from '../public/web.png';
import branding from '../public/branding.png';

export default function Home() {
    return (
        <>
            <Head>
                <title>XENON Advertising</title>
            </Head>
            <Header />
            <Hero fullHeight overlay="gradient" withSlider />

            <section className="section text-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="7">
                            <HeroSlider />
                            <h4 className='mb-5'>XENON Advertising is an expanding global digital design company, with a big heart. Based in Dhaka, Bangladesh for more than 5 years, our highly skilled web designers specialize in handcrafted custom designed websites for clients who mean business.</h4>
                                <Link href="/"><a className='button mt-5'>Learn More About us</a></Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.cards}>
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <div className={styles.card_container}>
                                <Card icon={marketing} title="Digital Marketing" description="Fastest and easiest to reach your potential customers and expand your business throughout the world." prompt="See Pricing" link="/" />
                                <Card icon={web} title="Website &amp; Web Strategy" description="Web is the most essential component in twenty first century. This is as important as having an office for business." prompt="View More" link="/" />
                                <Card icon={branding} title="Branding" description="Branding is the face of your business. The first thing your audience will see is the look of your branding." prompt="See More" link="/" />
                            </div>
                            <Link href="/"><a className="button mt-5">All Services</a></Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <CtaSection className={styles.home_callback_cta}>
                <div className={`${styles.overlay} section`}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6} className='text-center'>
                                <h1 className="alt-heading">Interested to work with us?</h1>
                                <p className='mt-3'>We would be more than happy to help you on the long run of your business!</p>
                                <Link href="/"><a className="button white mt-5">Request Callback</a></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </CtaSection>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} className="text-center">
                            <h1 className="small-heading with-bar">Featured Projects</h1>
                            <p className="w-50 m-auto">Here are some projects from last 6 moths. Click the view more icon to see all the project completed so far.</p>
                            <div className={styles.portfolio_container}>
                                <PortfolioItem image="/project1.png" title="Notunotto" />
                                <PortfolioItem image="/project2.jpeg" title="Notunotto" />
                                <PortfolioItem image="/project3.jpeg" title="Notunotto" />
                                <PortfolioItem image="/project4.jpeg" title="Notunotto" />
                                <PortfolioItem image="/project5.jpeg" title="Notunotto" />
                                <PortfolioItem image="/project6.jpeg" title="Notunotto" />
                                <PortfolioItem image="/project7.jpeg" title="Notunotto" />
                                <PortfolioItem image="/project8.jpeg" title="Notunotto" />
                            </div>
                            <Link href="/"><a className="button mt-5">View All Projects</a></Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <VisibilitySensor partialVisibility offset={{top: 100}}>
                                <>
                                {({ isVisible }) => isVisible ? <CountUp end={1200} duration={1} startOnMount={false} /> : null}
                                </>
                            </VisibilitySensor>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
