/**
 * Translation dictionary for florianronsse.net
 * -------------------------------------------------------------------------
 * The Dutch copy is also hardcoded in index.html so the page reads correctly
 * before JavaScript runs. Keep both languages in sync: every key must exist
 * in `nl` and `en`, and both must say the same thing.
 *
 * Referenced from the HTML through:
 *   data-i18n              -> element.textContent   (element must be a leaf!)
 *   data-i18n-placeholder  -> placeholder attribute
 *   data-i18n-aria-label   -> aria-label attribute
 *   data-i18n-alt          -> alt attribute
 *
 * Loaded before js/main.js, which reads the global `translations`.
 */
const translations = {
  /* ===================================================================== */
  /* Nederlands                                                            */
  /* ===================================================================== */
  nl: {
    /* --- Document metadata (applied by main.js, no DOM element) --- */
    "meta.title": "Florian Ronsse | IT Support en Field Technology",
    "meta.description":
      "Portfolio van Florian Ronsse, IT Support en Field Technology professional uit Oudenaarde. Meer dan drie jaar B2B-supportervaring en een zelfgebouwd homelab met UniFi, Proxmox, Linux en Docker.",
    "meta.ogTitle": "Florian Ronsse | IT Support en Field Technology",
    "meta.ogDescription":
      "IT Support en Field Technology professional uit Oudenaarde. B2B-supportervaring, on-site technische ondersteuning en een zelfgebouwd homelab met UniFi, Proxmox, Linux en Docker.",
    "meta.ogLocale": "nl_BE",

    /* --- Skip link & landmarks --- */
    "skip.link": "Ga naar inhoud",
    "nav.aria": "Hoofdnavigatie",
    "nav.langAria": "Taalkeuze",
    "footer.linksAria": "Footerlinks",

    /* --- Navigation --- */
    "nav.about": "Over mij",
    "nav.experience": "Ervaring",
    "nav.projects": "Projecten",
    "nav.skills": "Vaardigheden",
    "nav.contact": "Contact",
    "nav.github": "GitHub-profiel van Florian Ronsse",
    "nav.linkedin": "LinkedIn-profiel van Florian Ronsse",
    "nav.menuToggle": "Menu openen of sluiten",

    /* --- Hero --- */
    "hero.badge": "Open voor IT-kansen",
    "hero.intro": "Hallo, ik ben Florian Ronsse",
    "hero.title": "IT Support & Field Technology Professional",
    "hero.lead":
      "Ik combineer meer dan drie jaar professionele B2B-supportervaring met hands-on technische ervaring en een zelfgebouwd homelab met UniFi, Proxmox, Linux en Docker.",
    "hero.focus":
      "Mijn focus ligt op IT-support, netwerkondersteuning, systeembeheer en technische operations.",
    "hero.ctaProjects": "Bekijk mijn projecten",
    "hero.ctaCv": "Download mijn cv",
    "hero.ctaGithub": "GitHub",
    "hero.ctaLinkedin": "LinkedIn",

    /* --- Hero visual (infrastructuurkaart) --- */
    "visual.title": "Mijn homelab in het kort",
    "visual.subtitle": "Zelf ontworpen, gebouwd en beheerd",
    "visual.aria":
      "Schematische weergave van een thuisnetwerk: internet naar een cloud gateway, die opgedeeld is in drie VLAN's met daaronder access points en apparaten.",
    "visual.stackNetwork": "Netwerk",
    "visual.stackVirtualisation": "Virtualisatie",
    "visual.stackContainers": "Containers",
    "visual.stackRemote": "Remote toegang",

    /* --- Netwerkdiagram (hero + project 1) --- */
    "diagram.internet": "Internet",
    "diagram.gateway": "Cloud Gateway",
    "diagram.gatewayRole": "Router en firewall",
    "diagram.vlanDefault": "Hoofdnetwerk",
    "diagram.vlanGuest": "Gastnetwerk",
    "diagram.vlanIot": "IoT-netwerk",
    "diagram.vlanDefaultDesc": "Werkstations en servers",
    "diagram.vlanGuestDesc": "Bezoekers, afgeschermd",
    "diagram.vlanIotDesc": "Slimme apparaten, geïsoleerd",
    "diagram.accessPoints": "Access points",
    "diagram.accessPointsDesc": "Wi-Fi 6 en Wi-Fi 7-dekking",
    "diagram.caption":
      "Vereenvoudigde weergave. Er worden bewust geen adressen of apparaatgegevens getoond.",

    /* --- Vertrouwensbalk --- */
    "trust.item1": "3+ jaar professionele B2B IT-support",
    "trust.item2": "UniFi-netwerk en VLAN-ervaring",
    "trust.item3": "Linux, Proxmox en Docker homelab",
    "trust.item4": "Nederlands en Engels",
    "trust.item5": "Regio Oudenaarde, België",
    "trust.item6": "Rijbewijs B",

    /* --- Over mij --- */
    "about.title": "Over mij",
    "about.p1":
      "Ik ben Florian Ronsse, ICT Field Engineer bij Electro Contractors. Drie jaar B2B-softwaresupport bij Cyncly leerde me technische problemen gestructureerd te analyseren: symptomen isoleren, logs en foutmeldingen lezen, en helder terugkoppelen aan zowel technische als niet-technische gebruikers.",
    "about.p2":
      "Wat ik professioneel wil kunnen, bouw ik eerst zelf. Mijn homelab draait op UniFi met VLAN-segmentatie, een Proxmox-hypervisor en een Linux-server met Docker. Zo bouw ik gericht praktijkervaring op richting netwerkondersteuning en systeembeheer.",

    "about.strength1.title": "Probleemanalyse",
    "about.strength1.desc":
      "Symptomen isoleren, logs en foutmeldingen lezen en doorwerken tot de oorzaak, ook als die verder ligt dan de oorspronkelijke vraag.",
    "about.strength2.title": "Klantgerichte IT-support",
    "about.strength2.desc":
      "Drie jaar eerstelijnscontact met B2B-klanten: verwachtingen managen, escaleren waar nodig en technische uitleg vertalen naar begrijpelijke taal.",
    "about.strength3.title": "Hands-on technisch leren",
    "about.strength3.desc":
      "Ik leer door te bouwen en te beheren. Netwerken, virtualisatie en containers maakte ik me eigen door ze thuis zelf op te zetten en draaiende te houden.",

    "about.factsTitle": "In het kort",
    "about.fact1Label": "Locatie",
    "about.fact1": "Oudenaarde, België",
    "about.fact2Label": "Focus",
    "about.fact2": "IT Support, Networking, System Administration",
    "about.fact3Label": "Talen",
    "about.fact3": "Nederlands en Engels",
    "about.fact4Label": "Rijbewijs",
    "about.fact4": "B",
    "about.fact5Label": "Huidige rol",
    "about.fact5": "ICT Field Engineer",

    /* --- Werkervaring --- */
    "experience.title": "Ervaring",
    "experience.intro":
      "Van installatietechniek en logistiek naar B2B-softwaresupport en on-site technische ondersteuning.",

    "experience.xp1.period": "2026 tot heden",
    "experience.xp1.role": "ICT Field Engineer",
    "experience.xp1.org": "Electro Contractors",
    "experience.xp1.desc":
      "On-site technische ondersteuning, installatie en troubleshooting in klantomgevingen. De functie combineert klantcontact, praktische installatiewerkzaamheden, bekabeling, hardware en technische configuraties, met een groeiende focus op IT, netwerkondersteuning en systeemintegratie.",
    "experience.xp1.tag1": "On-site support",
    "experience.xp1.tag2": "Installatie en bekabeling",
    "experience.xp1.tag3": "Hardware",
    "experience.xp1.tag4": "Klantcontact",

    "experience.xp2.period": "Nov 2022 tot 2026",
    "experience.xp2.role": "Support Agent",
    "experience.xp2.org": "Cyncly (voorheen Compusoft)",
    "experience.xp2.desc":
      "Eerstelijns aanspreekpunt voor technische issues in B2B-klantomgevingen. Diagnose van uiteenlopende softwareproblemen, analyse van logs en foutmeldingen, en samenwerking met het ontwikkelingsteam bij escalaties. Supportcases werden gedocumenteerd in het ticketingsysteem.",
    "experience.xp2.tag1": "B2B support",
    "experience.xp2.tag2": "Ticketing en escalatie",
    "experience.xp2.tag3": "Loganalyse",
    "experience.xp2.tag4": "Root cause analysis",

    "experience.xp3.period": "2019 tot 2022",
    "experience.xp3.role": "Logistiek medewerker en IT-ondersteuning",
    "experience.xp3.org": "Wit-Gele Kruis Oost-Vlaanderen",
    "experience.xp3.desc":
      "Uitrol en configuratie van tablets voor verpleegkundigen en koppeling in het centrale systeem. Beheer van de hardwarevoorraad: defecte toestellen analyseren en werkende onderdelen hergebruiken.",
    "experience.xp3.tag1": "Device deployment",
    "experience.xp3.tag2": "Configuratie",
    "experience.xp3.tag3": "Hardwarebeheer",
    "experience.xp3.tag4": "Voorraadbeheer",

    "experience.xp4.period": "2019",
    "experience.xp4.role": "Stage installatietechniek",
    "experience.xp4.org": "Vanaudenaerde, Oudenaarde",
    "experience.xp4.desc":
      "Installatie van verwarmingsinstallaties, zonnepanelen en elektrische voorzieningen. De basis van mijn hands-on ervaring met werken op locatie.",
    "experience.xp4.tag1": "Elektrische installaties",
    "experience.xp4.tag2": "Verwarmingstechniek",
    "experience.xp4.tag3": "Zonnepanelen",
    "experience.xp4.tag4": "Werken op locatie",

    /* --- Projecten --- */
    "projects.title": "Projecten",
    "projects.intro":
      "Mijn homelab is mijn portfolio in uitvoering: zelf ontworpen, gebouwd en beheerd. Elk project is beschreven zoals in het werkveld, met situatie, aanpak, resultaat en wat ik eruit meenam.",
    "projects.labelSituation": "Situatie",
    "projects.labelApproach": "Aanpak",
    "projects.labelResult": "Resultaat",
    "projects.labelLearned": "Wat ik ervan leerde",
    "projects.techLabel": "Gebruikte technologieën",

    "projects.p1.title": "UniFi-netwerk met VLAN-segmentatie",
    "projects.p1.summary":
      "Een thuisnetwerk opnieuw opgebouwd rond UniFi, met aparte VLAN's voor het hoofdnetwerk, gasten en IoT-apparaten.",
    "projects.p1.situation":
      "Een standaard thuisnetwerk volstond niet meer: slimme apparaten, gasten en mijn eigen servers zaten samen op één netwerk, zonder overzicht of controle.",
    "projects.p1.approach":
      "Het netwerk opgebouwd rond een UniFi Cloud Gateway als centrale router en firewall, met drie access points voor volledige Wi-Fi 6- en Wi-Fi 7-dekking. Het netwerk opgedeeld in drie VLAN's, hoofdnetwerk, gasten en IoT, met firewallregels die het verkeer tussen die zones beperken. DNS en DHCP, monitoring en firmwarebeheer lopen centraal via de UniFi Controller.",
    "projects.p1.result":
      "Een netwerk waarin IoT-apparaten en gasten afgeschermd zijn van het hoofdnetwerk, en waarin ik vanuit één interface zie wat er draait, updates uitrol en firewallregels beheer.",
    "projects.p1.learned":
      "Hoe segmentatie, firewallregels en DNS/DHCP in de praktijk samenhangen, en waarom een netwerk pas echt beheersbaar wordt als je het opdeelt en centraal kan monitoren.",
    "projects.p1.diagramTitle": "Opbouw van het netwerk",
    "projects.p1.mediaLabel": "Screenshot: UniFi-dashboard",

    "projects.p2.title": "Proxmox- en Linux-homeserver",
    "projects.p2.summary":
      "Een Proxmox-hypervisor als testlab, naast een Linux-server die dagelijkse diensten draait in Docker-containers.",
    "projects.p2.situation":
      "Ik wilde Linux-distributies en serverdiensten kunnen testen zonder telkens fysieke hardware te herinstalleren, én een server die betrouwbaar genoeg is voor dagelijks gebruik.",
    "projects.p2.approach":
      "Een Proxmox-hypervisor opgezet voor het beheren van virtuele machines en het testen van meerdere Linux-distributies in een gecontroleerde labomgeving. Daarnaast een Linux-homeserver ingericht die 24/7 draait, met een Jellyfin-mediaserver en meerdere diensten in Docker-containers, beheerd via Docker Compose.",
    "projects.p2.result":
      "Een stabiele labomgeving om in te experimenteren én een server waar dagelijks op gerekend wordt, met praktijkervaring in virtualisatie, containerbeheer en Linux-serveronderhoud.",
    "projects.p2.learned":
      "Virtualisatie en containers beheren in de praktijk: images en volumes, updates uitrollen zonder de diensten te breken, en problemen oplossen op een server die effectief in gebruik is.",
    "projects.p2.mediaLabel": "Screenshot: Proxmox-dashboard",
    "projects.p2.mediaLabel2": "Foto: homelab-opstelling",

    "projects.p3.title": "Veilige remote toegang en domotica",
    "projects.p3.summary":
      "Remote toegang tot de thuisinfrastructuur via Tailscale, zonder poorten open te zetten naar het internet.",
    "projects.p3.situation":
      "Thuisdiensten zoals de NAS en Home Assistant moesten van buitenshuis bereikbaar zijn, maar poorten openzetten naar het internet wilde ik vermijden.",
    "projects.p3.approach":
      "Tailscale geconfigureerd voor versleutelde remote toegang tot de NAS en de Raspberry Pi vanaf elke locatie, in plaats van port forwarding. Op diezelfde Raspberry Pi draait Home Assistant voor domotica-automatisering.",
    "projects.p3.result":
      "Toegang tot NAS en Home Assistant vanaf elke locatie over een versleutelde verbinding, met beperkte publieke blootstelling omdat er geen poorten naar het internet openstaan. Netwerk- en systeembeveiliging is mijn volgende leerdoel.",
    "projects.p3.learned":
      "Waarom een overlay-VPN in veel gevallen een veiliger opzet is dan port forwarding, en hoe je remote toegang praktisch houdt zonder de deur wijd open te zetten.",
    "projects.p3.mediaLabel": "Screenshot: Home Assistant",

    /* --- Vaardigheden --- */
    "skills.title": "Vaardigheden",
    "skills.intro":
      "Een realistisch overzicht van waar ik vandaag mee werk, opgebouwd in mijn job en in mijn homelab.",

    "skills.support.title": "IT Support",
    "skills.support.desc":
      "Gebruikers en klantomgevingen ondersteunen: problemen diagnosticeren, escaleren waar nodig en helder terugkoppelen.",
    "skills.support.tag3": "Linux desktop en server",
    "skills.support.tag4": "B2B support",
    "skills.support.tag5": "Ticketing",
    "skills.support.tag6": "Escalatie",
    "skills.support.tag7": "Loganalyse",
    "skills.support.tag8": "Hardware troubleshooting",

    "skills.network.title": "Networking",
    "skills.network.desc":
      "Netwerken opzetten, segmenteren en beheren, in de praktijk opgebouwd met UniFi-apparatuur.",
    "skills.network.tag2": "VLAN-segmentatie",
    "skills.network.tag5": "Routing",
    "skills.network.tag6": "Firewallbasis",

    "skills.systems.title": "Systems & Infrastructure",
    "skills.systems.desc":
      "Servers, virtualisatie en containers: opzetten, draaiende houden en onderhouden.",

    "skills.tools.title": "Tools & Learning",
    "skills.tools.desc":
      "Wat ik gebruik om werk vast te leggen en waar ik me momenteel verder in verdiep.",
    "skills.tools.tag4": "Python (in ontwikkeling)",
    "skills.tools.tag5": "Technische documentatie",
    "skills.tools.tag6": "Root cause analysis",

    /* --- Roundfair --- */
    "roundfair.intro":
      "Naast mijn werk en mijn homelab bouw ik aan een eigen iOS-app.",
    "roundfair.logoAlt": "Logo van de Roundfair-app",
    "roundfair.tagline": "Eigen iOS-project, in ontwikkeling",
    "roundfair.title": "Eerlijk rondjes en kosten verdelen, zonder discussie",
    "roundfair.what":
      "Roundfair is een eigen iOS-project waarmee groepen kunnen bijhouden wie een rondje betaalde en gezamenlijke kosten eerlijk kunnen verdelen.",
    "roundfair.learnTitle": "Wat ik ermee leer",
    "roundfair.learn1": "Productdenken",
    "roundfair.learn2": "UX en UI",
    "roundfair.learn3": "iOS-ontwikkeling",
    "roundfair.learn4": "Testen",
    "roundfair.learn5": "Publicatieproces",
    "roundfair.learn6": "Documentatie",
    "roundfair.learn7": "Iteratief ontwikkelen",
    "roundfair.cta": "Bekijk roundfair.support",
    "roundfair.soon": "Binnenkort beschikbaar in de App Store",

    /* --- Contact --- */
    "contact.title": "Contact",
    "contact.pitchTitle": "Laten we kennismaken",
    "contact.pitch":
      "Heb je een vraag over mijn ervaring, mijn projecten of een passende IT-kans? Neem gerust contact op via LinkedIn of het formulier.",
    "contact.linksTitle": "Waar je me vindt",
    "contact.linkedinBtn": "Connecteer op LinkedIn",
    "contact.githubBtn": "Bekijk mijn GitHub",
    "contact.roundfairBtn": "Bekijk Roundfair",

    "contact.form.name": "Naam",
    "contact.form.namePh": "Uw naam",
    "contact.form.email": "E-mailadres",
    "contact.form.emailPh": "naam@bedrijf.be",
    "contact.form.message": "Bericht",
    "contact.form.messagePh": "Waarmee kan ik u helpen?",
    "contact.form.submit": "Verstuur bericht",
    "contact.form.sending": "Bezig met verzenden…",
    "contact.form.success": "Bedankt, uw bericht is verzonden. Ik antwoord zo snel mogelijk.",
    "contact.form.error":
      "Er ging iets mis bij het verzenden. Probeer het later opnieuw of neem contact op via LinkedIn.",
    "contact.form.errName": "Vul uw naam in.",
    "contact.form.errEmail": "Vul een geldig e-mailadres in.",
    "contact.form.errMessage": "Schrijf een kort bericht.",
    "contact.form.errTooFast": "Even geduld, probeer het over enkele seconden opnieuw.",

    /* --- Footer --- */
    "footer.tagline": "IT Support & Field Technology",
    "footer.backToTop": "Terug naar boven"
  },

  /* ===================================================================== */
  /* English                                                               */
  /* ===================================================================== */
  en: {
    /* --- Document metadata (applied by main.js, no DOM element) --- */
    "meta.title": "Florian Ronsse | IT Support & Field Technology",
    "meta.description":
      "Portfolio of Florian Ronsse, IT Support and Field Technology professional based in Oudenaarde, Belgium. Over three years of B2B support experience and a self-built homelab running UniFi, Proxmox, Linux and Docker.",
    "meta.ogTitle": "Florian Ronsse | IT Support & Field Technology",
    "meta.ogDescription":
      "IT Support and Field Technology professional based in Oudenaarde, Belgium. B2B support experience, on-site technical support and a self-built homelab running UniFi, Proxmox, Linux and Docker.",
    "meta.ogLocale": "en_US",

    /* --- Skip link & landmarks --- */
    "skip.link": "Skip to content",
    "nav.aria": "Main navigation",
    "nav.langAria": "Language selection",
    "footer.linksAria": "Footer links",

    /* --- Navigation --- */
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.github": "GitHub profile of Florian Ronsse",
    "nav.linkedin": "LinkedIn profile of Florian Ronsse",
    "nav.menuToggle": "Open or close menu",

    /* --- Hero --- */
    "hero.badge": "Open to IT opportunities",
    "hero.intro": "Hello, I'm Florian Ronsse",
    "hero.title": "IT Support & Field Technology Professional",
    "hero.lead":
      "I combine more than three years of professional B2B support experience with hands-on technical work and a self-built homelab running UniFi, Proxmox, Linux and Docker.",
    "hero.focus":
      "My focus is on IT support, network support, systems administration and technical operations.",
    "hero.ctaProjects": "View my projects",
    "hero.ctaCv": "Download my CV",
    "hero.ctaGithub": "GitHub",
    "hero.ctaLinkedin": "LinkedIn",

    /* --- Hero visual (infrastructure card) --- */
    "visual.title": "My homelab at a glance",
    "visual.subtitle": "Designed, built and maintained myself",
    "visual.aria":
      "Schematic view of a home network: internet to a cloud gateway, split into three VLANs with access points and devices below them.",
    "visual.stackNetwork": "Network",
    "visual.stackVirtualisation": "Virtualisation",
    "visual.stackContainers": "Containers",
    "visual.stackRemote": "Remote access",

    /* --- Network diagram (hero + project 1) --- */
    "diagram.internet": "Internet",
    "diagram.gateway": "Cloud Gateway",
    "diagram.gatewayRole": "Router and firewall",
    "diagram.vlanDefault": "Main network",
    "diagram.vlanGuest": "Guest network",
    "diagram.vlanIot": "IoT network",
    "diagram.vlanDefaultDesc": "Workstations and servers",
    "diagram.vlanGuestDesc": "Visitors, kept separate",
    "diagram.vlanIotDesc": "Smart devices, isolated",
    "diagram.accessPoints": "Access points",
    "diagram.accessPointsDesc": "Wi-Fi 6 and Wi-Fi 7 coverage",
    "diagram.caption":
      "Simplified view. No addresses or device details are shown, by design.",

    /* --- Trust bar --- */
    "trust.item1": "3+ years of professional B2B IT support",
    "trust.item2": "UniFi network and VLAN experience",
    "trust.item3": "Linux, Proxmox and Docker homelab",
    "trust.item4": "Dutch and English",
    "trust.item5": "Oudenaarde region, Belgium",
    "trust.item6": "Driving licence B",

    /* --- About --- */
    "about.title": "About me",
    "about.p1":
      "I'm Florian Ronsse, ICT Field Engineer at Electro Contractors. Three years of B2B software support at Cyncly taught me to analyse technical problems methodically: isolating symptoms, reading logs and error messages, and reporting back clearly to technical and non-technical users alike.",
    "about.p2":
      "Whatever I want to do professionally, I build myself first. My homelab runs UniFi with VLAN segmentation, a Proxmox hypervisor and a Linux server with Docker. That is how I build practical experience towards network support and systems administration.",

    "about.strength1.title": "Problem analysis",
    "about.strength1.desc":
      "Isolating symptoms, reading logs and error messages and working through to the root cause, even when it turns out to sit beyond the original question.",
    "about.strength2.title": "Customer-focused IT support",
    "about.strength2.desc":
      "Three years of first-line contact with B2B customers: managing expectations, escalating where needed and translating technical detail into plain language.",
    "about.strength3.title": "Hands-on technical learning",
    "about.strength3.desc":
      "I learn by building and maintaining. I picked up networking, virtualisation and containers by setting them up at home and keeping them running.",

    "about.factsTitle": "At a glance",
    "about.fact1Label": "Location",
    "about.fact1": "Oudenaarde, Belgium",
    "about.fact2Label": "Focus",
    "about.fact2": "IT Support, Networking, System Administration",
    "about.fact3Label": "Languages",
    "about.fact3": "Dutch and English",
    "about.fact4Label": "Driving licence",
    "about.fact4": "B",
    "about.fact5Label": "Current role",
    "about.fact5": "ICT Field Engineer",

    /* --- Experience --- */
    "experience.title": "Experience",
    "experience.intro":
      "From installation technology and logistics to B2B software support and on-site technical support.",

    "experience.xp1.period": "2026 to present",
    "experience.xp1.role": "ICT Field Engineer",
    "experience.xp1.org": "Electro Contractors",
    "experience.xp1.desc":
      "On-site technical support, installation and troubleshooting in customer environments. The role combines customer communication, hands-on installation work, cabling, hardware and technical configuration, with a growing focus on IT, network support and system integration.",
    "experience.xp1.tag1": "On-site support",
    "experience.xp1.tag2": "Installation and cabling",
    "experience.xp1.tag3": "Hardware",
    "experience.xp1.tag4": "Customer contact",

    "experience.xp2.period": "Nov 2022 to 2026",
    "experience.xp2.role": "Support Agent",
    "experience.xp2.org": "Cyncly (formerly Compusoft)",
    "experience.xp2.desc":
      "First-line point of contact for technical issues in B2B customer environments. Diagnosing a wide range of software problems, analysing logs and error messages, and working with the development team on escalations. Support cases were documented in the ticketing system.",
    "experience.xp2.tag1": "B2B support",
    "experience.xp2.tag2": "Ticketing and escalation",
    "experience.xp2.tag3": "Log analysis",
    "experience.xp2.tag4": "Root cause analysis",

    "experience.xp3.period": "2019 to 2022",
    "experience.xp3.role": "Logistics Assistant and IT Support",
    "experience.xp3.org": "Wit-Gele Kruis Oost-Vlaanderen",
    "experience.xp3.desc":
      "Deployment and configuration of tablets for nursing staff and onboarding them into the central system. Hardware inventory management: analysing defective devices and reusing working components.",
    "experience.xp3.tag1": "Device deployment",
    "experience.xp3.tag2": "Configuration",
    "experience.xp3.tag3": "Hardware management",
    "experience.xp3.tag4": "Inventory management",

    "experience.xp4.period": "2019",
    "experience.xp4.role": "Internship, installation technology",
    "experience.xp4.org": "Vanaudenaerde, Oudenaarde",
    "experience.xp4.desc":
      "Installation of heating systems, solar panels and electrical infrastructure. The foundation of my hands-on experience working on site.",
    "experience.xp4.tag1": "Electrical installations",
    "experience.xp4.tag2": "Heating systems",
    "experience.xp4.tag3": "Solar panels",
    "experience.xp4.tag4": "On-site work",

    /* --- Projects --- */
    "projects.title": "Projects",
    "projects.intro":
      "My homelab is my portfolio in progress: designed, built and maintained by myself. Each project is described the way it would be at work, with situation, approach, result and what I took away from it.",
    "projects.labelSituation": "Situation",
    "projects.labelApproach": "Approach",
    "projects.labelResult": "Result",
    "projects.labelLearned": "What I learned",
    "projects.techLabel": "Technologies used",

    "projects.p1.title": "UniFi network with VLAN segmentation",
    "projects.p1.summary":
      "Rebuilt a home network around UniFi, with separate VLANs for the main network, guests and IoT devices.",
    "projects.p1.situation":
      "A standard home network no longer did the job: smart devices, guests and my own servers all shared a single network, with no overview and no control.",
    "projects.p1.approach":
      "Built the network around a UniFi Cloud Gateway acting as central router and firewall, with three access points for full Wi-Fi 6 and Wi-Fi 7 coverage. Split the network into three VLANs, main, guest and IoT, with firewall rules limiting traffic between those zones. DNS and DHCP, monitoring and firmware management all run centrally through the UniFi Controller.",
    "projects.p1.result":
      "A network where IoT devices and guests are kept separate from the main network, and where a single interface shows me what is running, rolls out updates and manages firewall rules.",
    "projects.p1.learned":
      "How segmentation, firewall rules and DNS/DHCP fit together in practice, and why a network only becomes genuinely manageable once you divide it up and can monitor it centrally.",
    "projects.p1.diagramTitle": "How the network is set up",
    "projects.p1.mediaLabel": "Screenshot: UniFi dashboard",

    "projects.p2.title": "Proxmox and Linux home server",
    "projects.p2.summary":
      "A Proxmox hypervisor as a test lab, alongside a Linux server running everyday services in Docker containers.",
    "projects.p2.situation":
      "I wanted to test Linux distributions and server services without reinstalling physical hardware every time, plus a server reliable enough for daily use.",
    "projects.p2.approach":
      "Set up a Proxmox hypervisor for managing virtual machines and testing several Linux distributions in a controlled lab environment. Alongside it, built a Linux home server running 24/7, with a Jellyfin media server and several services in Docker containers, managed through Docker Compose.",
    "projects.p2.result":
      "A stable lab environment to experiment in, plus a server that gets relied on daily, giving me practical experience in virtualisation, container management and Linux server maintenance.",
    "projects.p2.learned":
      "Managing virtualisation and containers in practice: images and volumes, rolling out updates without breaking services, and troubleshooting a server that is actually in use.",
    "projects.p2.mediaLabel": "Screenshot: Proxmox dashboard",
    "projects.p2.mediaLabel2": "Photo: homelab setup",

    "projects.p3.title": "Secure remote access and home automation",
    "projects.p3.summary":
      "Remote access to my home infrastructure through Tailscale, without opening ports to the internet.",
    "projects.p3.situation":
      "Home services such as the NAS and Home Assistant needed to be reachable from outside, but I wanted to avoid opening ports to the internet.",
    "projects.p3.approach":
      "Configured Tailscale for encrypted remote access to the NAS and the Raspberry Pi from any location, instead of port forwarding. That same Raspberry Pi runs Home Assistant for home automation.",
    "projects.p3.result":
      "Access to the NAS and Home Assistant from anywhere over an encrypted connection, with public exposure kept limited because no ports are open to the internet. Network and systems security is my next learning goal.",
    "projects.p3.learned":
      "Why an overlay VPN is in many cases a safer setup than port forwarding, and how to keep remote access practical without leaving the door wide open.",
    "projects.p3.mediaLabel": "Screenshot: Home Assistant",

    /* --- Skills --- */
    "skills.title": "Skills",
    "skills.intro":
      "A realistic overview of what I work with today, built up through my job and my homelab.",

    "skills.support.title": "IT Support",
    "skills.support.desc":
      "Supporting users and customer environments: diagnosing problems, escalating where needed and reporting back clearly.",
    "skills.support.tag3": "Linux desktop and server",
    "skills.support.tag4": "B2B support",
    "skills.support.tag5": "Ticketing",
    "skills.support.tag6": "Escalation",
    "skills.support.tag7": "Log analysis",
    "skills.support.tag8": "Hardware troubleshooting",

    "skills.network.title": "Networking",
    "skills.network.desc":
      "Setting up, segmenting and managing networks, built up hands-on with UniFi equipment.",
    "skills.network.tag2": "VLAN segmentation",
    "skills.network.tag5": "Routing",
    "skills.network.tag6": "Firewall fundamentals",

    "skills.systems.title": "Systems & Infrastructure",
    "skills.systems.desc":
      "Servers, virtualisation and containers: setting them up, keeping them running and maintaining them.",

    "skills.tools.title": "Tools & Learning",
    "skills.tools.desc":
      "What I use to document my work, and what I am currently going deeper into.",
    "skills.tools.tag4": "Python (learning)",
    "skills.tools.tag5": "Technical documentation",
    "skills.tools.tag6": "Root cause analysis",

    /* --- Roundfair --- */
    "roundfair.intro":
      "Alongside my job and my homelab, I am building my own iOS app.",
    "roundfair.logoAlt": "Logo of the Roundfair app",
    "roundfair.tagline": "Personal iOS project, in development",
    "roundfair.title": "Splitting rounds and costs fairly, without the discussion",
    "roundfair.what":
      "Roundfair is a personal iOS project that lets groups keep track of who paid for a round and split shared costs fairly.",
    "roundfair.learnTitle": "What I'm learning from it",
    "roundfair.learn1": "Product thinking",
    "roundfair.learn2": "UX and UI",
    "roundfair.learn3": "iOS development",
    "roundfair.learn4": "Testing",
    "roundfair.learn5": "Release process",
    "roundfair.learn6": "Documentation",
    "roundfair.learn7": "Iterative development",
    "roundfair.cta": "Visit roundfair.support",
    "roundfair.soon": "Coming soon to the App Store",

    /* --- Contact --- */
    "contact.title": "Contact",
    "contact.pitchTitle": "Let's connect",
    "contact.pitch":
      "Do you have a question about my experience, my projects or a matching IT opportunity? Feel free to get in touch through LinkedIn or the form.",
    "contact.linksTitle": "Where to find me",
    "contact.linkedinBtn": "Connect on LinkedIn",
    "contact.githubBtn": "View my GitHub",
    "contact.roundfairBtn": "View Roundfair",

    "contact.form.name": "Name",
    "contact.form.namePh": "Your name",
    "contact.form.email": "Email address",
    "contact.form.emailPh": "name@company.com",
    "contact.form.message": "Message",
    "contact.form.messagePh": "How can I help you?",
    "contact.form.submit": "Send message",
    "contact.form.sending": "Sending…",
    "contact.form.success": "Thank you, your message has been sent. I'll reply as soon as I can.",
    "contact.form.error":
      "Something went wrong while sending. Please try again later or reach out via LinkedIn.",
    "contact.form.errName": "Please enter your name.",
    "contact.form.errEmail": "Please enter a valid email address.",
    "contact.form.errMessage": "Please write a short message.",
    "contact.form.errTooFast": "One moment, please try again in a few seconds.",

    /* --- Footer --- */
    "footer.tagline": "IT Support & Field Technology",
    "footer.backToTop": "Back to top"
  }
};
