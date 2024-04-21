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
      <h3 className='font-bold text-3xl text-center mb-4'>FAQs</h3>
      <p className='font-medium text-center max-w-xl mx-auto text-lg'>
        Find answers to common questions about blurhash images, integration, and
        usage.
      </p>

      <Accordion
        type='single'
        collapsible
        className='max-w-2xl mx-auto mt-12'>
        {faqs.map((faq, idx) => (
          <AccordionItem
            value={faq.question}
            key={faq.question + idx}>
            <AccordionTrigger className='font-semibold font-medium'>
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className='font-medium font-lg'>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
