// assets/js/site-config.js
window.DrArniSiteConfig = Object.freeze({
  brandName: 'Dr. Arni Mendoza',
  legalName: 'Dr. Arni Alejandro Mendoza Soto',
  professional: {
    university: 'Universidad Nacional Autónoma de México',
    specialty: 'Cirugía general'
  },
  hours: {
    days: 'Jueves a Sábado',
    display: '08:00 a 12:00 hrs',
    header: 'Atención previa cita',    
    // header: 'Jueves a Sábado · 08:00 a 12:00 hrs · Atención previa cita',
    appointmentTimes: [
      '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM',
      '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM'
    ]
  },
  images: {
    about: 'assets/img/slider3.optimized.jpg'
  },
  heroGallery: [
    { src: 'assets/img/slider3.optimized.jpg', alt: 'Dr. Arni Mendoza, cirujano general en CDMX, durante una cirugía' },
    { src: 'assets/img/slider2.optimized.jpg', alt: 'Equipo médico en sala de cirugía general' },
    { src: 'assets/img/slider1.optimized.jpg', alt: 'Atención quirúrgica en quirófano en Ciudad de México' }
  ],
  contactSubjects: [
    { value: 'hernia', label: 'Hernias' },
    { value: 'vesicula', label: 'Vesícula' },
    { value: 'apendicitis', label: 'Apéndice' },
    { value: 'laparoscopia', label: 'Mínima invasión' },
    { value: 'reflujo', label: 'Reflujo gastroesofágico' },
    { value: 'nodulos-tiroideos', label: 'Nódulos tiroideos' },
    { value: 'general', label: 'Consulta general' }
  ],
  procedures: [
    {
      value: 'reflujo',
      title: 'Reflujo gastroesofágico',
      icon: 'icon-reflujo',
      description: 'Valoración integral y tratamiento quirúrgico antirreflujo (funduplicatura laparoscópica) y de hernia hiatal para pacientes con reflujo crónico.',
      points: [
        'Cirugía de mínima invasión',
        'Alivio de síntomas refractarios a medicamento',
        'Valoración funcional previa'
      ],
      symptoms: [
        'Ardor retroesternal o acidez frecuente',
        'Regurgitación o sensación de comida subiendo',
        'Molestia después de comer o acostarse'
      ],
      image: 'assets/img/departments-6.jpg',
      disclaimer: 'Consulte a su médico • No se automedique'
    },
    {
      value: 'nodulos-tiroideos',
      title: 'Nódulos tiroideos',
      icon: 'icon-tiroides',
      description: 'Evaluación diagnóstica y manejo quirúrgico especializado de nódulos y patología de la glándula tiroides con enfoque seguro y preciso.',
      points: [
        'Valoración endocrino-quirúrgica',
        'Cirugía tiroidea segura',
        'Seguimiento integral'
      ],
      symptoms: [
        'Abultamiento palpable en el cuello',
        'Sensación de presión al tragar',
        'Cambios en la voz o sensación de molestia al mover el cuello'
      ],
      image: 'assets/img/nodulos-tiroideos.jpg',
      disclaimer: 'Consulte a su médico • No se automedique'
    }
  ],
  avaladoPor: [
    { siglas: 'UNAM', nombre: 'UNAM - Facultad de Medicina', logo: 'assets/img/promotors/UNAM.jpg' },
    { siglas: 'CMCG', nombre: 'Consejo Mexicano de Cirugía General', logo: 'assets/img/promotors/CMCG.jpg' },
    { siglas: 'AMCG', nombre: 'Asociación Mexicana de Cirugía General', logo: 'assets/img/promotors/AMCG.jpg' },
    { siglas: 'LAP', nombre: 'Cirugía laparoscópica', logo: 'assets/img/promotors/Cirugía Laparoscópica.jpg' },
    { siglas: 'PARED', nombre: 'Cirugía de pared abdominal', logo: 'assets/img/promotors/Cirugía de Pared Abdominal.jpg' },
    { siglas: 'AH', nombre: 'Asociación Mexicana de Hernia A.C.', logo: 'assets/img/promotors/Asociación Mexicana de Hernia.jpg' }
  ],
  segurosMedicos: {
    nota: 'La aceptación de Seguros de Gastos Médicos Mayores depende de la red, convenio y condiciones de cada póliza. También se ofrece atención particular.',
    aseguradoras: [
      { nombre: 'GNP Seguros', siglas: 'GNP', logo: 'assets/img/PaytoSave/GNP.jpeg' },
      { nombre: 'MetLife', siglas: 'ML', logo: 'assets/img/PaytoSave/Metlife.jpg' },
      { nombre: 'AXA', siglas: 'AXA', logo: 'assets/img/PaytoSave/Axa.png' },
      { nombre: 'Seguros Monterrey New York Life', siglas: 'SMNYL', logo: 'assets/img/PaytoSave/Seguros Moneterrey New York Life.png' },
      { nombre: 'Allianz', siglas: 'ALLIANZ', logo: 'assets/img/PaytoSave/Allianz.png' },
      { nombre: 'Mapfre', siglas: 'MAPFRE', logo: 'assets/img/PaytoSave/Mapfre.png' },
      { nombre: 'Inbursa', siglas: 'INBURSA', logo: 'assets/img/PaytoSave/Inbursa.png' },
      { nombre: 'Bupa', siglas: 'BUPA', logo: 'assets/img/PaytoSave/Bupa.png' }
    ]
  },
  reviews: [
    {
      author: 'Francisco Ramírez',
      initials: 'FR',
      rating: 5,
      text: 'Muy buena atención, explica todo muy bien. Muy profesional.'
    },
    {
      author: 'eduardo b',
      initials: 'EB',
      rating: 5,
      text: 'Muchas gracias doc. Siempre en contacto continuo previo, durante y posterior a cirugía de hernia y con toda la disposición para atender todas las dudas. Recomendado 100%.'
    },
    {
      author: 'Samantha Arroyo',
      initials: 'SA',
      rating: 5,
      text: '¡El mejor doc del mundo! Es lindísimo para tratar los pacientes que llegamos con miedo, como yo. Tiene la paciencia para explicar el procedimiento, implicaciones, riesgos, etc. Su atención es de 1000 de inicio a fin.'
    },
    {
      author: 'Jonathan Jared Salinas Muñoz',
      initials: 'JS',
      rating: 5,
      text: 'Excelente atención, muy profesional y respetuoso'
    }
  ],
  contact: {
    assistantPhones: [
      { e164: '525567266049', display: '55 6726 6049' },
      { e164: '525520006100', display: '55 2000 6100 Ext. 188', extension: '188' }
    ],
    callPhoneE164: '525567266049',
    callPhoneDisplay: '55 6726 6049',
    whatsappE164: '525554612009',
    whatsappDisplay: '55 5461 2009',
    whatsappDefaultMessage: 'Hola Dr. Arni Mendoza, visité su página web y me gustaría solicitar información para agendar una cita de valoración.'
  },
  googleReviews: {
    profileUrl: 'https://maps.app.goo.gl/L16SNha6CmRxGhi78',
    reviewsUrl: 'https://maps.app.goo.gl/L16SNha6CmRxGhi78',
    writeReviewUrl: '' // Enlace corto directo obtenido desde Google Business Profile
  },
  address: {
    display: 'Río Bamba 781, Consultorio 4, Lindavista, CP 07300, Gustavo A. Madero, CDMX',
    mapUrl: 'https://maps.app.goo.gl/L16SNha6CmRxGhi78'
  },
  social: {
    facebook: 'https://www.facebook.com/share/18YNTDzeNm/',
    instagram: 'https://www.instagram.com/doctorarni?cplk=MTd4eWM1cG42ZDhxbQ=='
  },
  year: 2026,
  legalNotice: 'La información de este sitio es general y no sustituye una valoración médica.'
});

(function() {
  'use strict';

  const config = window.DrArniSiteConfig;
  const digitsOnly = value => typeof value === 'string' && /^\d{10,15}$/.test(value);
  const textNode = (selector, value) => {
    if (typeof value !== 'string') return;
    document.querySelectorAll(selector).forEach(node => {
      node.textContent = value;
    });
  };

  // Inyección global del nombre de marca
  document.querySelectorAll('[data-brand-name]').forEach(node => {
    node.textContent = config.brandName;
  });
  const mobileAppTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
  if (mobileAppTitle) mobileAppTitle.content = config.brandName;

  textNode('[data-university]', config.professional.university);
  textNode('[data-specialty]', config.professional.specialty);
  textNode('[data-hours-days]', config.hours.days);
  textNode('[data-hours-display]', config.hours.display);
  textNode('[data-hours-header]', config.hours.header);
  textNode('[data-site-year]', String(config.year));
  textNode('[data-legal-notice]', config.legalNotice);

  document.querySelectorAll('[data-config-image]').forEach(image => {
    const source = config.images[image.dataset.configImage];
    if (typeof source !== 'string' || !source.trim()) return;

    const isSvg = new URL(source, document.baseURI).pathname.toLowerCase().endsWith('.svg');
    if (!isSvg) {
      image.src = source;
      return;
    }

    fetch(source)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })
      .then(svg => {
        if (!/<svg(?:\s|>)/i.test(svg)) throw new Error('The response is not an SVG document');

        const objectUrl = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
        const releaseObjectUrl = () => URL.revokeObjectURL(objectUrl);
        image.addEventListener('load', releaseObjectUrl, { once: true });
        image.addEventListener('error', () => {
          releaseObjectUrl();
          console.error(`Unable to render SVG image "${source}".`);
        }, { once: true });
        image.src = objectUrl;
      })
      .catch(error => console.error(`Unable to load SVG image "${source}".`, error));
  });

  const heroGallery = document.querySelector('[data-hero-gallery]');
  const heroBubbles = heroGallery ? [...heroGallery.querySelectorAll('[data-hero-bubble]')] : [];
  const galleryImages = Array.isArray(config.heroGallery) ? config.heroGallery.filter(image =>
    image && typeof image.src === 'string' && image.src.trim() &&
    typeof image.alt === 'string' && image.alt.trim()
  ) : [];
  if (heroBubbles.length && galleryImages.length) {
    let activeGalleryIndex = 0;
    let rotationTimer;
    heroBubbles.forEach((bubble, index) => {
      const image = bubble.querySelector('img');
      const galleryImage = galleryImages[index % galleryImages.length];
      if (image) {
        image.src = galleryImage.src;
        image.alt = galleryImage.alt;
      }
    });

    const lightbox = document.createElement('div');
    lightbox.className = 'hero-lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Fotografía de quirófano ampliada');
    const lightboxImage = document.createElement('img');
    const closeLightbox = document.createElement('button');
    closeLightbox.className = 'hero-lightbox-close';
    closeLightbox.type = 'button';
    closeLightbox.setAttribute('aria-label', 'Cerrar fotografía ampliada');
    closeLightbox.textContent = '×';
    lightbox.append(lightboxImage, closeLightbox);
    document.body.appendChild(lightbox);

    let lastFocusedBubble = null;
    const hideLightbox = () => {
      lightbox.classList.remove('is-open');
      window.setTimeout(() => {
        lightbox.hidden = true;
        document.body.style.removeProperty('overflow');
        if (lastFocusedBubble) lastFocusedBubble.focus();
      }, 220);
    };
    heroBubbles.forEach(bubble => {
      bubble.addEventListener('click', () => {
        const image = bubble.querySelector('img');
        if (!image) return;
        lastFocusedBubble = bubble;
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        closeLightbox.focus();
        window.requestAnimationFrame(() => lightbox.classList.add('is-open'));
      });
    });
    closeLightbox.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) hideLightbox();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !lightbox.hidden) hideLightbox();
    });

    const rotateGallery = () => {
      if (document.hidden || heroGallery.matches(':hover') || heroGallery.contains(document.activeElement)) return;
      activeGalleryIndex = (activeGalleryIndex + 1) % galleryImages.length;
      heroBubbles.forEach((bubble, index) => {
        const image = bubble.querySelector('img');
        if (!image) return;
        image.classList.add('is-changing');
        window.setTimeout(() => {
          const galleryImage = galleryImages[(activeGalleryIndex + index) % galleryImages.length];
          image.src = galleryImage.src;
          image.alt = galleryImage.alt;
          image.classList.remove('is-changing');
        }, 450);
      });
    };
    if (galleryImages.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rotationTimer = window.setInterval(rotateGallery, 4500);
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          window.clearInterval(rotationTimer);
        } else {
          rotationTimer = window.setInterval(rotateGallery, 4500);
        }
      });
    }
  }

  function validHttpsUrl(value, hostname) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && (!hostname || url.hostname === hostname);
    } catch {
      return false;
    }
  }

  // Configuración dinámica de teléfonos y botones de llamada/WhatsApp
  function buildTelHref(digits, extension) {
    const digitsOnlyValue = digitsOnly(digits) ? digits : '';
    if (!digitsOnlyValue) return '';
    return extension ? `tel:+${digitsOnlyValue},${extension}` : `tel:+${digitsOnlyValue}`;
  }

  function configurePhone(role, digits, display, hrefPrefix) {
    const isConfigured = digitsOnly(digits) && Boolean(display);

    document.querySelectorAll(`[data-contact-${role}]`).forEach(link => {
      if (!isConfigured) {
        link.closest('[data-contact-card]')?.remove();
        link.remove();
        return;
      }
      link.href = hrefPrefix === 'wa.me' ? `https://wa.me/${digits}` : buildTelHref(digits);
      const valueNode = link.querySelector('.contact-value, span');
      if (valueNode) valueNode.textContent = display;
      else link.textContent = display;
      link.hidden = false;
    });

    document.querySelectorAll(`[data-${role}-action]`).forEach(link => {
      if (isConfigured) {
        const defaultMessage = config.contact.whatsappDefaultMessage || 'Hola, quisiera solicitar información para una valoración.';
        const baseUrl = hrefPrefix === 'wa.me' ? `https://wa.me/${digits}` : buildTelHref(digits);
        if (hrefPrefix === 'wa.me' && link.dataset.whatsappService) {
          const service = config.contactSubjects.find(item => item.value === link.dataset.whatsappService);
          const message = service
            ? `Hola, quisiera solicitar información sobre ${service.label.toLowerCase()}.`
            : defaultMessage;
          link.href = `${baseUrl}?text=${encodeURIComponent(message)}`;
        } else if (hrefPrefix === 'wa.me') {
          link.href = `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
        } else {
          link.href = baseUrl;
        }
        link.hidden = false;
      } else {
        link.closest('[data-contact-card]')?.remove();
        link.remove();
      }
    });

    document.querySelectorAll(`[data-contact-${role}-pending], [data-${role}-action-pending]`).forEach(note => note.remove());
  }

  configurePhone('phone', config.contact.callPhoneE164, config.contact.callPhoneDisplay, 'tel');
  configurePhone('whatsapp', config.contact.whatsappE164, config.contact.whatsappDisplay, 'wa.me');
  document.querySelectorAll('[data-whatsapp-insurance]').forEach(link => {
    link.href = `https://wa.me/${config.contact.whatsappE164}?text=${encodeURIComponent('Hola, quisiera orientación para validar la cobertura de mi seguro de gastos médicos.')}`;
  });
  document.querySelectorAll('[data-contact-phone-line]').forEach(link => {
    const phone = config.contact.assistantPhones[Number(link.dataset.contactPhoneLine)];
    if (!phone || !digitsOnly(phone.e164)) {
      link.remove();
      return;
    }
    link.href = buildTelHref(phone.e164, phone.extension);
    const valueNode = link.querySelector('.contact-value, span');
    if (valueNode) valueNode.textContent = phone.display;
    else link.textContent = phone.display;
    link.hidden = false;
  });

  document.querySelectorAll('[data-site-social]').forEach(link => {
    const destination = config.social[link.dataset.siteSocial];
    if (!validHttpsUrl(destination)) {
      link.remove();
      return;
    }
    link.href = destination;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.hidden = false;
  });

  const phoneToggle = document.querySelector('#phone-menu-toggle');
  const phonePopover = document.querySelector('#phone-menu');
  if (phoneToggle && phonePopover) {
    let closeTimer;

    function closePhonePopover() {
      if (phoneToggle.getAttribute('aria-expanded') !== 'true') return;
      phoneToggle.setAttribute('aria-expanded', 'false');
      phonePopover.classList.remove('is-open');
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        if (phoneToggle.getAttribute('aria-expanded') === 'false') phonePopover.hidden = true;
      }, 180);
    }

    phoneToggle.addEventListener('click', () => {
      window.clearTimeout(closeTimer);
      if (phoneToggle.getAttribute('aria-expanded') === 'true') {
        closePhonePopover();
        return;
      }
      phonePopover.hidden = false;
      phoneToggle.setAttribute('aria-expanded', 'true');
      window.requestAnimationFrame(() => phonePopover.classList.add('is-open'));
    });

    phonePopover.addEventListener('click', event => {
      if (event.target.closest('a')) closePhonePopover();
    });

    document.addEventListener('click', event => {
      if (!phoneToggle.contains(event.target) && !phonePopover.contains(event.target)) closePhonePopover();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && phoneToggle.getAttribute('aria-expanded') === 'true') {
        closePhonePopover();
        phoneToggle.focus();
      }
    });
  }

  // Dirección y enlace de mapas
  document.querySelectorAll('[data-location-link]').forEach(link => {
    if (validHttpsUrl(config.address.mapUrl)) {
      link.href = config.address.mapUrl;
    } else {
      link.remove();
    }
  });
  document.querySelectorAll('[data-address-display]').forEach(node => {
    node.textContent = config.address.display;
  });

  const institutionalLogos = document.querySelector('[data-avalado-por]');
  if (institutionalLogos) {
    config.avaladoPor.forEach(institution => {
      const card = document.createElement('article');
      card.className = 'institutional-logo';
      const logoWrapper = document.createElement('div');
      logoWrapper.className = 'logo-img-wrapper';
      const fallbackLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      fallbackLogo.classList.add('institutional-fallback');
      fallbackLogo.setAttribute('viewBox', '0 0 64 64');
      fallbackLogo.setAttribute('role', 'img');
      fallbackLogo.setAttribute('aria-label', `Emblema ilustrativo de ${institution.nombre}`);
      const emblem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      emblem.setAttribute('cx', '32');
      emblem.setAttribute('cy', '32');
      emblem.setAttribute('r', '28');
      const architecture = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      architecture.setAttribute('d', 'M13 25 32 14l19 11M17 29h30M20 30v17m8-17v17m8-17v17m8-17v17M16 50h32M13 54h38');
      const fallbackSiglas = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      fallbackSiglas.setAttribute('x', '32');
      fallbackSiglas.setAttribute('y', '62');
      fallbackSiglas.textContent = institution.siglas;
      fallbackLogo.append(emblem, architecture, fallbackSiglas);
      logoWrapper.appendChild(fallbackLogo);
      if (institution.logo) {
        const logo = document.createElement('img');
        logo.className = 'institution-logo-img';
        logo.src = institution.logo;
        logo.alt = institution.nombre;
        logo.loading = 'lazy';
        logo.decoding = 'async';
        logo.addEventListener('load', () => fallbackLogo.setAttribute('hidden', ''), { once: true });
        logo.addEventListener('error', () => logo.remove(), { once: true });
        logoWrapper.appendChild(logo);
      }
      const acronym = document.createElement('strong');
      acronym.className = 'institutional-acronym';
      acronym.textContent = institution.siglas;
      const name = document.createElement('span');
      name.className = 'institutional-name';
      name.textContent = institution.nombre;
      card.append(logoWrapper, acronym, name);
      institutionalLogos.appendChild(card);
    });
  }

  const insuranceNote = document.querySelector('[data-insurance-note]');
  if (insuranceNote) insuranceNote.textContent = config.segurosMedicos.nota;
  const insurerGrid = document.querySelector('[data-insurers]');
  if (insurerGrid) {
    config.segurosMedicos.aseguradoras.forEach(insurer => {
      const card = document.createElement('article');
      card.className = 'insurer-card';
      const logo = document.createElement('img');
      logo.src = insurer.logo;
      logo.alt = insurer.nombre;
      logo.loading = 'lazy';
      logo.decoding = 'async';
      logo.addEventListener('error', () => card.remove(), { once: true });
      card.appendChild(logo);
      insurerGrid.appendChild(card);
    });
  }

  // Enlaces oficiales de reseñas; no se construye un destino de escritura.
  document.querySelectorAll('[data-review-destination]').forEach(button => {
    const destinationKey = { profile: 'profileUrl', reviews: 'reviewsUrl', write: 'writeReviewUrl' }[button.dataset.reviewDestination];
    const destination = config.googleReviews[destinationKey] || (destinationKey === 'reviews' ? config.googleReviews.profileUrl : '');
    
    if (!validHttpsUrl(destination)) {
      button.hidden = true;
      return;
    }
    button.href = destination;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.hidden = false;
  });

  // Opciones del formulario solo contienen asuntos de contacto, no datos clínicos.
  const subjectSelect = document.querySelector('[data-contact-subjects]');
  if (subjectSelect) {
    [...subjectSelect.options].filter(option => option.value).forEach(option => option.remove());
    config.contactSubjects.forEach(subject => {
      const option = document.createElement('option');
      option.value = subject.value;
      option.textContent = subject.label;
      subjectSelect.appendChild(option);
    });
  }

  const procedureTabList = document.querySelector('.procedures-tabs');
  const procedureTabContent = document.querySelector('#procedures .tab-content');
  if (procedureTabList && procedureTabContent) {
    config.procedures.forEach((procedure, index) => {
      const tabId = `procedures-tab-config-${index + 1}`;
      const buttonId = `procedures-tab-button-config-${index + 1}`;
      const tabItem = document.createElement('li');
      tabItem.className = 'nav-item';
      const button = document.createElement('button');
      button.className = 'nav-link';
      button.id = buttonId;
      button.type = 'button';
      button.setAttribute('data-bs-toggle', 'tab');
      button.setAttribute('data-bs-target', `#${tabId}`);
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', tabId);
      button.setAttribute('aria-selected', 'false');
      const tabIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      tabIcon.setAttribute('aria-hidden', 'true');
      tabIcon.setAttribute('focusable', 'false');
      const tabUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      tabUse.setAttribute('href', `#${procedure.icon}`);
      tabIcon.appendChild(tabUse);
      const tabLabel = document.createElement('span');
      tabLabel.textContent = procedure.title;
      button.append(tabIcon, tabLabel);
      tabItem.appendChild(button);
      procedureTabList.appendChild(tabItem);

      const pane = document.createElement('div');
      pane.className = 'tab-pane';
      pane.id = tabId;
      pane.setAttribute('role', 'tabpanel');
      pane.setAttribute('aria-labelledby', buttonId);
      const panel = document.createElement('div');
      panel.className = 'procedure-panel';
      const row = document.createElement('div');
      row.className = 'row align-items-center g-4';
      const details = document.createElement('div');
      details.className = 'col-lg-6 details';
      const title = document.createElement('h3');
      title.textContent = procedure.title;
      const description = document.createElement('p');
      description.textContent = procedure.description;
      const points = document.createElement('ul');
      points.className = 'procedure-points';
      procedure.points.forEach(point => {
        const item = document.createElement('li');
        const check = document.createElement('i');
        check.className = 'bi bi-check2-circle';
        check.setAttribute('aria-hidden', 'true');
        item.append(check, document.createTextNode(point));
        points.appendChild(item);
      });
      const symptoms = procedure.symptoms ? document.createElement('div') : null;
      if (symptoms) {
        symptoms.className = 'procedure-symptoms';
        const symptomsLabel = document.createElement('strong');
        symptomsLabel.textContent = 'Principales síntomas a valorar:';
        const symptomsList = document.createElement('ul');
        procedure.symptoms.forEach(itemText => {
          const item = document.createElement('li');
          item.textContent = itemText;
          symptomsList.appendChild(item);
        });
        symptoms.append(symptomsLabel, symptomsList);
      }
      const alert = procedure.alert ? document.createElement('div') : null;
      if (alert) {
        alert.className = 'procedure-alert';
        alert.innerHTML = `<i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i><span>${procedure.alert}</span>`;
      }
      const disclaimer = procedure.disclaimer ? document.createElement('p') : null;
      if (disclaimer) {
        disclaimer.className = 'procedure-disclaimer';
        disclaimer.textContent = procedure.disclaimer;
      }
      const actions = document.createElement('div');
      actions.className = 'procedure-actions';
      const whatsapp = document.createElement('a');
      whatsapp.className = 'procedure-whatsapp';
      whatsapp.target = '_blank';
      whatsapp.rel = 'noopener noreferrer';
      whatsapp.href = `https://wa.me/${config.contact.whatsappE164}?text=${encodeURIComponent(`Hola, quisiera solicitar información sobre ${procedure.title.toLowerCase()}.`)}`;
      const whatsappIcon = document.createElement('i');
      whatsappIcon.className = 'bi bi-whatsapp';
      whatsappIcon.setAttribute('aria-hidden', 'true');
      whatsapp.append(whatsappIcon, document.createTextNode('Solicitar valoración por WhatsApp'));
      const contact = document.createElement('a');
      contact.className = 'procedure-contact-link';
      contact.href = '#contact';
      contact.textContent = 'Ver detalles y contacto ';
      const arrow = document.createElement('i');
      arrow.className = 'bi bi-arrow-right';
      arrow.setAttribute('aria-hidden', 'true');
      contact.appendChild(arrow);
      actions.append(whatsapp, contact);
      const nodes = [title, description, points];
      if (symptoms) nodes.push(symptoms);
      if (alert) nodes.push(alert);
      nodes.push(actions);
      if (disclaimer) nodes.push(disclaimer);
      details.append(...nodes);

      const visualColumn = document.createElement('div');
      visualColumn.className = 'col-lg-6 text-center';
      const visual = document.createElement('div');
      visual.className = 'procedure-visual';
      visual.setAttribute('aria-hidden', 'true');
      if (procedure.image) {
        const img = document.createElement('img');
        img.src = procedure.image;
        img.alt = `Imagen ilustrativa de ${procedure.title.toLowerCase()} en cirugía general`;
        img.loading = 'lazy';
        img.decoding = 'async';
        visual.appendChild(img);
      } else {
        const illustration = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const illustrationUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        illustrationUse.setAttribute('href', `#${procedure.icon}`);
        illustration.appendChild(illustrationUse);
        visual.appendChild(illustration);
      }
      visualColumn.appendChild(visual);
      row.append(details, visualColumn);
      panel.appendChild(row);
      pane.appendChild(panel);
      procedureTabContent.appendChild(pane);
    });
  }

  const appointmentDate = document.querySelector('[data-appointment-date]');
  const appointmentDatePicker = document.querySelector('#contact-date-picker');
  const appointmentCalendar = document.querySelector('#contact-date-calendar');
  const appointmentTime = document.querySelector('[data-appointment-times]');
  if (appointmentDate && appointmentDatePicker && appointmentCalendar) {
    const dateDisplay = appointmentDatePicker.querySelector('[data-appointment-date-display]');
    const monthDisplay = appointmentCalendar.querySelector('[data-calendar-month]');
    const calendarGrid = appointmentCalendar.querySelector('[data-calendar-grid]');
    const previousMonth = appointmentCalendar.querySelector('[data-calendar-previous]');
    const nextMonth = appointmentCalendar.querySelector('[data-calendar-next]');
    const clearDate = appointmentCalendar.querySelector('[data-calendar-clear]');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const weekdayNames = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

    const formatDateValue = date => [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0')
    ].join('-');
    const dateFromValue = value => {
      const [year, month, day] = value.split('-').map(Number);
      return new Date(year, month - 1, day);
    };
    const formatDisplayDate = date => new Intl.DateTimeFormat('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
    const closeCalendar = () => {
      appointmentCalendar.hidden = true;
      appointmentDatePicker.setAttribute('aria-expanded', 'false');
    };
    const renderCalendar = () => {
      monthDisplay.textContent = new Intl.DateTimeFormat('es-MX', {
        month: 'long',
        year: 'numeric'
      }).format(visibleMonth);
      previousMonth.disabled = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 0) < today;
      calendarGrid.replaceChildren();

      weekdayNames.forEach((name, day) => {
        const weekday = document.createElement('span');
        weekday.className = 'appointment-calendar-weekday';
        weekday.setAttribute('aria-label', ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'][day]);
        weekday.textContent = name;
        calendarGrid.appendChild(weekday);
      });

      const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
      const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
      const totalCells = Math.ceil((firstDay.getDay() + daysInMonth) / 7) * 7;
      for (let cell = 0; cell < totalCells; cell += 1) {
        const dayNumber = cell - firstDay.getDay() + 1;
        const dayButton = document.createElement('button');
        dayButton.type = 'button';
        dayButton.className = 'appointment-calendar-day';
        if (dayNumber < 1 || dayNumber > daysInMonth) {
          dayButton.classList.add('is-outside-month');
          dayButton.tabIndex = -1;
        } else {
          const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), dayNumber);
          const isAvailable = [4, 5, 6].includes(date.getDay()) && date >= today;
          const dateValue = formatDateValue(date);
          dayButton.textContent = String(dayNumber);
          dayButton.disabled = !isAvailable;
          dayButton.setAttribute('aria-label', formatDisplayDate(date));
          dayButton.setAttribute('aria-pressed', String(appointmentDate.value === dateValue));
          dayButton.addEventListener('click', () => {
            appointmentDate.value = dateValue;
            dateDisplay.textContent = formatDisplayDate(date);
            closeCalendar();
            appointmentDatePicker.focus();
          });
        }
        calendarGrid.appendChild(dayButton);
      }

      clearDate.disabled = !appointmentDate.value;
    };

    appointmentDatePicker.addEventListener('click', () => {
      const shouldOpen = appointmentCalendar.hidden;
      appointmentCalendar.hidden = !shouldOpen;
      appointmentDatePicker.setAttribute('aria-expanded', String(shouldOpen));
      if (shouldOpen) renderCalendar();
    });
    previousMonth.addEventListener('click', () => {
      visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
      renderCalendar();
    });
    nextMonth.addEventListener('click', () => {
      visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
      renderCalendar();
    });
    clearDate.addEventListener('click', () => {
      appointmentDate.value = '';
      dateDisplay.textContent = 'Selecciona una fecha';
      renderCalendar();
      appointmentDatePicker.focus();
    });
    document.addEventListener('click', event => {
      if (!appointmentCalendar.contains(event.target) && !appointmentDatePicker.contains(event.target)) closeCalendar();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !appointmentCalendar.hidden) {
        closeCalendar();
        appointmentDatePicker.focus();
      }
    });
  }
  if (appointmentTime) {
    config.hours.appointmentTimes.forEach(time => {
      const option = document.createElement('option');
      option.value = time;
      option.textContent = time;
      appointmentTime.appendChild(option);
    });
  }

  const whatsappConfigured = digitsOnly(config.contact.whatsappE164) && Boolean(config.contact.whatsappDisplay);
  const contactForm = document.querySelector('[data-whatsapp-contact-form]');
  if (contactForm && whatsappConfigured) {
    contactForm.closest('[data-contact-form-column]').hidden = false;
    contactForm.hidden = false;
    const mapColumn = document.querySelector('[data-contact-map-column]');
    if (mapColumn) {
      mapColumn.classList.remove('col-lg-9');
      mapColumn.classList.add('col-lg-5');
    }
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const selectedSubject = config.contactSubjects.find(subject => subject.value === formData.get('subject'));
      const message = [
        `Hola, soy ${formData.get('name')}.`,
        `Correo: ${formData.get('email')}.`,
        `Asunto: ${selectedSubject ? selectedSubject.label : 'Consulta general'}.`,
        `Fecha deseada: ${formData.get('date') || 'Sin preferencia'}.`,
        `Hora deseada: ${formData.get('time') || 'Sin preferencia'}.`,
        `Mensaje: ${formData.get('message') || 'Sin mensaje adicional'}.`
      ].join('\n');
      const whatsappUrl = `https://wa.me/${config.contact.whatsappE164}?text=${encodeURIComponent(message)}`;
      const whatsappWindow = window.open(whatsappUrl, '_blank');
      const status = contactForm.querySelector('[data-contact-form-status]');
      if (whatsappWindow) {
        whatsappWindow.opener = null;
        if (status) {
          status.hidden = false;
          status.textContent = 'Se abrió WhatsApp con el mensaje preparado. Revísalo y envíalo desde WhatsApp.';
        }
      } else if (status) {
        status.hidden = false;
        status.textContent = 'No se pudo abrir WhatsApp. Permite las ventanas emergentes e inténtalo de nuevo.';
      }
    });
  } else if (contactForm) {
    contactForm.hidden = true;
    const formColumn = contactForm.closest('[data-contact-form-column]');
    if (formColumn) formColumn.hidden = true;
    const mapColumn = document.querySelector('[data-contact-map-column]');
    if (mapColumn) {
      mapColumn.classList.remove('col-lg-5');
      mapColumn.classList.add('col-lg-9');
    }
  }

  // Renderizar las opiniones estáticas sin marcarlas como verificadas o actualizadas automáticamente.
  const reviewTrack = document.querySelector('[data-review-track]');
  const reviewViewport = document.querySelector('[data-review-viewport]');
  const reviewControls = document.querySelector('[data-review-controls]');
  const reviewIndicators = document.querySelector('[data-review-indicators]');
  if (reviewTrack && reviewViewport && reviewControls && reviewIndicators && Array.isArray(config.reviews)) {
    let activeReviewPage = 0;
    let reviewsPerPage = 1;
    let resizeTimer;
    let pointerStartX = null;

    function createReviewCard(review) {
      const card = document.createElement('article');
      card.className = 'review-card';

      const avatar = document.createElement('span');
      avatar.className = 'review-avatar';
      avatar.setAttribute('aria-hidden', 'true');
      avatar.textContent = review.initials;

      const author = document.createElement('h3');
      author.className = 'review-author';
      author.textContent = review.author;

      const rating = document.createElement('p');
      rating.className = 'review-rating';
      rating.setAttribute('aria-label', `Calificación: ${review.rating} de 5 estrellas`);
      rating.textContent = `${'★'.repeat(Math.max(0, Math.min(5, review.rating)))}${'☆'.repeat(5 - Math.max(0, Math.min(5, review.rating)))}`;

      const quote = document.createElement('blockquote');
      quote.className = 'review-quote';
      quote.textContent = review.text;

      const source = document.createElement('p');
      source.className = 'review-source-label';
      source.textContent = 'Opinión compartida en Google';

      card.append(avatar, author, rating, quote, source);
      return card;
    }

    function renderReviewPages() {
      reviewsPerPage = window.matchMedia('(min-width: 1200px)').matches
        ? 3
        : window.matchMedia('(min-width: 768px)').matches ? 2 : 1;
      const pages = [];
      for (let index = 0; index < config.reviews.length; index += reviewsPerPage) {
        pages.push(config.reviews.slice(index, index + reviewsPerPage));
      }
      activeReviewPage = Math.min(activeReviewPage, Math.max(0, pages.length - 1));
      reviewTrack.replaceChildren();
      reviewIndicators.replaceChildren();

      pages.forEach((reviews, pageIndex) => {
        const slide = document.createElement('div');
        slide.className = 'review-slide';
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-label', `Página ${pageIndex + 1} de ${pages.length}`);
        reviews.forEach(review => slide.appendChild(createReviewCard(review)));
        reviewTrack.appendChild(slide);

        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.className = 'review-indicator';
        indicator.setAttribute('aria-label', `Mostrar opiniones ${pageIndex + 1}`);
        indicator.setAttribute('aria-current', pageIndex === activeReviewPage ? 'true' : 'false');
        indicator.addEventListener('click', () => {
          activeReviewPage = pageIndex;
          updateReviewPage();
        });
        reviewIndicators.appendChild(indicator);
      });

      reviewControls.hidden = pages.length <= 1;
      reviewIndicators.hidden = pages.length <= 1;
      updateReviewPage();
    }

    function updateReviewPage() {
      reviewTrack.style.transform = `translateX(-${activeReviewPage * 100}%)`;
      reviewIndicators.querySelectorAll('.review-indicator').forEach((indicator, index) => {
        indicator.setAttribute('aria-current', String(index === activeReviewPage));
      });
    }

    reviewControls.addEventListener('click', event => {
      const direction = event.target.closest('[data-review-step]')?.dataset.reviewStep;
      const pageCount = reviewIndicators.children.length;
      if (!direction || pageCount < 2) return;
      activeReviewPage = (activeReviewPage + (direction === 'next' ? 1 : -1) + pageCount) % pageCount;
      updateReviewPage();
    });

    reviewViewport.addEventListener('pointerdown', event => {
      pointerStartX = event.clientX;
    });
    reviewViewport.addEventListener('pointerup', event => {
      if (pointerStartX === null || Math.abs(event.clientX - pointerStartX) < 40) {
        pointerStartX = null;
        return;
      }
      const pageCount = reviewIndicators.children.length;
      if (pageCount > 1) {
        activeReviewPage = (activeReviewPage + (event.clientX < pointerStartX ? 1 : -1) + pageCount) % pageCount;
        updateReviewPage();
      }
      pointerStartX = null;
    });
    reviewViewport.addEventListener('pointercancel', () => {
      pointerStartX = null;
    });

    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(renderReviewPages, 120);
    });
    renderReviewPages();
  }

  // Enlaces de redes sociales
  document.querySelectorAll('[data-site-social]').forEach(link => {
    const destination = config.social[link.dataset.siteSocial];
    if (validHttpsUrl(destination)) {
      link.href = destination;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.remove();
    }
  });
})();
