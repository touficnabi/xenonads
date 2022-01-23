import { Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import Logo from './Logo';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';

const Header = () => {
    const header = useRef(null);
    const logo = useRef(null);

    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            console.log('colllin')
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scrolled ) setScrolled(scrollCheck)
        })

        return () => {
            false;
        }
    }, [scrolled])

    return (
        <>
            <div className="very-top"></div>
            <header ref={header} className={scrolled ? 'solid' : ''}>
                <Container>
                    <Row>
                        <Col md={12} className="flex header-wrapper">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <Logo ref={logo} color={scrolled? 'black' : 'white'} />
                                    </a>
                                </Link>
                            </div>
                            <div className="nav" >
                                <ul className="site-nav flex">
                                    <li className="site-nav__item">
                                        <Link href="/"><a>Home</a></Link>
                                    </li>
                                    <li className="site-nav__item">
                                        <Link href="/"><a>About</a></Link>
                                    </li>
                                    <li className="site-nav__item">
                                        <Link href="/"><a>Case Studies</a></Link>
                                    </li>
                                    <li className="site-nav__item">
                                        <Link href="/"><a>Services</a></Link>
                                    </li>
                                    <li className="site-nav__item">
                                        <Link href="/"><a>Blog</a></Link>
                                    </li>
                                    <li className="site-nav__item">
                                        <Link href="/"><a>Contact</a></Link>
                                    </li>
                                </ul>
                                <button className={scrolled? 'button header-callback' : 'button white header-callback'}>Request Callback</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header;