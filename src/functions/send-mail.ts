'use server'

import { Resend } from 'resend'

import {
  ContactEmailTemplate,
  IContactMailTemplate,
} from '~/components/contact-mail-template'

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(formData: IContactMailTemplate) {
  try {
    const { error } = await resend.emails.send({
      from: 'Alex Paris (by Resend) <onboarding@resend.dev>',
      to: ['mister.alexparis@gmail.com'],
      subject: 'Alex Paris - Contact Message',
      html: ContactEmailTemplate(formData),
    })

    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    console.error('Form submission error:', error)
    throw new Error('Email could not be sent')
  }
}
