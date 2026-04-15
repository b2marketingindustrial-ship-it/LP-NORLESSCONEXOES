'use client';

import { motion } from 'framer-motion';
import { Check, Gem, Rocket } from 'lucide-react';

const DIFFERENTIALS = [
  'Vedação à prova de vazamentos',
  'Compatibilidade com múltiplos diâmetros e materiais',
  'Instalação rápida e sem ferramentas especializadas',
  'Alta resistência a vibração e ciclos de pressão',
  'Durabilidade para ambientes severos'
];

const PILLARS = [
  {
    title: 'Durabilidade & Confiabilidade',
    text: 'Componentes projetados para elevada vida útil mesmo sob uso intenso.',
    Icon: Gem,
  },
  {
    title: 'Desempenho Superior',
    text: 'Vedação e fluxo otimizados para pneumática e aplicações industriais.',
    Icon: Rocket,
  },
];

export default function WhyParker() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="text-yellow-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Conexões Pneumáticas Parker
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter leading-[1.1]">
            Por que escolher as{' '}
            <span className="text-orange-400 font-black">Conexões Pneumáticas </span>
            <span className="text-yellow-400 font-black">Parker?</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-900 font-medium leading-relaxed">
            A Parker é líder mundial em soluções de conectividade para sistemas pneumáticos e hidráulicos. Nossas conexões são projetadas para reduzir tempos de instalação, garantir vedação confiável e operar com desempenho superior em ambientes industriais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Diferenciais das conexões Parker:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {DIFFERENTIALS.map((differential, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">
                  {differential}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500 rounded-xl">
                  <pillar.Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}