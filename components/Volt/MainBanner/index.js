import { useRef } from 'react'
import Image from 'next/image'


import styles from './main.banner.module.css'
import { useIsVisible } from '../../../hooks/useIsVisible'

import { ArrowDown } from '../../Icons'
import upperBall from '../../../public/volt/upper-ball.webp'
import hostMan from '../../../public/volt/narrador.webp'
import nNairuz from '../../../public/volt/n-nairuz.webp'

const MainBanner = () => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <section className={`${styles.bannerPrincipal} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={styles.upperBall}>
        <Image src={upperBall} alt='Bola' />
      </div>

      <div className={`container ${styles.bannerTexto}`}>
        <div className={styles.bannerTextoContext}>
          <h1><span>A</span> <span>Nairuz</span> <span>entrou</span> <span>em</span> <span>campo!</span></h1>
          <h2>2024 começou com a nossa escalação em <strong>super projeto</strong> em parceria com Volt e Spieler</h2>
          <button>
            <span>Saiba Mais</span>
            <ArrowDown />
          </button>
        </div>
      </div>

      <div className={`container ${styles.bannerStickers}`}>
        <div className={styles.hostAndMark}>
          <div className={styles.hostMan}>
            <Image src={hostMan} alt="Narrador com camisa Nairuz" width={645} height={645} />
          </div>

          <div className={styles.nNairuz}>
            <Image src={nNairuz} alt='N da Nairuz' width={827} height={390} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainBanner