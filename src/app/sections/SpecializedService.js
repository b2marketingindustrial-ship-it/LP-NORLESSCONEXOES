'use client';
import { motion } from 'framer-motion';
import { Users, Award, HeadphonesIcon } from 'lucide-react';

export default function SpecializedService({ onOpenModal }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="text-yellow-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Atendimento Especializado
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter">
            <span className="text-orange-400 font-black">Consultoria </span>
            <span className="text-neutral-900 font-black">Técnica</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-900 font-medium leading-relaxed max-w-2xl mx-auto">
            Contamos com uma equipe técnica treinada e certificada, pronta para oferecer consultoria especializada em conexões Parker. Nosso compromisso é garantir eficiência, rapidez e confiança desde a especificação até a entrega.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Equipe Especializada
            </h3>
            <p className="text-sm text-gray-600">
              Profissionais treinados para indicar a melhor solução para sua indústria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Certificação Parker
            </h3>
            <p className="text-sm text-gray-600">
              Garantia de procedência, qualidade, certificação e autenticidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
              <HeadphonesIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Suporte Completo
            </h3>
            <p className="text-sm text-gray-600">
              Acompanhamento técnico antes e pós-venda.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
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