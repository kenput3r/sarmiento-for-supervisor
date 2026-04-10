/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import { useAppContext } from '../components/context'

const text = {
  title: {
    english: 'Mobile Terms of Service',
    spanish: 'Términos de Servicio Móvil',
  },
  lines: {
    english: [
      "Sarmiento for Supervisor FPPC ID# 1442960's mobile campaigns provide subscribers with updates, event invitations, donation asks, and voting reminders.",
      `You can cancel the SMS service at any time. Just text "STOP". After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.`,
      'If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at hello@scaletowin.com.',
      'Carriers are not liable for delayed or undelivered messages. T-Mobile is not liable for delayed or undelivered messages.',
      'You can expect to receive no more than 2 text message(s) per day from Sarmiento for Supervisor FPPC ID# 1442960.',
      'As always, message and data rates may apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.',
      'If you have any questions regarding privacy, please read our privacy policy:',
    ],
    spanish: [
      'Las campañas móviles de Sarmiento para Supervisor FPPC ID# 1442960 brindan a los suscriptores actualizaciones, invitaciones a eventos, solicitudes de donación y recordatorios de votación.',
      `Puede cancelar el servicio de SMS en cualquier momento. Simplemente envíe un mensaje de texto con "STOP". Después de esto, ya no recibirá mensajes SMS de nosotros. Si desea unirse nuevamente, simplemente regístrese como lo hizo la primera vez y comenzaremos a enviarle mensajes SMS nuevamente.`,
      'Si tiene problemas con el programa de mensajería, puede responder con la palabra clave HELP para obtener más ayuda, o puede obtener ayuda directamente en hello@scaletowin.com.',
      'Los operadores no son responsables de los mensajes retrasados o no entregados. T-Mobile no es responsable de los mensajes retrasados o no entregados.',
      'Puede esperar recibir no más de 2 mensajes de texto por día de Sarmiento para Supervisor FPPC ID# 1442960.',
      'Como siempre, pueden aplicarse tarifas de mensajes y datos para cualquier mensaje enviado a usted desde nosotros y de usted hacia nosotros. Si tiene alguna pregunta sobre su plan de mensajes o plan de datos, es mejor contactar a su proveedor de servicios inalámbricos.',
      'Si tiene alguna pregunta sobre privacidad, lea nuestra política de privacidad:',
    ],
  },
  privacyPolicy: {
    english: 'Privacy Policy',
    spanish: 'Política de Privacidad',
  },
}

function MobileTerms() {
  const { language } = useAppContext()
  return (
    <Layout>
      <h1 className='font-bold text-center text-xl pt-10 pb-6'>
        {text.title[language]}
      </h1>
      <div className='flex flex-row flex-wrap mx-auto max-w-6xl'>
        {text.lines[language].map((line, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index} className='p-3 text-lg'>
            {line}
            {index === text.lines[language].length - 1 && (
              <>
                {' '}
                <Link
                  href='/privacy-policy'
                  className='underline text-blue-500'
                >
                  {text.privacyPolicy[language]}
                </Link>
              </>
            )}
          </p>
        ))}
      </div>
    </Layout>
  )
}

export default MobileTerms
