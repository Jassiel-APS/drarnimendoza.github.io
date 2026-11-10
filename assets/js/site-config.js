// assets/js/site-config.js
window.DrArniSiteConfig = Object.freeze({
  brandName: 'Dr. Arni Mendoza',
  legalName: 'Dr. Arni Alejandro Mendoza Soto',
  professional: {
    professionalLicense: '11767675',
    specialtyLicense: '14408066',
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
    // FALTA: Reemplazar por PNG real del doctor
    about: 'assets/img/doctor-illustration.svg'
  },
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
      ]
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
      ]
    }
  ],
  avaladoPor: [
    { siglas: 'UNAM', nombre: 'UNAM - Facultad de Medicina', logo: '' },
    { siglas: 'CMCG', nombre: 'Consejo Mexicano de Cirugía General', logo: '' },
    { siglas: 'AMCG', nombre: 'Asociación Mexicana de Cirugía General', logo: '' },
    { siglas: 'CMI', nombre: 'Cirugía Laparoscópica y Mínima Invasión', logo: '' }
  ],
  segurosMedicos: {
    nota: 'La aceptación de Seguros de Gastos Médicos Mayores depende de la red, convenio y condiciones de cada póliza. También se ofrece atención particular.',
    aseguradoras: [
      { nombre: 'GNP Seguros', siglas: 'GNP', logo: '' },
      { nombre: 'MetLife', siglas: 'ML', logo: '' },
      { nombre: 'AXA', siglas: 'AXA', logo: '' },
      { nombre: 'Seguros Monterrey New York Life', siglas: 'SMNYL', logo: '' },
      { nombre: 'Allianz', siglas: 'ALLIANZ', logo: '' },
      { nombre: 'Mapfre', siglas: 'MAPFRE', logo: '' },
      { nombre: 'Inbursa', siglas: 'INBURSA', logo: '' },
      { nombre: 'Bupa', siglas: 'BUPA', logo: '' }
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
      { e164: '525520006100', display: '55 2000 6100' }
    ],
    callPhoneE164: '525567266049',
    callPhoneDisplay: '55 6726 6049',
    whatsappE164: '525554612009',
    whatsappDisplay: '55 5461 2009'
  },
  googleReviews: {
    profileUrl: 'https://maps.app.goo.gl/u8jfQfDmmhfyzRak6?g_st=aw',
    reviewsUrl: 'https://maps.app.goo.gl/u8jfQfDmmhfyzRak6?g_st=aw',
    writeReviewUrl: '' // Enlace corto directo obtenido desde Google Business Profile
  },
  address: {
    display: 'Río Bamba 781, Consultorio 4, Lindavista, CP 07300, Gustavo A. Madero, CDMX',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rio%20Bamba%20781%2C%20Consultorio%204%20Lindavista%20CDMX',
    embedUrl: 'https://www.google.com/maps?q=R%C3%ADo%20Bamba%20781%2C%20Consultorio%204%2C%20Lindavista%2C%20Ciudad%20de%20M%C3%A9xico&output=embed'
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

  textNode('[data-professional-license]', config.professional.professionalLicense);
  textNode('[data-specialty-license]', config.professional.specialtyLicense);
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

  function validHttpsUrl(value, hostname) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && (!hostname || url.hostname === hostname);
    } catch {
      return false;
    }
  }

  // Configuración dinámica de teléfonos y botones de llamada/WhatsApp
  function configurePhone(role, digits, display, hrefPrefix) {
    const isConfigured = digitsOnly(digits) && Boolean(display);
    
    document.querySelectorAll(`[data-contact-${role}]`).forEach(link => {
      if (!isConfigured) {
        link.closest('[data-contact-card]')?.remove();
        link.remove();
        return;
      }
      link.href = hrefPrefix === 'wa.me' ? `https://wa.me/${digits}` : `tel:+${digits}`;
      const valueNode = link.querySelector('.contact-value, span');
      if (valueNode) valueNode.textContent = display;
      else link.textContent = display;
      link.hidden = false;
    });

    document.querySelectorAll(`[data-${role}-action]`).forEach(link => {
      if (isConfigured) {
        const baseUrl = hrefPrefix === 'wa.me' ? `https://wa.me/${digits}` : `tel:+${digits}`;
        if (hrefPrefix === 'wa.me' && link.dataset.whatsappService) {
          const service = config.contactSubjects.find(item => item.value === link.dataset.whatsappService);
          const message = service
            ? `Hola, quisiera solicitar información sobre ${service.label.toLowerCase()}.`
            : 'Hola, quisiera solicitar información para una valoración.';
          link.href = `${baseUrl}?text=${encodeURIComponent(message)}`;
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
    link.href = `tel:+${phone.e164}`;
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
    if (validHttpsUrl(config.address.mapUrl, 'www.google.com')) {
      link.href = config.address.mapUrl;
    } else {
      link.remove();
    }
  });
  document.querySelectorAll('[data-location-embed]').forEach(frame => {
    const embedUrl = config.address.embedUrl;
    if (validHttpsUrl(embedUrl, 'www.google.com') &&
        new URL(embedUrl).pathname === '/maps' &&
        new URL(embedUrl).searchParams.get('output') === 'embed') {
      frame.src = embedUrl;
    } else {
    frame.closest('[data-contact-map-column]')?.remove();
    frame.remove();
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
      if (insurer.logo) {
        const logo = document.createElement('img');
        logo.src = insurer.logo;
        logo.alt = insurer.nombre;
        logo.loading = 'lazy';
        card.appendChild(logo);
      } else {
        const monogram = document.createElement('span');
        monogram.className = 'insurer-monogram';
        monogram.setAttribute('aria-hidden', 'true');
        monogram.textContent = insurer.siglas;
        card.appendChild(monogram);
      }
      const name = document.createElement('strong');
      name.textContent = insurer.nombre;
      card.appendChild(name);
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
      details.className = 'col-lg-9 details';
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
      details.append(title, description, points, actions);

      const visualColumn = document.createElement('div');
      visualColumn.className = 'col-lg-3 text-center';
      const visual = document.createElement('div');
      visual.className = 'procedure-visual';
      visual.setAttribute('aria-hidden', 'true');
      const illustration = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const illustrationUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      illustrationUse.setAttribute('href', `#${procedure.icon}`);
      illustration.appendChild(illustrationUse);
      visual.appendChild(illustration);
      visualColumn.appendChild(visual);
      row.append(details, visualColumn);
      panel.appendChild(row);
      pane.appendChild(panel);
      procedureTabContent.appendChild(pane);
    });
  }

  const appointmentDate = document.querySelector('#contact-date');
  const appointmentTime = document.querySelector('[data-appointment-times]');
  if (appointmentDate) {
    const now = new Date();
    appointmentDate.min = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0')
    ].join('-');
    const dateError = document.querySelector('#contact-date-error');
    const validateAppointmentDate = () => {
      const hasInvalidDay = appointmentDate.value && ![4, 5, 6].includes(new Date(`${appointmentDate.value}T00:00:00Z`).getUTCDay());
      appointmentDate.setCustomValidity(hasInvalidDay
        ? 'Las consultas y valoraciones se agendan únicamente de Jueves a Sábado. Por favor selecciona un jueves, viernes o sábado en el calendario.'
        : '');
      if (dateError) dateError.hidden = !hasInvalidDay;
    };
    appointmentDate.addEventListener('change', validateAppointmentDate);
    appointmentDate.addEventListener('input', validateAppointmentDate);
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
