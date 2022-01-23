import { useEffect, useState } from "react";

const HeroSlider = () => {
    const texts = ['Grow your business!', 'Turn every click', 'Target ready'];
    const [slideActive, setSlideActive] = useState(0);

    useEffect(() => {
        const int = setInterval(() => {
            setSlideActive(slideActive + 1)
        }, 800)
        return () => {
            return false
        }
    }, [])

    return(
        <div className="hero_slider">
            <div className="hero_slider__inner">
               
            </div>
        </div>
    )
}

export default HeroSlider;