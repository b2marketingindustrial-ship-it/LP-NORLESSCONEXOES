'use client';
import { motion } from 'framer-motion';
import Card3D from '../components/productCard';


export default function ProductsLine () {
  const products = [
    { name: 'Filtro de Ar Parker', image: '/brass-barbed-fittings.avif', description: 'Filtro para ar comprimido, removendo partículas e condensados antes da utilização.' },
    { name: 'Regulador de Pressão Parker', image: '/Pneumatic-Adapters.webp', description: 'Regulador de pressão para distribuição estável e eficiente do ar pneumático.' },
    { name: 'Lubrificador Parker', image: '/Compression-Fittings.avif', description: 'Lubrificador para manter a lubrificação contínua de cilindros e atuadores.' },
    { name: 'Unidade FRL Completa Parker', image: '/Flareless-and-Bite-Type-Fittings.avif', description: 'Conjunto FRL integrando filtro, regulador e lubrificador em um único módulo.' },
    { name: 'Separador de Água Parker', image: '/Hydraulic-Fittings.avif', description: 'Separador de condensados e umidade para proteger componentes pneumáticos.' },
    { name: 'Conexões Pneumáticas Parker', image: '/Quick-Couplings-Pneumatic.webp', description: 'Engates rápidos e adaptadores Parker para sistemas de ar comprimido confiáveis.' },
    { name: 'Conexões Push-to-Connect Parker', image: '/Push-to-Connect-Fittings.webp', description: 'Conexões rápidas para montagem simples sem ferramentas especiais.' },
    { name: 'Conexões de Tubos Parker', image: '/Pipe-fittings.avif', description: 'Fittings para tubulações que garantem vedação segura em sistemas pneumáticos.' },
    { name: 'Linha de Tubos Parker', image: '/Tube_Fittings_and_Equipment.jpg', description: 'Tubos e equipamentos Parker para distribuição eficiente de fluídos.' },
    { name: 'Fittings Pneumáticos Parker', image: '/pneumaticFittings.avif', description: 'Soluções Parker em conexões e acessórios para aplicações pneumáticas industriais.' },
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
                md:gap-20 lg:gap-20 justify-items-center" >
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
