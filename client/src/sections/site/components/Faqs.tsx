import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import FeaturedTitle from '@/sections/site/components/FeaturedTitle'
import SectionTitle from '@/sections/site/components/SectionTitle'
import { Link } from 'react-router-dom'

const faqItems = [
    {
        id: 'item-1',
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.',
    },
    {
        id: 'item-2',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.',
    },
    {
        id: 'item-3',
        question: 'Can I change or cancel my order?',
        answer: 'You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.',
    },
    {
        id: 'item-4',
        question: 'Do you ship internationally?',
        answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
    },
    {
        id: 'item-5',
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.',
    },
]

export default function Faqs() {

    return (
        <section className="">
            <div className="site-padding-x mx-auto lg:w-5xl w-full px-4 md:px-6">
                <div className="w-full">
                    <SectionTitle textoNormal="Respostas a " textoDestaque='Perguntas Frequentes' posicaoDestaque='right' posicaoPadrao='center' />
                    <FeaturedTitle text='Discover quick and comprehensive answers to common questions about our platform, services, and features.'></FeaturedTitle>
                </div>


                <div className="mx-auto mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="w-full data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground text-center mt-6 px-8">
                        Não consigo encontrar o que procuro! Contacte o nosso {' '}
                        <Link
                            to="#"
                            className="text-primary font-medium hover:underline">
                            Suporte técnico
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
