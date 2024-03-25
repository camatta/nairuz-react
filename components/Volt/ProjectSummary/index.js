import { useRef } from 'react'
import Image from 'next/image'
import { Link } from "react-scroll";

import styles from './project.summary.module.css'

import goal from '../../../public/volt/goal.webp'
import { useIsVisible } from '../../../hooks/useIsVisible'

const ProjectSummary = () => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <section className={`${styles.projectSummary} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={`container`}>
        <div className={styles.ProjectSummaryContent}>
          <h2>Jogando para <strong>ganhar!</strong></h2>
          <p>A Nairuz enfrentou desafios significativos ao gerenciar esses diversos projetos de e-commerce simultaneamente. Como jogadores em campo, a equipe de tecnologia teve que driblar entre entrega no prazo e qualidade do trabalho. Para isso, foi utilizado métricas como taxa de conversão e taxa de abandono de carrinho para avaliar o sucesso dos projetos. A integração com sócio torcedor via API e a harmonização entre Design UX/UI e Desenvolvimento foi uma jogada ensaiada.</p>
          <p>Além disso, a alocação eficiente de recursos e a gestão cuidadosa das prioridades foram essenciais para garantir o avanço eficiente em campo de todos os projetos. A comunicação dos capitães foi decisiva no sucesso da coordenação dos 13 projetos simultaneamente. Isso envolveu múltiplas empresas e garantiu a <strong>consistência da experiência do usuário.</strong></p>
          <p>Os desafios incluíram ajustar a quantidade de profissionais atuando nos projetos, projetar um único layout para atender a diferentes requisitos e integrar-se com diversas partes interessadas. Por isso, a empresa adotou uma abordagem estruturada, seguindo processos rigorosos ao manter uma comunicação clara para superar os obstáculos e alcançar o sucesso na gestão dos múltiplos e-commerces. <strong>E assim, a Nairuz marcou o gol da vitória!</strong></p>
          <Link to='formCase' smooth={true}>FALAR COM UM ESPECIALISTA</Link>
        </div>
      </div>

      <div className={styles.goalImage}>
        <Image src={goal} alt='Bola na rede' width={532} height={867} />
      </div>
    </section>
  )
}

export default ProjectSummary