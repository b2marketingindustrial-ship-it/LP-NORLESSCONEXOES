'use client';
import { motion } from 'framer-motion';
import Card3D from '../components/productCard';


export default function ProductsLine () {
const products = [
  {
    name: 'Conexões Flare Parker',
    image: '/Flare_Fittings_zm.avif',
    description: 'Conexões flare para sistemas hidráulicos e pneumáticos, projetadas para vedação metálica confiável em aplicações de média e alta pressão.',
  },
  {
    name: 'Adaptadores de Conexão Parker',
    image: '/Adapters_zm.avif',
    description: 'Adaptadores para transição entre diferentes padrões de rosca e tipos de conexão em sistemas de fluidos industriais.',
  },
  {
    name: 'Conexões Espigão Parker',
    image: '/brass-barbed-fittings.avif',
    description: 'Conexões tipo espigão para mangueiras flexíveis, garantindo fixação segura em sistemas de baixa pressão.',
  },
  {
    name: 'Regulador de Pressão Pneumático Parker',
    image: '/Pneumatic-Adapters.webp',
    description: 'Dispositivo de controle de pressão para estabilização do fluxo de ar comprimido em sistemas pneumáticos.',
  },
  {
    name: 'Conexões de Compressão Parker',
    image: '/Compression-Fittings.avif',
    description: 'Conexões de compressão que garantem vedação mecânica segura em tubos metálicos sem necessidade de solda.',
  },
  {
    name: 'Conexões Flareless e Bite Type Parker',
    image: '/Flareless-and-Bite-Type-Fittings.avif',
    description: 'Conexões sem flange que utilizam sistema de anel de corte para vedação robusta em alta pressão.',
  },
  {
    name: 'Conexões Hidráulicas Parker',
    image: '/Hydraulic-Fittings.avif',
    description: 'Conexões hidráulicas para sistemas de alta pressão com vedação segura e resistência a vibração e fadiga.',
  },
  {
    name: 'Engates Rápidos Pneumáticos Parker',
    image: '/Quick-Couplings-Pneumatic.webp',
    description: 'Engates rápidos para conexão e desconexão de linhas pneumáticas com válvula de retenção automática.',
  },
  {
    name: 'Conexões Push-to-Connect Parker',
    image: '/Push-to-Connect-Fittings.webp',
    description: 'Conexões de encaixe rápido sem ferramentas, ideais para sistemas pneumáticos e automação industrial.',
  },
  {
    name: 'Conexões para Tubos Parker',
    image: '/Pipe-fittings.avif',
    description: 'Conexões para tubulações industriais com vedação confiável em sistemas de fluidos e gases.',
  },
  {
    name: 'Tubos e Acessórios Parker',
    image: '/Tube_Fittings_and_Equipment.jpg',
    description: 'Linha completa de tubos e conexões para distribuição de fluidos em aplicações industriais.',
  },
  {
    name: 'Conexões Pneumáticas Parker',
    image: '/pneumaticFittings.avif',
    description: 'Conexões pneumáticas para sistemas de ar comprimido com foco em eficiência, vedação e durabilidade.',
  },
];
    return (
        <section className="section-padding bg-slate-50">
            <div className="container-custom text-center mb-14 md:mb-20">
                <span className="text-yellow-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Categorias</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter"><span 
                className="text-orange-400 
                font-black">Linha de</span> <span className="text-neutral-900 font-black">Produtos</span></h2>
                <p className="text-sm md:text-[12px] text-black max-w-2xl 
                mx-auto font-bold uppercase tracking-wide 
                leading-relaxed"></p>
            </div>
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 
                md:gap-6 lg:gap-6 justify-items-center" >
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                        >
                            <Card3D image={product.image} title={product.name} description={product.description} />
                        </motion.div>
                    ))}
                </div>
            </div>
            </section>
      )
}
