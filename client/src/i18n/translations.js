const translations = {
  en: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About Me',
      habilidades: 'Skills',
      proyectos: 'Projects',
      servicios: 'Services',
      contacto: 'Contact',
      hireMe: 'Hire Me',
    },
    hero: {
      badge: 'Available for projects',
      greeting: "Hi, I'm",
      role: 'Software Developer | AI & Automation Solutions',
      headline: 'I build intelligent software, automation systems, and modern web applications.',
      description:
        'Focused on creating smart digital solutions using modern technologies such as AI tools, automation workflows, and full-stack web development.',
      btnProjects: 'View Projects',
      btnContact: 'Contact Me',
      stats: [
        { value: '3+', label: 'Years Experience' },
        { value: '15+', label: 'Projects Built' },
        { value: '100%', label: 'Client Focus' },
      ],
      scroll: 'scroll',
    },
    about: {
      tag: '— about me —',
      title: 'The Story',
      titleHighlight: 'Behind the Code',
      role: 'Software Developer',
      p1: "I'm a software developer focused on building practical technology solutions for businesses.",
      p2: 'My work combines web development, automation, and AI tools to help companies improve processes, automate repetitive tasks, and create modern digital experiences that stand out.',
      p3a: 'I have experience working with modern development tools and AI-assisted programming environments such as',
      p3b: 'and',
      p3c: ', which allow me to deliver high-quality solutions efficiently.',
      p4: 'My goal is to bridge the gap between complex technology and real-world business needs — making powerful tools accessible and impactful.',
      interestsLabel: 'Key Interests',
      interests: [
        'Intelligent Automation',
        'AI-Powered Tools',
        'Modern Web Apps',
        'Real-World Tech Solutions',
        'Developer Experience',
        'Open Source',
      ],
      cta: "Let's Talk",
      highlights: [
        { title: 'AI & Automation', desc: 'Building intelligent systems with modern AI tools and automated workflows.' },
        { title: 'Web Development', desc: 'Modern, responsive full-stack web applications with great UX.' },
        { title: 'Problem Solving', desc: 'Creative and analytical approach to complex technical challenges.' },
        { title: 'Continuous Growth', desc: 'Always learning and adapting to the latest tools and technologies.' },
      ],
    },
    skills: {
      tag: '— technical skills —',
      title: 'My',
      titleHighlight: 'Skillset',
      subtitle: 'A blend of technical expertise and practical experience across web, automation, and AI.',
      alsoLabel: 'Also familiar with',
      categories: [
        {
          title: 'Web Development',
          skills: ['React', 'Node.js', 'JavaScript', 'HTML & CSS', 'REST APIs'],
        },
        {
          title: 'Automation & AI',
          skills: ['AI-assisted Dev', 'Workflow Automation', 'Automation Tools', 'Chatbot Integrations'],
        },
        {
          title: 'Dev Tools',
          skills: ['GitHub', 'GitHub Copilot', 'Cursor', 'Modern Workflows'],
        },
        {
          title: 'Soft Skills',
          skills: ['Problem Solving', 'Adaptability', 'Continuous Learning', 'Analytical Thinking'],
        },
      ],
    },
    projects: {
      tag: '— featured work —',
      title: 'My',
      titleHighlight: 'Projects',
      subtitle: 'A selection of projects that showcase my skills across web development, automation, and AI.',
      filters: ['All', 'Web Dev', 'Automation', 'AI'],
      githubLink: 'GitHub',
      demoLink: 'Live Demo',
      viewAll: 'View all projects on GitHub',
      statusLive: 'Live',
      statusProgress: 'In Progress',
      items: [
        {
          title: 'Tourism Website Project',
          description:
            'A modern website for a countryside rental property including booking features, gallery, and fully responsive design.',
        },
        {
          title: 'Automation Workflows',
          description:
            'Automated business processes connecting forms, data collection, communication workflows, and third-party API integrations.',
        },
        {
          title: 'Business Chatbot',
          description:
            'A chatbot designed to automate customer responses and help businesses handle common inquiries efficiently.',
        },
        {
          title: 'Personal Portfolio',
          description:
            'This very portfolio — built with React, Tailwind CSS, Framer Motion, and a Node.js backend.',
        },
      ],
    },
    services: {
      tag: '— what I offer —',
      title: 'What I Can',
      titleHighlight: 'Build',
      subtitle: 'End-to-end digital solutions tailored to your business goals — from design to deployment.',
      ctaTitle: 'Ready to start a project?',
      ctaDesc: "Let's discuss how I can help you build the digital solution your business needs.",
      ctaBtn: 'Get in Touch',
      items: [
        {
          title: 'Web Development',
          subtitle: 'Full-Stack Applications',
          description:
            'Modern, fast, and responsive websites for businesses — including booking systems, landing pages, professional UI, and custom web solutions.',
          features: ['Responsive Design', 'Booking Systems', 'Custom UI/UX', 'Performance Optimization'],
        },
        {
          title: 'Automation Solutions',
          subtitle: 'Business Workflow Automation',
          description:
            'Automating business workflows such as lead capture, appointment scheduling, data processing, and multi-system integrations.',
          features: ['Lead Capture Flows', 'Scheduling Automation', 'Data Processing', 'API Integrations'],
        },
        {
          title: 'AI Chatbots',
          subtitle: 'Intelligent Conversational AI',
          description:
            'Custom chatbots for websites or messaging platforms to improve customer communication and automate FAQs.',
          features: ['Website Chatbots', 'Multi-platform Support', 'FAQ Automation', 'Customer Journeys'],
        },
        {
          title: 'Technical Solutions',
          subtitle: 'Custom Digital Tools',
          description:
            'Custom digital tools and software solutions tailored to specific business needs — from dashboards to specialized apps.',
          features: ['Custom Dashboards', 'Internal Tools', 'Software Consulting', 'Digital Strategy'],
        },
      ],
    },
    contact: {
      tag: '— get in touch —',
      title: "Let's Work",
      titleHighlight: 'Together',
      subtitle:
        "If you're looking for someone to help build modern digital solutions, automate processes, or develop software tools, feel free to reach out.",
      readyTitle: 'Ready to start?',
      readyDesc:
        "Whether you have a project in mind or just want to explore possibilities, I'm open to conversations about new opportunities.",
      availability: 'Available for new projects',
      availabilityDesc: 'Currently accepting freelance and collaboration opportunities.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project or idea...',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successDesc: "Thanks for reaching out. I'll get back to you as soon as possible.",
      successBtn: 'Send another message',
      errorMsg: 'Something went wrong. Please try again or email me directly.',
      privacy: "Your data is safe. I'll respond within 24–48 hours.",
      errors: {
        nameRequired: 'Name is required.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Invalid email address.',
        messageRequired: 'Message is required.',
        messageTooShort: 'Message is too short.',
      },
    },
    footer: {
      description:
        'Software Developer specializing in AI & automation solutions, modern web applications, and intelligent digital experiences.',
      navigation: 'Navigation',
      services: 'Services',
      copyright: '© Sara Bastidas. All rights reserved.',
        builtWith: 'Built with React · Node.js · Tailwind CSS',
    },
  },

  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      servicios: 'Servicios',
      contacto: 'Contacto',
      hireMe: 'Contáctame',
    },
    hero: {
      badge: 'Disponible para proyectos',
      greeting: 'Hola, soy',
      role: 'Desarrolladora de Software | IA & Automatización',
      headline: 'Construyo software inteligente, sistemas de automatización y aplicaciones web modernas.',
      description:
        'Enfocada en crear soluciones digitales inteligentes usando tecnologías modernas como herramientas de IA, flujos de automatización y desarrollo web full-stack.',
      btnProjects: 'Ver Proyectos',
      btnContact: 'Contáctame',
      stats: [
        { value: '3+', label: 'Años de Experiencia' },
        { value: '15+', label: 'Proyectos Creados' },
        { value: '100%', label: 'Enfoque al Cliente' },
      ],
      scroll: 'scroll',
    },
    about: {
      tag: '— sobre mí —',
      title: 'La Historia',
      titleHighlight: 'Detrás del Código',
      role: 'Desarrolladora de Software',
      p1: 'Soy una desarrolladora de software enfocada en construir soluciones tecnológicas prácticas para empresas.',
      p2: 'Mi trabajo combina desarrollo web, automatización y herramientas de IA para ayudar a las empresas a mejorar procesos, automatizar tareas repetitivas y crear experiencias digitales modernas.',
      p3a: 'Tengo experiencia trabajando con herramientas modernas y entornos de programación asistidos por IA como',
      p3b: 'y',
      p3c: ', que me permiten entregar soluciones de alta calidad de forma eficiente.',
      p4: 'Mi objetivo es tender un puente entre la tecnología compleja y las necesidades reales del negocio, haciendo que las herramientas poderosas sean accesibles e impactantes.',
      interestsLabel: 'Intereses Principales',
      interests: [
        'Automatización Inteligente',
        'Herramientas con IA',
        'Apps Web Modernas',
        'Soluciones Tecnológicas Reales',
        'Experiencia de Desarrollador',
        'Open Source',
      ],
      cta: 'Hablemos',
      highlights: [
        { title: 'IA & Automatización', desc: 'Construyendo sistemas inteligentes con herramientas de IA modernas y flujos automatizados.' },
        { title: 'Desarrollo Web', desc: 'Aplicaciones web full-stack modernas, responsivas y con excelente UX.' },
        { title: 'Resolución de Problemas', desc: 'Enfoque creativo y analítico para desafíos técnicos complejos.' },
        { title: 'Crecimiento Continuo', desc: 'Siempre aprendiendo y adaptándome a las últimas herramientas y tecnologías.' },
      ],
    },
    skills: {
      tag: '— habilidades técnicas —',
      title: 'Mis',
      titleHighlight: 'Habilidades',
      subtitle: 'Una mezcla de experiencia técnica y práctica en web, automatización e IA.',
      alsoLabel: 'También familiarizada con',
      categories: [
        {
          title: 'Desarrollo Web',
          skills: ['React', 'Node.js', 'JavaScript', 'HTML & CSS', 'REST APIs'],
        },
        {
          title: 'Automatización & IA',
          skills: ['Desarrollo con IA', 'Automatización de Flujos', 'Herramientas de Automatización', 'Chatbots'],
        },
        {
          title: 'Herramientas',
          skills: ['GitHub', 'GitHub Copilot', 'Cursor', 'Flujos Modernos'],
        },
        {
          title: 'Habilidades Blandas',
          skills: ['Resolución de Problemas', 'Adaptabilidad', 'Aprendizaje Continuo', 'Pensamiento Analítico'],
        },
      ],
    },
    projects: {
      tag: '— trabajo destacado —',
      title: 'Mis',
      titleHighlight: 'Proyectos',
      subtitle: 'Una selección de proyectos que muestran mis habilidades en desarrollo web, automatización e IA.',
      filters: ['Todos', 'Web Dev', 'Automatización', 'IA'],
      githubLink: 'GitHub',
      demoLink: 'Demo en Vivo',
      viewAll: 'Ver todos los proyectos en GitHub',
      statusLive: 'En Vivo',
      statusProgress: 'En Progreso',
      items: [
        {
          title: 'Proyecto Web de Turismo',
          description:
            'Un sitio web moderno para una propiedad de alquiler rural con funciones de reserva, galería y diseño totalmente responsivo.',
        },
        {
          title: 'Flujos de Automatización',
          description:
            'Procesos empresariales automatizados que conectan formularios, recolección de datos, flujos de comunicación e integraciones con APIs.',
        },
        {
          title: 'Chatbot Empresarial',
          description:
            'Un chatbot diseñado para automatizar respuestas a clientes y ayudar a las empresas a gestionar consultas frecuentes.',
        },
        {
          title: 'Portafolio Personal',
          description:
            'Este mismo portafolio — construido con React, Tailwind CSS, Framer Motion y un backend en Node.js.',
        },
      ],
    },
    services: {
      tag: '— lo que ofrezco —',
      title: 'Lo Que Puedo',
      titleHighlight: 'Construir',
      subtitle: 'Soluciones digitales completas adaptadas a los objetivos de tu empresa — del diseño al despliegue.',
      ctaTitle: '¿Listo para iniciar un proyecto?',
      ctaDesc: 'Hablemos sobre cómo puedo ayudarte a construir la solución digital que tu empresa necesita.',
      ctaBtn: 'Contactar',
      items: [
        {
          title: 'Desarrollo Web',
          subtitle: 'Aplicaciones Full-Stack',
          description:
            'Sitios web modernos, rápidos y responsivos — incluyendo sistemas de reservas, landing pages, UI profesional y soluciones web a medida.',
          features: ['Diseño Responsivo', 'Sistemas de Reservas', 'UI/UX a Medida', 'Optimización de Rendimiento'],
        },
        {
          title: 'Soluciones de Automatización',
          subtitle: 'Automatización de Flujos Empresariales',
          description:
            'Automatización de flujos como captura de leads, agendamiento de citas, procesamiento de datos e integraciones entre sistemas.',
          features: ['Captura de Leads', 'Automatización de Agenda', 'Procesamiento de Datos', 'Integraciones API'],
        },
        {
          title: 'Chatbots con IA',
          subtitle: 'IA Conversacional Inteligente',
          description:
            'Chatbots personalizados para sitios web o plataformas de mensajería para mejorar la comunicación con clientes y automatizar FAQs.',
          features: ['Chatbots Web', 'Soporte Multiplataforma', 'Automatización de FAQs', 'Flujos de Cliente'],
        },
        {
          title: 'Soluciones Técnicas',
          subtitle: 'Herramientas Digitales a Medida',
          description:
            'Herramientas digitales y soluciones de software personalizadas para necesidades específicas del negocio — desde dashboards hasta apps especializadas.',
          features: ['Dashboards a Medida', 'Herramientas Internas', 'Consultoría de Software', 'Estrategia Digital'],
        },
      ],
    },
    contact: {
      tag: '— ponte en contacto —',
      title: 'Trabajemos',
      titleHighlight: 'Juntos',
      subtitle:
        'Si buscas a alguien que te ayude a construir soluciones digitales modernas, automatizar procesos o desarrollar herramientas de software, no dudes en escribirme.',
      readyTitle: '¿Listo para empezar?',
      readyDesc:
        'Tanto si tienes un proyecto en mente como si quieres explorar posibilidades, estoy abierta a conversaciones sobre nuevas oportunidades.',
      availability: 'Disponible para nuevos proyectos',
      availabilityDesc: 'Actualmente aceptando proyectos freelance y colaboraciones.',
      nameLabel: 'Nombre',
      emailLabel: 'Correo',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@correo.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto o idea...',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje Enviado!',
      successDesc: 'Gracias por escribir. Te responderé lo antes posible.',
      successBtn: 'Enviar otro mensaje',
      errorMsg: 'Algo salió mal. Intenta de nuevo o escríbeme directamente.',
      privacy: 'Tus datos están seguros. Respondo en 24–48 horas.',
      errors: {
        nameRequired: 'El nombre es obligatorio.',
        emailRequired: 'El correo es obligatorio.',
        emailInvalid: 'Correo electrónico inválido.',
        messageRequired: 'El mensaje es obligatorio.',
        messageTooShort: 'El mensaje es muy corto.',
      },
    },
    footer: {
      description:
        'Desarrolladora de Software especializada en soluciones de IA y automatización, aplicaciones web modernas y experiencias digitales inteligentes.',
      navigation: 'Navegación',
      services: 'Servicios',
      copyright: '© Sara Bastidas. Todos los derechos reservados.',
        builtWith: 'Construido con React · Node.js · Tailwind CSS',
    },
  },
};

export default translations;
