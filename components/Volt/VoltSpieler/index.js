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
    <section className={`${styles.voltSpieler} ${isVisible ? styles.animate : ''}`} ref={ref} id='VoltSpieler'>
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
            <p>A Volt Sport é um talento emergente nos negócios esportivos brasileiros. Com estilo arrojado e técnica refinada, oferece produtos de alta qualidade e inovação. Em apenas dois anos, já veste 9 clubes, ganhando a torcida por seus materiais de elite e designs inovadores. Produzindo 2 milhões de peças anualmente, planeja expandir-se ainda mais.</p>
            <p>Já a Spieler Sports é uma veterana nos campos do mercado nacional. Com um jogo focado na precisão, tecnologia e entrega de primeira linha, ela veste o esporte amador com a excelência dos profissionais, oferecendo preços competitivos e materiais de primeira categoria. Sua busca incansável por inovação é um chute certeiro que reflete sua paixão pelo esporte e satisfação do cliente.</p>
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