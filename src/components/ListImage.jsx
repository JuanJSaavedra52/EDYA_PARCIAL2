import { GetImagenes } from "./GetImagenes"
import styles from '../styles/Lista.module.css'

export const ListImage = () => {
    return (
        <div>
            <p className={styles.p}>Imagenes:</p>
            <li className={styles.li}>
                <span>
                    <GetImagenes />
                </span>

            </li>
        </div>
    )
}