'use client';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import ProductsLine from './sections/ProductCategories';
import WhyParker from './sections/WhyParker';
import Applications from './sections/Applications';
import SpecializedService from './sections/SpecializedService';
import WhyNorless from './sections/WhyNorless';
import ContactForm from './sections/ContactForm';
import FinalCTA from './sections/FinalCTA';
import ModalForm from './components/ModalForm';
import Footer from './components/Footer';
import WhatsButton from './components/WhatsButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={openModal} />

      <main>
        <Hero onOpenModal={openModal} />
        <ProductsLine />
        <WhyParker />
        <Applications />
        <SpecializedService onOpenModal={openModal} />
        <WhyNorless />
        <ContactForm />
        <FinalCTA onOpenModal={openModal} />
      </main>

      <Footer />

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
      <WhatsButton onOpenModal={openModal} />
    </div>
  );
}
