import { ContactForm } from '~/components/portfolio/ContactForm'
import { Container } from '~/components/ui/Container'
import { useInViewAnimation } from '~/hooks/useInViewAnimation'

export function ContactSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-gradient-to-b from-white to-blue-50 py-20 transition-all duration-700 dark:from-gray-950 dark:to-gray-900 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <Container size="md">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Get In Touch
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind or want to collaborate? Let&#39;s talk!
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}
