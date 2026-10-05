<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Dr. Arni Mendoza Soto - Cirugía General, Hernias y Mínima Invasión - Tarjeta Digital</title>
  <meta name="description" content="Dr. Arni Alejandro Mendoza Soto - Cirujano General especializado en Hernias y Mínima Invasión">
  <meta name="keywords" content="cirujano general, hernias, laparoscopia, mínima invasión, CDMX, Lindavista">

  <!-- Favicons -->
  <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />
  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Dr Arni Mendoza" />
  <link rel="manifest" href="site.webmanifest" />

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

  <style>
    /* Variables CSS - Paleta Azul Profesional */
    :root {
      --primary-color: #2c5aa0;
      --secondary-color: #3d7bc7;
      --accent-color: #5a9fd4;
      --dark-blue: #1a3a5c;
      --light-blue: #e8f2f9;
      --text-primary: #2d3748;
      --text-secondary: #4a5568;
      --text-light: #718096;
      --white: #ffffff;
      --card-bg: #ffffff;
      --shadow-sm: 0 2px 8px rgba(44, 90, 160, 0.08);
      --shadow-md: 0 4px 16px rgba(44, 90, 160, 0.12);
      --shadow-lg: 0 8px 32px rgba(44, 90, 160, 0.16);
    }

    /* Reset y Base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      color: var(--text-primary);
      background: linear-gradient(135deg, #f5f9fc 0%, #e8f2f9 100%);
      overflow-x: hidden;
      min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', sans-serif;
      color: var(--dark-blue);
      font-weight: 600;
    }

    /* Animated Background */
    .animated-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .wave {
      position: absolute;
      width: 200%;
      height: 100%;
      animation: wave 25s linear infinite;
    }

    .wave:nth-child(1) {
      background: linear-gradient(135deg, rgba(44, 90, 160, 0.05) 0%, rgba(93, 159, 212, 0.05) 100%);
      animation-delay: 0s;
    }

    .wave:nth-child(2) {
      background: linear-gradient(135deg, rgba(61, 123, 199, 0.03) 0%, rgba(90, 159, 212, 0.03) 100%);
      animation-delay: -5s;
      animation-duration: 30s;
    }

    .wave:nth-child(3) {
      background: linear-gradient(135deg, rgba(90, 159, 212, 0.02) 0%, rgba(44, 90, 160, 0.02) 100%);
      animation-delay: -10s;
      animation-duration: 35s;
    }

    @keyframes wave {
      0% {
        transform: translateX(0) translateY(0);
      }
      50% {
        transform: translateX(-25%) translateY(10px);
      }
      100% {
        transform: translateX(-50%) translateY(0);
      }
    }

    /* Floating Particles */
    .particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }

    .particle:nth-child(1) {
      width: 80px;
      height: 80px;
      background: radial-gradient(circle, rgba(44, 90, 160, 0.1) 0%, transparent 70%);
      top: 10%;
      left: 10%;
      animation: float 20s infinite ease-in-out;
    }

    .particle:nth-child(2) {
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, rgba(61, 123, 199, 0.08) 0%, transparent 70%);
      top: 60%;
      left: 80%;
      animation: float 25s infinite ease-in-out 5s;
    }

    .particle:nth-child(3) {
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, rgba(90, 159, 212, 0.06) 0%, transparent 70%);
      top: 80%;
      left: 20%;
      animation: float 30s infinite ease-in-out 10s;
    }

    .particle:nth-child(4) {
      width: 70px;
      height: 70px;
      background: radial-gradient(circle, rgba(44, 90, 160, 0.07) 0%, transparent 70%);
      top: 30%;
      left: 70%;
      animation: float 22s infinite ease-in-out 3s;
    }

    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }
      25% {
        transform: translate(30px, -30px) scale(1.1);
        opacity: 0.5;
      }
      50% {
        transform: translate(-20px, 30px) scale(0.9);
        opacity: 0.4;
      }
      75% {
        transform: translate(40px, 20px) scale(1.05);
        opacity: 0.6;
      }
    }

    /* Container */
    .main-container {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    /* Card Principal */
    .business-card {
      background: var(--card-bg);
      border-radius: 24px;
      box-shadow: var(--shadow-lg);
      max-width: 900px;
      width: 100%;
      overflow: hidden;
      position: relative;
      animation: fadeInUp 0.8s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Header Card */
    .card-header {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .card-header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: pulse 15s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }

    .profile-section {
      position: relative;
      z-index: 1;
    }

    .profile-photo {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent-color) 0%, var(--light-blue) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      border: 5px solid rgba(255, 255, 255, 0.3);
    }

    .profile-photo i {
      font-size: 70px;
      color: var(--white);
    }

    .card-header h1 {
      color: var(--white);
      font-size: 2rem;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .card-header .specialty {
      color: rgba(255, 255, 255, 0.95);
      font-size: 1.1rem;
      font-weight: 400;
      margin-bottom: 5px;
    }

    .card-header .credentials {
      color: rgba(255, 255, 255, 0.85);
      font-size: 0.9rem;
      font-weight: 300;
    }

    /* Card Body */
    .card-body {
      padding: 40px 35px;
    }

    /* Info Section */
    .info-section {
      margin-bottom: 35px;
    }

    .info-title {
      font-size: 1.1rem;
      color: var(--primary-color);
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--light-blue);
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
    }

    .info-title i {
      color: var(--accent-color);
    }

    /* Contact Items */
    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      padding: 15px;
      margin-bottom: 12px;
      background: var(--light-blue);
      border-radius: 12px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .contact-item:hover {
      background: rgba(44, 90, 160, 0.12);
      transform: translateX(5px);
      box-shadow: var(--shadow-sm);
    }

    .contact-icon {
      width: 45px;
      height: 45px;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: var(--shadow-sm);
    }

    .contact-icon i {
      color: var(--white);
      font-size: 1.2rem;
    }

    .contact-info {
      flex: 1;
    }

    .contact-label {
      font-size: 0.85rem;
      color: var(--text-light);
      margin-bottom: 3px;
      font-weight: 500;
    }

    .contact-value {
      font-size: 1rem;
      color: var(--text-primary);
      font-weight: 500;
    }

    .contact-value a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.3s;
    }

    .contact-value a:hover {
      color: var(--primary-color);
    }

    /* Specialties Grid */
    .specialties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-bottom: 30px;
    }

    .specialty-badge {
      background: var(--light-blue);
      padding: 12px 18px;
      border-radius: 10px;
      text-align: center;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .specialty-badge:hover {
      background: var(--white);
      border-color: var(--accent-color);
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .specialty-badge i {
      font-size: 1.8rem;
      color: var(--primary-color);
      margin-bottom: 8px;
      display: block;
    }

    .specialty-badge span {
      font-size: 0.9rem;
      color: var(--text-secondary);
      font-weight: 500;
      display: block;
    }

    /* Action Buttons */
    .action-buttons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 30px;
    }

    .action-btn {
      padding: 15px 25px;
      border-radius: 12px;
      text-decoration: none;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border: none;
      cursor: pointer;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      color: var(--white);
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
      color: var(--white);
    }

    .btn-secondary {
      background: var(--white);
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
    }

    .btn-secondary:hover {
      background: var(--primary-color);
      color: var(--white);
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .btn-whatsapp {
      background: #25D366;
      color: var(--white);
      box-shadow: var(--shadow-md);
    }

    .btn-whatsapp:hover {
      background: #1fb855;
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
      color: var(--white);
    }

    /* Stats */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .stat-item {
      text-align: center;
      padding: 20px;
      background: var(--light-blue);
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .stat-item:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
      display: block;
      margin-bottom: 5px;
    }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    /* Footer */
    .card-footer {
      background: linear-gradient(to right, var(--light-blue) 0%, rgba(44, 90, 160, 0.05) 100%);
      padding: 25px 35px;
      text-align: center;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 15px;
    }

    .social-link {
      width: 45px;
      height: 45px;
      background: var(--white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-sm);
    }

    .social-link:hover {
      background: var(--primary-color);
      color: var(--white);
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .social-link i {
      font-size: 1.2rem;
    }

    .copyright {
      font-size: 0.85rem;
      color: var(--text-light);
      margin-top: 15px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .card-header h1 {
        font-size: 1.5rem;
      }

      .card-header .specialty {
        font-size: 1rem;
      }

      .card-body {
        padding: 30px 20px;
      }

      .specialties-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .action-buttons {
        grid-template-columns: 1fr;
      }

      .stats-row {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .main-container {
        padding: 10px;
      }

      .business-card {
        border-radius: 16px;
      }

      .card-header {
        padding: 30px 20px;
      }

      .profile-photo {
        width: 120px;
        height: 120px;
      }

      .profile-photo i {
        font-size: 60px;
      }

      .specialties-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Save Contact Button */
    .save-contact-btn {
      background: linear-gradient(135deg, #4c8bf5 0%, #3d7bc7 100%);
      color: white;
      padding: 15px 30px;
      border-radius: 12px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 1rem;
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      margin-top: 20px;
    }

    .save-contact-btn:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
      color: white;
    }

    /* Loading Animation */
    .loading {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s, visibility 0.5s;
    }

    .loading.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid var(--light-blue);
      border-top-color: var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  </style>
</head>

<body>
  <!-- Loading Screen -->
  <div class="loading" id="loading">
    <div class="spinner"></div>
  </div>

  <!-- Animated Background -->
  <div class="animated-bg">
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>

  <!-- Main Container -->
  <div class="main-container">
    <div class="business-card">
      
      <!-- Header -->
      <div class="card-header">
        <div class="profile-section">
          <div class="profile-photo">
            <img src="businesscard/drarnimendoza.jpg" style="border-radius:50%;width:100%;height:auto;">
          </div>
          <h1>Dr. Arni Alejandro Mendoza Soto</h1>
          <p class="specialty">Cirujano General | Especialista en Hernias y Mínima Invasión</p>
          <p class="credentials">Cédula Profesional: 11767675 | Cédula Especialidad: 14408066</p>
        </div>
      </div>

      <!-- Body -->
      <div class="card-body">
        
        

        <!-- Especialidades -->
        <div class="info-section">
          <h3 class="info-title">
            <i class="fas fa-stethoscope"></i>
            Especialidades
          </h3>
          <div class="specialties-grid">
            <div class="specialty-badge">
              
              <span>Cirugía Laparoscópica</span>
            </div>
            <div class="specialty-badge">
              
              <span>Reparación de Hernias</span>
            </div>
            <div class="specialty-badge">
              
              <span>Cirugía General</span>
            </div>
            <div class="specialty-badge">
              
              <span>Mínima Invasión</span>
            </div>
             <div class="specialty-badge">
              
              <span>Cirugía de cabeza y cuello (tiroides, paratiroides, parótida)</span>
            </div>
          </div>
        </div>

        <!-- Contacto -->
        <div class="info-section">
          <h3 class="info-title">
            <i class="fas fa-address-card"></i>
            Información de Contacto
          </h3>
          
          <div class="contact-item" onclick="window.open('https://wa.me/525554612387', '_blank')">
            <div class="contact-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">WhatsApp</div>
              <div class="contact-value">55 5461 2387</div>
            </div>
          </div>

          <div class="contact-item" onclick="window.open('tel:5566266049', '_blank')">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">Teléfono Consultorio</div>
              <div class="contact-value">55 6726 6049</div>
            </div>
          </div>

          <div class="contact-item" onclick="window.open('tel:5520006100', '_blank')">
            <div class="contact-icon">
              <i class="fas fa-hospital"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">Hospital</div>
              <div class="contact-value">55 2000 6100 Ext. 188</div>
            </div>
          </div>

          <div class="contact-item" onclick="window.open('https://maps.google.com/?q=Rio+Bamba+781+Lindavista+CDMX', '_blank')">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">Dirección</div>
              <div class="contact-value">Rio Bamba 781, Consultorio 4<br>Lindavista, CP 07300, CDMX</div>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="far fa-clock"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">Horario</div>
              <div class="contact-value">Lunes - Sábado, 8:00 AM - 8:00 PM</div>
            </div>
          </div>

          <div class="contact-item" onclick="window.open('https://drarnimendoza.com', '_blank')">
            <div class="contact-icon">
              <i class="far fa-globe"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">Visita mi website</div>
              <div class="contact-value">https://drarnimendoza.com</div>
            </div>
          </div>
          
        </div>

        <!-- Formación -->
        <div class="info-section">
          <h3 class="info-title">
            <i class="fas fa-graduation-cap"></i>
            Formación Académica
          </h3>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-university"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">Egresado</div>
              <div class="contact-value">Universidad Nacional Autónoma de México (UNAM)</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <a href="https://wa.me/525554612387?text=Hola%20Dr.%20Arni%20Mendoza,%20me%20gustaría%20agendar%20una%20cita" 
             class="action-btn btn-whatsapp" target="_blank">
            <i class="fab fa-whatsapp"></i>
            WhatsApp
          </a>
          <a href="https://www.doctoralia.com.mx/arni-mendoza/cirujano-general/ciudad-de-mexico" 
             class="action-btn btn-primary" target="_blank">
            <i class="far fa-calendar-check"></i>
            Agendar Cita
          </a>
          <a href="tel:5566266049" 
             class="action-btn btn-secondary">
            <i class="fas fa-phone"></i>
            Llamar
          </a>
          <button onclick="saveContact()" class="action-btn btn-secondary">
            <i class="fas fa-download"></i>
            Guardar Contacto
          </button>
        </div>

      </div>

      <!-- Footer -->
      <div class="card-footer">
        <div class="social-links">
          <a href="https://www.facebook.com/drarnimendoza" class="social-link" title="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/drarnimendoza" class="social-link" title="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
         
        </div>
        <div class="copyright">
          © 2025 Dr. Arni Alejandro Mendoza Soto | Todos los derechos reservados
        </div>
      </div>

    </div>
  </div>

  <!-- Vendor JS Files -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js"></script>

  <script>
    // Hide loading screen
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('loading').classList.add('hidden');
      }, 500);
    });

    // Save contact function
    function saveContact() {
      // Crear datos vCard
      const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Dr. Arni Alejandro Mendoza Soto
N:Mendoza Soto;Arni Alejandro;Dr.;;
TITLE:Cirujano General - Especialista en Hernias y Mínima Invasión
TEL;TYPE=CELL,VOICE:+52 55 3667 0155
TEL;TYPE=WORK,VOICE:+52 55 6626 6049
TEL;TYPE=WORK,VOICE:+52 55 2000 6100
ADR;TYPE=WORK:;;Rio Bamba 781, Consultorio 4;Ciudad de México;CDMX;07300;México
URL:https://www.doctoralia.com.mx/arni-mendoza/
NOTE:Cédula Profesional: 11767675 | Cédula Especialidad: 14408066\\nEgresado UNAM\\nMás de 1000 cirugías realizadas\\n500+ hernias reparadas\\nHorario: Lunes a Sábado, 8AM - 8PM
END:VCARD`;

      // Crear blob y descargar
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Dr_Arni_Mendoza.vcf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Mostrar mensaje de confirmación
      alert('¡Contacto descargado! Ahora puedes agregarlo a tu agenda.');
    }

    // Smooth scroll para enlaces internos (si los hubiera)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.action-btn, .contact-item').forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  </script>

  <style>
    /* Ripple effect */
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  </style>

</body>
</html>
