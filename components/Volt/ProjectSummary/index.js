import Image from 'next/image'

import styles from './project.summary.module.css'

import goal from '../../../public/volt/goal.webp'
import { useRef } from 'react'
import { useIsVisible } from '../../../hooks/useIsVisible'

const ProjectSummary = () => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <section className={`${styles.projectSummary} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={`container`}>
        <div className={styles.ProjectSummaryContent}>
          <h2>Jogando para <strong>ganhar!</strong></h2>
          <p>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância.</p>
          <p>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância</p>
          <button type='button'>FALAR COM UM ESPECIALISTA</button>
        </div>
      </div>

      <div className={styles.goalImage}>
        <Image src={goal} alt='Bola na rede' width={532} height={867} loading='lazy' />
      </div>
    </section>
  )
}

export default ProjectSummary