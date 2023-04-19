import styles from '../styles/Baner.module.css'

export const Baner = () => {
    return (
        <nav className={styles.nav}>
            <td>
                <h1 className={styles.h1}>PARCIAL 2</h1>
            </td>
            <td>
                <tr>
                    <h2 className={styles.h2}>
                        Nombre: Juan José Saavedra Realpe
                    </h2>
                </tr>
                <tr>
                    <h2 className={styles.h2}>
                        Código: 2210120
                    </h2>
                </tr>
            </td>

        </nav>
    );
}