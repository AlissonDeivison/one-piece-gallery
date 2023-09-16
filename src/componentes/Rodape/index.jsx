import FbIcone from "./icones/facebook.svg";
import InstaIcone from "./icones/instagram.svg";
import TwIcone from "./icones/twitter.svg";

import styles from "./Rodape.module.scss"

export default function Rodape() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__div}>
                <img className={styles.footer__img} src={FbIcone} alt="Ícone do Facebook" />
                <img className={styles.footer__img} src={TwIcone} alt="Ícone do Twitter" />
                <img className={styles.footer__img} src={InstaIcone} alt="Ícone do Instagram" />
            </div>
            <div className={styles.footer__div}>
                <p className={styles.footer__p}>Desenvolvido por Alisson</p>
            </div>
        </footer>
    )
}