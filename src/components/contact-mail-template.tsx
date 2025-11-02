export interface IContactMailTemplate {
  name: string
  email: string
  message: string
}

export function ContactEmailTemplate(contact: IContactMailTemplate) {
  return `
    <!doctype html>
    <html lang="en">
      <body>
        <h1>Welcome, Great master!</h1>
        <br />
        <p>Someone sent you a message on your portfolio:</p>
        <p> - Name: ${contact.name}</p>
        <p> - Email: ${contact.email}</p>
        <p> - Message: ${contact.message}</p>
      </body>
    </html>
  `
}
