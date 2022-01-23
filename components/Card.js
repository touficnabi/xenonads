import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Card.module.scss';

const Card = ({icon, title, description, prompt, link}) => {
    return (
        <Link href={link}>
            <a className={styles.card}>
                <div className={styles.card__inner}>
                    <div className={styles.icon}>
                        <Image src={icon.src} alt={title} width={icon.width} height={icon.height} />
                    </div>
                    <div className={styles.title}>
                        <h1>{title}</h1>
                    </div>
                    <span className={styles.bar}></span>
                    <div className={styles.description}>
                        <p>{description}</p>
                    </div>
                    <Link href={link}><a className='button solid black'>{prompt}</a></Link>
                </div>
            </a>
        </Link>
    )
}

export default Card;