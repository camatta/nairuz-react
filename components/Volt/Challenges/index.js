import { useRef } from 'react'

import styles from './challenges.module.css'

import { CHALLENGES } from './challenges'
import { useIsVisible } from '../../../hooks/useIsVisible'

const Challenges = () => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <section className={`${styles.challenges} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={`container`}>
        <div className={styles.challengesContent}>
          <h2>Entenda os maiores <strong>desafios</strong> desse projeto:</h2>
          
          <div className={styles.challengesList}>
            {CHALLENGES.map(({ Icon, description, id, title }) => (
              <div className={styles.challengeCard} key={id}>
                <div className={styles.challengeIcon}>
                  <Icon />
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Challenges