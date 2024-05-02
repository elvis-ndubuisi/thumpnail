import faqs from "@/assets/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FAQsSection() {
  return (
    <section className='mt-16'>
      <h3 className='mb-4 text-center text-3xl font-bold'>FAQs</h3>
      <p className='mx-auto max-w-xl text-center text-lg font-medium'>
        Find answers to common questions about blurhash images, integration, and usage.
      </p>

      <Accordion type='single' collapsible className='mx-auto mt-12 max-w-2xl'>
        {faqs.map((faq, idx) => (
          <AccordionItem value={faq.question} key={faq.question + idx}>
            <AccordionTrigger className='font-semibold'>{faq.question}</AccordionTrigger>

            <AccordionContent className='font-lg font-medium'>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
