'use client';
import { motion } from 'framer-motion';
import Card3D from '../components/productCard';


export default function ProductsLine () {
  const products = [
    { name: 'Filtro de Ar Parker',  image: '/product1.jpg' , description: 'Filtro de ar comprimido para remoção de impurezas e contaminantes.' },
  
    { name: 'Regulador de Pressão Parker', image: '/product2.jpg' , description: 'Regulador de pressão para controle preciso do ar comprimido.' },
    
    { name: 'Lubrificador Parker', image: '/product3.jpg' , description: 'Lubrificador para otimização da lubrificação em sistemas pneumáticos.'   },
    
    { name: 'Filtro-Regulador Parker', image: '/product4.jpg' , description: 'Combinação de filtro e regulador para tratamento eficiente do ar.' },
    
    { name: 'Unidade FRL Completa Parker', image: '/FRL-Serie-P3Y.jpg' , description: 'Unidade completa de filtro, regulador e lubrificador.' },
  
    { name: 'Separador de Água Parker', image: '/regulador-de-precisao-r210-r220-e-r230.jpg' , description: 'Separador para remoção de água e umidade do ar comprimido.' },
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 
                md:gap-8 lg:gap-20 justify-items-center" >
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
