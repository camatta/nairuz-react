import { useRef } from 'react'
import Image from 'next/image'

import { useIsVisible } from '../../../hooks/useIsVisible'

import playersImage from '../../../public/volt/players.webp'
import voltLogo from '../../../public/volt/volt.svg'
import spielerLogo from '../../../public/volt/spieler.svg'

import middleBallImage from '../../../public/volt/middle-ball.webp'

import styles from './volt.spieler.module.css'

const VoltSpieler = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section className={`${styles.voltSpieler} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={styles.middleBall}>
        <Image src={middleBallImage} alt='Bola de futebol' width={229} height={229} />
      </div>

      <div className={`container`}>
        <div className={styles.voltSpielerContent}>
          <div className={styles.voltSpielerImage}>
            <Image src={playersImage} alt="Dois jogadores, um com camisa Volt e o outro com camisa Spieler Sports" width="587" height="587" />
          </div>

          <div className={styles.voltSpielerText}>
            <h2>Jogando para <strong>ganhar!</strong></h2>
            <p>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância</p>
            <div className={styles.voltSpielerLogos}>
              <div className={styles.voltLogo}>
                <Image src={voltLogo} alt='Volt' width={125} height={60} />
              </div>
              <div className={styles.spielerLogo}>
                <Image src={spielerLogo} alt='Spieler Sports' width={125} height={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoltSpieler