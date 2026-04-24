import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "What types of training programs does Accredian offer?",
      answer: "We offer programs across Data Science, Product Management, General Management, and more — all tailored for enterprise teams and delivered by industry experts."
    },
    {
      question: "How are the training sessions delivered?",
      answer: "Sessions are delivered via live online classes, recorded content, and hands-on projects — flexible enough to fit into any work schedule."
    },
    {
      question: "Can programs be customized for our company?",
      answer: "Yes. Every program is designed around your team's specific skill gaps, identified through our Corporate Assessment Tool (CAT)."
    },
    {
      question: "What is the minimum team size to get started?",
      answer: "We work with teams as small as 5 members and scale up to enterprise-wide deployments of 10,000+ employees."
    },
    {
      question: "How long does a typical program last?",
      answer: "Programs range from 4-week intensive sprints to 6-month comprehensive learning journeys depending on your goals."
    },
    {
      question: "Do participants receive certifications?",
      answer: "Yes. All participants receive Accredian-certified credentials upon successful completion, recognized across the industry."
    },
    {
      question: "How do I get started?",
      answer: "Simply click 'Enquire Now', fill in your details, and our enterprise advisor will reach out within 24 hours."
    }
  ];

  return (
    <section id="faqs" className="bg-[#F8FAFC] py-20 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading Block */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            Frequently Asked <span className="text-[#2563EB]">Questions</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            Everything you need to know about Accredian Enterprise
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-xl border border-gray-100 mb-2 px-6 overflow-hidden"
              >
                <AccordionTrigger className="font-semibold text-[#0F172A] hover:no-underline text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B] text-sm pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
