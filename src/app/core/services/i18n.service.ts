import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'es' | 'en';

export interface Translations {
  // Nav
  navHome: string;
  navDestinations: string;
  navWhyUs: string;
  navFleet: string;
  navDestinationsList: string;
  navReviews: string;
  navFaq: string;
  navContact: string;
  slogan: string;
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroText: string;
  btnGetQuote: string;
  btnBookWhatsApp: string;
  // Quick form
  formFrom: string;
  formTo: string;
  formDate: string;
  formTime: string;
  formPassengers: string;
  formLuggage: string;
  btnCheckAvailability: string;
  // Popular routes
  popularRoutesTitle: string;
  routeConsult: string;
  hours: string;
  // Why choose us
  whyChooseUsTitle: string;
  whyExperience: string;
  whyExperienceDesc: string;
  whyLocalDrivers: string;
  whyLocalDriversDesc: string;
  whyComfortable: string;
  whyComfortableDesc: string;
  whyPrivate: string;
  whyPrivateDesc: string;
  // Fleet
  fleetTitle: string;
  fleetHilux: string;
  fleetHiluxDesc: string;
  fleetSprinter: string;
  fleetSprinterDesc: string;
  fleetSuv: string;
  fleetSuvDesc: string;
  capacity: string;
  // Services & Destinations
  servicesTitle: string;
  servicesDescLine1: string;
  servicesDescLine2: string;
  servicesDescLine3: string;
  servicesConsultUs: string;
  servicesConsultUsExtra: string;
  destinationsTitle: string;
  // Reviews
  reviewsTitle: string;
  // FAQ
  faqTitle: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
  faqQ3: string;
  faqA3: string;
  faqQ4: string;
  faqA4: string;
  // Contact
  contactTitle: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactMessagePlaceholder: string;
  btnSendInquiry: string;
  sending: string;
  // Footer
  footerBookings: string;
  footerFollow: string;
  // WhatsApp floating
  whatsappFloatingText: string;
  whatsappDefaultMessage: string;
}

const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    navHome: 'Home',
    navDestinations: 'Destinations',
    navWhyUs: 'Why Us',
    navFleet: 'Fleet',
    navDestinationsList: 'Destinations',
    navReviews: 'Reviews',
    navFaq: 'FAQ',
    navContact: 'Contact',
    slogan: 'Exploring Patagonia since 2014',
    heroTitle: 'Private Transfers in Patagonia',
    heroSubtitle: 'El Calafate – El Chaltén – Glaciers',
    heroText: 'Private and comfortable transfers with local experienced drivers.',
    btnGetQuote: 'Get a Quote',
    btnBookWhatsApp: 'Book via WhatsApp',
    formFrom: 'From',
    formTo: 'To',
    formDate: 'Date',
    formTime: 'Time',
    formPassengers: 'Passengers',
    formLuggage: 'Type of luggage',
    btnCheckAvailability: 'Check availability',
    popularRoutesTitle: 'Popular Routes',
    routeConsult: 'Inquire',
    hours: 'hours',
    whyChooseUsTitle: 'Why Choose Us',
    whyExperience: '10+ Years of Experience',
    whyExperienceDesc: 'Operating in Patagonia since 2014.',
    whyLocalDrivers: 'Local Drivers',
    whyLocalDriversDesc: 'Drivers with deep knowledge of the region.',
    whyComfortable: 'Comfortable Vehicles',
    whyComfortableDesc: 'Spacious and safe vehicles.',
    whyPrivate: 'Private Transfers',
    whyPrivateDesc: 'Direct service without stops.',
    fleetTitle: 'Our Fleet',
    fleetHilux: 'Toyota Hilux 4x4',
    fleetHiluxDesc: 'Ideal for mountain roads and trekking trips.',
    fleetSprinter: 'Mercedes Sprinter Van',
    fleetSprinterDesc: 'Perfect for groups up to 15 passengers.',
    fleetSuv: 'Private SUV',
    fleetSuvDesc: 'Comfortable transport for small groups.',
    capacity: 'Capacity',
    servicesTitle: 'Services',
    servicesDescLine1: 'All services are private.',
    servicesDescLine2: 'Punctual, safe and with',
    servicesDescLine3: 'experienced local drivers.',
    servicesConsultUs: 'Contact us:',
    servicesConsultUsExtra: 'Estancias, programs and others!',
    destinationsTitle: 'Destinations',
    reviewsTitle: 'Reviews',
    faqTitle: 'Frequently Asked Questions',
    faqQ1: 'How long does the trip from El Calafate to El Chaltén take?',
    faqA1: 'Approximately 3 hours.',
    faqQ2: 'Do you accept trekking equipment?',
    faqA2: 'Yes, luggage for trekking and climbing is allowed.',
    faqQ3: 'Can I pay with credit card?',
    faqA3: 'Yes, payment methods can be arranged during booking.',
    faqQ4: 'Do you offer private transfers?',
    faqA4: 'Yes, all our services are private.',
    contactTitle: 'Contact / Book',
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactMessagePlaceholder: 'Please include:\nOrigin and destination\nDate and time\nNumber of passengers\nType of luggage (trekking, climbing, ski)',
    btnSendInquiry: 'Send Inquiry',
    sending: 'Sending...',
    footerBookings: 'Inquiries / Bookings',
    footerFollow: 'Follow us',
    whatsappFloatingText: 'Book via WhatsApp',
    whatsappDefaultMessage: 'Hello, I would like to ask about a transfer in El Chaltén.',
  },
  es: {
    navHome: 'Inicio',
    navDestinations: 'Destinos',
    navWhyUs: 'Por qué nosotros',
    navFleet: 'Flota',
    navDestinationsList: 'Destinos',
    navReviews: 'Opiniones',
    navFaq: 'Preguntas frecuentes',
    navContact: 'Contacto',
    slogan: 'Desde 2014 recorriendo Patagonia',
    heroTitle: 'Transfers privados en Patagonia',
    heroSubtitle: 'El Calafate – El Chaltén – Glaciares',
    heroText: 'Transfers privados y cómodos con conductores locales experimentados.',
    btnGetQuote: 'Pedir presupuesto',
    btnBookWhatsApp: 'Reservar por WhatsApp',
    formFrom: 'Origen',
    formTo: 'Destino',
    formDate: 'Fecha',
    formTime: 'Hora',
    formPassengers: 'Pasajeros',
    formLuggage: 'Tipo de equipaje',
    btnCheckAvailability: 'Consultar disponibilidad',
    popularRoutesTitle: 'Rutas populares',
    routeConsult: 'Consultar',
    hours: 'horas',
    whyChooseUsTitle: 'Por qué elegirnos',
    whyExperience: 'Más de 10 años de experiencia',
    whyExperienceDesc: 'Operando en Patagonia desde 2014.',
    whyLocalDrivers: 'Choferes locales',
    whyLocalDriversDesc: 'Conductores con amplio conocimiento de la región.',
    whyComfortable: 'Vehículos cómodos',
    whyComfortableDesc: 'Vehículos amplios y seguros.',
    whyPrivate: 'Transfers privados',
    whyPrivateDesc: 'Servicio directo sin paradas.',
    fleetTitle: 'Nuestra flota',
    fleetHilux: 'Toyota Hilux 4x4',
    fleetHiluxDesc: 'Ideal para caminos de montaña y trekking.',
    fleetSprinter: 'Mercedes Sprinter Van',
    fleetSprinterDesc: 'Perfecto para grupos de hasta 15 pasajeros.',
    fleetSuv: 'SUV privado',
    fleetSuvDesc: 'Transporte cómodo para grupos pequeños.',
    capacity: 'Capacidad',
    servicesTitle: 'Servicios',
    servicesDescLine1: 'Todos los servicios son en privado.',
    servicesDescLine2: 'Puntuales, seguros y con choferes',
    servicesDescLine3: 'locales experimentados.',
    servicesConsultUs: 'Consultanos:',
    servicesConsultUsExtra: 'Estancias, programas y otros!',
    destinationsTitle: 'Destinos',
    reviewsTitle: 'Opiniones',
    faqTitle: 'Preguntas frecuentes',
    faqQ1: '¿Cuánto tarda el viaje de El Calafate a El Chaltén?',
    faqA1: 'Aproximadamente 3 horas.',
    faqQ2: '¿Aceptan equipaje de trekking?',
    faqA2: 'Sí, equipaje para trekking y escalada está permitido.',
    faqQ3: '¿Puedo pagar con tarjeta de crédito?',
    faqA3: 'Sí, los métodos de pago se acuerdan al reservar.',
    faqQ4: '¿Ofrecen transfers privados?',
    faqA4: 'Sí, todos nuestros servicios son privados.',
    contactTitle: 'Contacto / Reserva',
    contactName: 'Nombre',
    contactEmail: 'Email',
    contactMessage: 'Mensaje',
    contactMessagePlaceholder: 'Por favor incluir:\nOrigen y destino\nFecha y hora\nCantidad de pasajeros\nTipo de equipaje (trekking, escalada, esquí)',
    btnSendInquiry: 'Enviar consulta',
    sending: 'Enviando...',
    footerBookings: 'Consultas / Reservas',
    footerFollow: 'Seguinos',
    whatsappFloatingText: 'Reservar por WhatsApp',
    whatsappDefaultMessage: 'Hola, me gustaría consultar por un transfer en El Chaltén.',
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly currentLang = signal<Lang>('en');

  readonly lang = this.currentLang.asReadonly();
  readonly t = computed(() => TRANSLATIONS[this.currentLang()]);

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
  }

  toggleLang(): void {
    this.currentLang.update((l) => (l === 'en' ? 'es' : 'en'));
  }
}
