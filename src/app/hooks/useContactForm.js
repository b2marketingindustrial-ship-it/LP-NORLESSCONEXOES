'use client';
import { useState } from 'react';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    product: '',
    email: '',
    phone: '',
    finality: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    let utmData = {};

    try {
      const savedUtm = localStorage.getItem('utmData');
      if (savedUtm) {
        utmData = JSON.parse(savedUtm);
      }
    } catch (err) {
      console.error('Erro ao buscar UTMs do localStorage', err);
    }

    try {
      const payload = {
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
          conversion_identifier: ' [B2] FORM NORLESS PARKER CONEXOES',
          name: formData.name,
          email: formData.email,
          mobile_phone: formData.phone || '',
          company_name: formData.company || '',
          cf_product: formData.product || '',
          cf_finality: formData.finality || '',
          traffic_source: utmData.utm_source || '',
          traffic_medium: utmData.utm_medium || '',
          traffic_campaign: utmData.utm_campaign || '',
          traffic_content: utmData.utm_content || '',
          traffic_term: utmData.utm_term || '',
        },
      };

      const res = await fetch(
        'https://api.rd.services/platform/conversions?api_key=ZbuvlkNkvmSrkbaiuNYrObuUvCDMgPRoCRgn',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        console.error('Erro HTTP:', res.status, result.error || result);
        setError(true);
        return;
      }

      setSuccessMsg(true);
      setSubmitted(true);
      window.open(
        `https://wa.me/11984471850?text=${encodeURIComponent(
          `Olá, gostaria de falar com um especialista da Norless sobre conexões pneumáticas Parker. Meu nome é ${formData.name} e estou interessado em ${formData.product}.`
        )}`,
        '_blank'
      );

      setTimeout(() => {
        setSubmitted(false);
        setSuccessMsg(false);
        setFormData({
          name: '',
          company: '',
          product: '',
          email: '',
          phone: '',
          finality: '',
        });
      }, 3000);
    } catch (err) {
      console.error('Erro geral:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    submitted,
    loading,
    error,
    successMsg,
    handleChange,
    handleSubmit,
  };
}