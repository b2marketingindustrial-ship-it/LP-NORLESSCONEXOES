'use client';

import { motion } from 'framer-motion';
import { Check, Award, Users, HeadphonesIcon } from 'lucide-react';

const DIFFERENTIALS = [
  'Distribuidor Oficial Parker',
  'Equipe Especializada',
  'Atendimento Personalizado',
  'Suporte Completo'
];

const PILLARS = [
  {
    title: 'Distribuidor Oficial Parker',
    text: 'Garantia de procedência, qualidade, certificação e autenticidade.',
    Icon: Award,
  },
  {
    title: 'Equipe Especializada',
    text: 'Profissionais treinados para indicar a melhor solução para sua indústria.',
    Icon: Users,
  },
  {
    title: 'Atendimento Personalizado',
    text: 'Propostas sob medida de acordo com suas necessidades e orçamento.',
    Icon: HeadphonesIcon,
  },
  {
    title: 'Suporte Completo',
    text: 'Acompanhamento técnico antes e pós-venda.',
    Icon: Check,
  },
];

export default function WhyNorless() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="text-yellow-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Por que escolher a Norless?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter leading-[1.1]">
            <span className="text-orange-400 font-black">Vantagens </span>
            <span className="text-neutral-900 font-black">Competitivas</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-900 font-medium leading-relaxed">
            Somos especialistas em soluções Parker, oferecendo o que há de melhor em tecnologia e atendimento para o seu negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DIFFERENTIALS.map((differential, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-base font-semibold text-gray-800">
                  {differential}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500 rounded-xl flex-shrink-0">
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