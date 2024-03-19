import { useRef } from 'react'
import Script from 'next/script'

import styles from './form.case.module.css'
import { useIsVisible } from '../../../hooks/useIsVisible'

const FormCase = () => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <section className={`${styles.formCase} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={`container`}>
        <div className={styles.formCaseContent}>
          <h2>Transforme seu negócio em um <strong>case de sucesso!</strong></h2>

          <div className={styles.formCaseArea}>
            <h3>Preencha o formulário e fale com de nossos <strong>especialistas</strong></h3>
            
            <div role="main" id="formulario-case-volt-spieler-0602c6b88900310b04d5"></div>
            <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
            <Script type="text/javascript" strategy='lazyOnload'>
              {`
              if(window?.RDStationForms) {
                new RDStationForms('formulario-case-volt-spieler-0602c6b88900310b04d5', 'UA-48773259-1').createForm()
              }
              `}
            </Script>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormCase