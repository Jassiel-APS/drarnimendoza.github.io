// assets/js/site-config.js
window.DrArniSiteConfig = Object.freeze({
  brandName: 'Dr. Arni Mendoza',
  legalName: 'Dr. Arni Alejandro Mendoza Soto',
  contact: {
    // Dígitos E.164 estrictos (con código de país, ej: 521XXXXXXXXXX, sin "+" ni espacios)
    callPhoneE164: '',
    callPhoneDisplay: '',
    whatsappE164: '',
    whatsappDisplay: '',
    hospitalPhoneE164: '',
    hospitalPhoneDisplay: ''
  },
  booking: {
    // URLs públicas de páginas de reserva de Google Calendar (Appointment schedules).
    // Sustituye cada valor vacío por el enlace público real de la agenda correspondiente.
    hernias: '',
    vesicula: '',
    apendicitis: '',
    laparoscopia: ''
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
    facebook: 'https://www.facebook.com/drarnimendoza',
    instagram: 'https://instagram.com/drarnimendoza'
  }
});

(function() {
  'use strict';

  const config = window.DrArniSiteConfig;
  const digitsOnly = value => typeof value === 'string' && /^\d{10,15}$/.test(value);

  // Inyección global del nombre de marca
  document.querySelectorAll('[data-brand-name]').forEach(node => {
    node.textContent = config.brandName;
  });
  const mobileAppTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
  if (mobileAppTitle) mobileAppTitle.content = config.brandName;

  function validHttpsUrl(value, hostname) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && (!hostname || url.hostname === hostname);
    } catch {
      return false;
    }
  }

  function isGoogleAppointmentScheduleUrl(value) {
    if (!validHttpsUrl(value)) return false;
    const url = new URL(value);
    return (url.hostname === 'calendar.google.com' && url.pathname.includes('/appointments/schedules/')) ||
           (url.hostname === 'calendar.app.google' && /^\/[A-Za-z0-9_-]+/.test(url.pathname));
  }

  // Configuración dinámica de teléfonos y botones de llamada/WhatsApp
  function configurePhone(role, digits, display, hrefPrefix) {
    const isConfigured = digitsOnly(digits) && Boolean(display);
    
    document.querySelectorAll(`[data-contact-${role}]`).forEach(link => {
      if (!isConfigured) {
        link.remove();
        return;
      }
      link.href = hrefPrefix === 'wa.me' ? `https://wa.me/${digits}` : `tel:+${digits}`;
      const valueNode = link.querySelector('.contact-value');
      if (valueNode) valueNode.textContent = display;
      else link.textContent = display;
      link.hidden = false;
    });

    document.querySelectorAll(`[data-contact-${role}-pending]`).forEach(note => {
      note.hidden = isConfigured;
    });

    document.querySelectorAll(`[data-${role}-action]`).forEach(link => {
      if (isConfigured) {
        link.href = hrefPrefix === 'wa.me' ? `https://wa.me/${digits}` : `tel:+${digits}`;
        link.hidden = false;
      } else {
        link.remove();
      }
    });
  }

  configurePhone('phone', config.contact.callPhoneE164, config.contact.callPhoneDisplay, 'tel');
  configurePhone('whatsapp', config.contact.whatsappE164, config.contact.whatsappDisplay, 'wa.me');
  configurePhone('hospital', config.contact.hospitalPhoneE164, config.contact.hospitalPhoneDisplay, 'tel');

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
      frame.remove();
    }
  });
  document.querySelectorAll('[data-address-display]').forEach(node => {
    node.textContent = config.address.display;
  });

  // Despachador seguro a las agendas de Google Calendar
  document.querySelectorAll('[data-calendar-service]').forEach(button => {
    const destination = config.booking[button.dataset.calendarService];
    if (!isGoogleAppointmentScheduleUrl(destination)) {
      button.disabled = true;
      return;
    }
    button.disabled = false;
    button.addEventListener('click', () => {
      window.open(destination, '_blank', 'noopener,noreferrer');
    });
  });

  // Redirecciones directas para la sección de Reseñas de Google
  document.querySelectorAll('[data-review-destination]').forEach(button => {
    const destinationKey = { profile: 'profileUrl', reviews: 'reviewsUrl', write: 'writeReviewUrl' }[button.dataset.reviewDestination];
    const destination = config.googleReviews[destinationKey] || (destinationKey === 'reviews' ? config.googleReviews.profileUrl : '');
    
    if (!validHttpsUrl(destination)) {
      button.disabled = true;
      return;
    }
    button.disabled = false;
    button.addEventListener('click', () => {
      window.open(destination, '_blank', 'noopener,noreferrer');
    });
  });

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
