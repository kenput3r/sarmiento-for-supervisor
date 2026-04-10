/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from '../components/layout'
import { useAppContext } from '../components/context'

const lines = [
  {
    type: 'paragraph',
    text: {
      english:
        'Sarmiento for Supervisor FPPC ID# 1442960 is committed to protecting your privacy online. This Privacy Policy describes our obligations and practices of how we collect and use customer information through our website, applications, and other online services (collectively, our “Services”).',
      spanish:
        'Sarmiento for Supervisor FPPC ID# 1442960 se compromete a proteger su privacidad en línea. Esta Política de Privacidad describe nuestras obligaciones y prácticas de cómo recopilamos y usamos la información del cliente a través de nuestro sitio web, aplicaciones y otros servicios en línea (colectivamente, nuestros "Servicios").',
    },
  },
  {
    type: 'paragraph',
    text: {
      english:
        'This 10DLC & Toll-Free Privacy Policy applies to SMS and MMS texts from Sarmiento for Supervisor FPPC ID# 1442960.',
      spanish:
        'Esta Política de Privacidad de 10DLC y de Números Gratuitos se aplica a los mensajes SMS y MMS de Sarmiento para Supervisor FPPC ID# 1442960.',
    },
  },
  {
    type: 'title',
    text: {
      english: 'CATEGORIES OF INFORMATION COLLECTED:',
      spanish: 'CATEGORÍAS DE INFORMACIÓN RECOPILADA:',
    },
  },
  {
    type: 'paragraph',
    text: {
      english:
        'We will collect your name, phone number and indication of consent to receive text (SMS and MMS).',
      spanish:
        'Recopilaremos su nombre, número de teléfono e indicación de consentimiento para recibir mensajes de texto (SMS y MMS).',
    },
  },
  {
    type: 'title',
    text: {
      english: 'HOW WE USE THE INFORMATION COLLECTED:',
      spanish: 'CÓMO UTILIZAMOS LA INFORMACIÓN RECOPILADA:',
    },
  },
  {
    type: 'paragraph',
    text: {
      english:
        'In addition to providing the services and complying with our Privacy Policy, we use the information to confirm consent to receive text (SMS and MMS).',
      spanish:
        'Además de proporcionar los servicios y cumplir con nuestra Política de Privacidad, utilizamos la información para confirmar el consentimiento para recibir mensajes de texto (SMS y MMS).',
    },
  },
  {
    type: 'title',
    text: {
      english: 'TO WHOM DO WE SHARE THE INFORMATION COLLECTED:',
      spanish: '¿CON QUIÉN COMPARTIMOS LA INFORMACIÓN RECOPILADA?:',
    },
  },
  {
    type: 'paragraph',
    text: {
      english:
        'Text messaging originator opt-in data and consent will not be shared with any third parties, provided that the foregoing does not apply to sharing (1) with vendors, consultants and other service providers who need access to such information to carry out work on our behalf (and who will not use such information for their own purposes); (2) if we believe disclosure is required by any applicable law, rule, or regulation or to comply with law enforcement or legal process.',
      spanish:
        'Los datos de suscripción y consentimiento del remitente de mensajes de texto no se compartirán con terceros, siempre que lo anterior no se aplique a compartir (1) con proveedores, consultores y otros proveedores de servicios que necesiten acceso a dicha información para realizar trabajos en nuestro nombre (y que no utilizarán dicha información para sus propios fines); (2) si creemos que la divulgación es requerida por cualquier ley, norma o regulación aplicable o para cumplir con la aplicación de la ley o el proceso legal.',
    },
  },
  {
    type: 'paragraph',
    text: {
      english:
        'Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes.',
      spanish:
        'La información móvil no se compartirá con terceros/afiliados con fines de marketing/promocionales.',
    },
  },
  {
    type: 'paragraph',
    text: {
      english:
        'This Privacy Policy may be updated periodically and without prior notice to you to reflect changes in our information practices and applicable law. We suggest that you periodically review the Privacy Policy for amendments.',
      spanish:
        'Esta Política de Privacidad puede actualizarse periódicamente y sin previo aviso para reflejar cambios en nuestras prácticas de información y la ley aplicable. Sugerimos que revise periódicamente la Política de Privacidad para ver las enmiendas.',
    },
  },
]

function PrivacyPolicy() {
  const { language } = useAppContext()
  return (
    <Layout>
      <h1 className='font-bold text-center text-xl pt-10 pb-6'>
        {language === 'english' ? 'Privacy Policy' : 'Política de Privacidad'}
      </h1>
      <div className='flex flex-row flex-wrap mx-auto max-w-6xl'>
        {lines.map((el) => {
          if (el.type === 'title') {
            return (
              <h2
                className='font-bold text-lg p-3 uppercase'
                key={`${el.type}-${el.text[language].slice(0, 10)}`}
              >
                {el.text[language]}
              </h2>
            )
          }

          return (
            <p
              className='p-3 text-lg'
              key={`${el.type}-${el.text[language].slice(0, 10)}`}
            >
              {el.text[language]}
            </p>
          )
        })}
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
