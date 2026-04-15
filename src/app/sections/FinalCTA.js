'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="flex items-center justify-center gap-10 mb-10 sm:flex-row flex-col">
        <Image
          src="/norlessLogo.jpg"
          alt="logo norless"
          width={300}
          height={120}
          className="object-contain h-14 md:h-16 w-auto"
        />
        <Image
          src="/parkerstore.png"
          alt="parker"
          width={220}
          height={100}
          className="object-contain h-14 md:h-16 w-auto"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,640px)] h-[min(90vw,640px)] bg-[#004a99]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-[1.1] tracking-tighter uppercase">
            Solicite seu orçamento personalizado para{' '}
            <span className="text-yellow-400 font-black">Conexões Pneumáticas </span>
            <span className="text-orange-400 font-black">Parker</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-900 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            Preencha o formulário ao lado e receba uma proposta feita sob medida para sua empresa. Nossa equipe retornará rapidamente com a solução ideal em conectividade pneumática.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-wide rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>👉 SOLICITE SUA COTAÇÃO</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}