import React, { useRef } from 'react'
import Image from 'next/image'

import { useIsVisible } from '../../../hooks/useIsVisible'
import styles from './projects.module.css'

import leftPlayer from '../../../public/volt/player-to-the-right.webp'
import rightPlayer from '../../../public/volt/player-to-the-left.webp'
import bottomBall from '../../../public/volt/bottom-ball.webp'

import { CLUBS } from './clubs'

const Projects = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref)

  return (
    <section className={`${styles.projects} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={`container`}>
        <div className={styles.projectsContent}>
          <h2>Confira na íntegra os 13 projetos que fazem parte desse <strong>case incrível!</strong></h2>

          <div className={styles.licensedClubs}>
            {CLUBS.map(({ id, logo, siteUrl }) => (
              <React.Fragment key={id}>
              {siteUrl != '' ? (
                <a className={`${styles.clubCard} ${styles.unlocked}`} href={siteUrl} title='Conhecer loja' target='_blank' rel='noreferrer'>
                  <div className={styles.clubLogo}>
                    <Image src={logo} />
                  </div>
                  <p>Conhecer loja</p>
                </a>
              ) : (
                <div className={`${styles.clubCard} ${styles.lockedClub}`}>
                  <div className={styles.clubLogo}>
                    <span>Clube</span>
                    <strong>Bloqueado</strong>
                  </div>
                  <p>Loja bloqueada</p>
                </div>
              )}
            </React.Fragment>
            ))}
          </div>

          <div className={styles.unlicensedClubs}>
            <div className={`${styles.clubCard} ${styles.lockedClub}`}>
              <div className={styles.clubLogo}>
                <Image src={leftPlayer} width={51} height={93} alt='Desenho de jogador realizado drible' />
              </div>
              <p>Loja bloqueada</p>
            </div>

            <div className={`${styles.clubCard} ${styles.lockedClub}`}>
              <div className={styles.clubLogo}>
                <Image src={rightPlayer} width={53} height={101} alt='Desenho de jogador realizado drible' />
              </div>
              <p>Loja bloqueada</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectsBall}>
        <Image src={bottomBall} alt='Bola de futebol' width={238} height={233} loading='lazy' />
      </div>
    </section>
  )
}

export default Projects