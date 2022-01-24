import { Parallax } from "react-parallax";

const CtaSection = ({children, className, image}) => {
    return (
        <div className={className}>
            <Parallax bgImage="./xenon-advertising-bg-3.jpeg" className="foii" strength={340} renderLayer={percentage => ( <div data-percentage={percentage} /> )}>
                {children}
            </Parallax>
        </div>
    )
}

export default CtaSection;