import Image from 'next/image';
import styles from '../styles/Portfolio.module.scss';

const PortfolioItem = ({image, title}) => {
    return(
        <>
            <div className={styles.project_item}>
                <Image src={typeof image === "object" ? image.src : image} alt={title} layout="responsive" width={270} height={190} />
            </div>
        </>
    );
}

export default PortfolioItem;