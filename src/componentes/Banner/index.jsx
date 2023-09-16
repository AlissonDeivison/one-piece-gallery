import banner from "./banner.png"

import styles from "./Banner.module.scss"

export default function Banner() {

    return (

        <div className={styles.principal__imagem}>
            <h1>A galeria mais completa East Blue</h1>
            <img src={banner} alt="Imagem da terra vista do espaço" />
        </div>
    )

}