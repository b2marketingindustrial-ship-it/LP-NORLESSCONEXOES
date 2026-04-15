"use client";

import { useEffect } from 'react';

export default function useUtm() {
  useEffect(() => {
    // Lógica para capturar UTMs da URL e armazenar no localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {};

    // Capturar parâmetros UTM comuns
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        utmData[param] = value;
      }
    });

    // Armazenar no localStorage se houver dados UTM
    if (Object.keys(utmData).length > 0) {
      localStorage.setItem('utmData', JSON.stringify(utmData));
    }
  }, []);
}