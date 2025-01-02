import React from 'react'
import FaqDetails from './FaqDetails';

const FAQ = () => {

    const faqs = [
        {
            id:'1',
            question:'What is DocAppointment?',
            desc:'Sasthya Seba is an online platform for integrated healthcare services, which is operated by Sasthya Seba Limited and used by doctors, patients, clinics and hospitals.'
        },
        {
            id:'2',
            question:'What Services do DocAppointment Provide?',
            desc:'Sasthya Seba is an online platform for integrated healthcare services, which is operated by Sasthya Seba Limited and used by doctors, patients, clinics and hospitals.'
        },
        {
            id:'3',
            question:'Do I need to register to avail services?',
            desc:'Yes, you need to be registered with us for availing any of our services. Generally you can browse our website or app, but to make any appointment or for placing any order you need to register first. Please resd our Terms And Conditions before you sign up!'
        },
        {
            id:'4',
            question:'How much is the service charge?',
            desc:'sasthyaseba.com is a platform for integrated healthcare services. Using our website for availing any service is free. You don not need to pay any subscription fee to use our website or App.'

        },
        {
            id:'5',
            question:'Do you have any refund policy?',
            desc:'Yes, we have a refund policy. Before claiming any refund, please read our Pation No Show Policy.'
        },
    ]


  return (
    <div className='p-5 md:p-[50px]'>
        <div>
        <h1 className='text-center text-3xl font-semibold pb-5'>Frequiently Ask Question</h1>
            {
                faqs.map((faq)=>(
                    <div key={faq.id} className=''>
                        <FaqDetails faq={faq} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQ