import styles from '../styles/Presente.module.css'

export default function Presente() {
    return(
        <div>
            <div className={styles.presente}>
                <div className={styles.tampaP}></div>
                <div className={styles.corpoP}></div>
                <div className={styles.laco1P}></div>
                <div className={styles.laco2P}></div>
            </div>
            <div className={styles.presente}>
                <div className={styles.tampa}></div>
                <div className={styles.corpo}></div>
                <div className={styles.laco1}></div>
                <div className={styles.laco2}></div>
            </div>
        </div>
    )
}