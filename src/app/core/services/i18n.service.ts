import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'el-chalten-lang';

export interface Translations {
  // Nav
  navHome: string;
  navDestinations: string;
  navServices: string;
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
  heroSlides: { h1: string; p: string }[];
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
  servicesSubtitle: string;
  servicesBody: string;
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
  contactPhone: string;
  contactMessage: string;
  contactMessagePlaceholder: string;
  btnSendInquiry: string;
  sending: string;
  contactSuccess: string;
  contactError: string;
  luggageTrekking: string;
  luggageClimbing: string;
  luggageSki: string;
  luggageTourism: string;
  luggageOther: string;
  contactAdditionalNotes: string;
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
    navServices: 'Services',
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
    heroSlides: [
      { h1: 'Track Record', p: 'Over 10 years exploring the south' },
      { h1: 'Safety', p: 'Units equipped for the Patagonian climate' },
      { h1: 'Punctuality', p: 'Your itinerary is sacred to us' },
      { h1: 'Comfort', p: 'Long-distance travel without fatigue' },
      { h1: 'Experience', p: 'We know every corner of the route' },
      { h1: 'Landscapes', p: 'Enjoy the view while we drive' },
      { h1: 'Commitment', p: 'Quality service in every mile' },
    ],
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
    servicesSubtitle: 'Punctuality, Safety and Local Experience',
    servicesBody: 'With years of experience in the sector, we specialize in point-to-point transport solutions. Our track record makes us the trusted strategic partner for tourism agencies, corporate groups and private transfers, always guaranteeing distinction on every journey.',
    servicesConsultUs: 'Contact us:',
    servicesConsultUsExtra: 'Hotels, Estancias, programs and more!',
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
    contactPhone: 'Phone',
    contactMessage: 'Message',
    contactMessagePlaceholder: 'Write your message here. Include origin, destination, date, passengers and any details.',
    btnSendInquiry: 'Send Inquiry',
    sending: 'Sending...',
    contactSuccess: 'Thank you! We will contact you soon.',
    contactError: 'Something went wrong. Please try again or contact us via WhatsApp.',
    luggageTrekking: 'Trekking',
    luggageClimbing: 'Climbing',
    luggageSki: 'Ski',
    luggageTourism: 'Tourism',
    luggageOther: 'Other',
    contactAdditionalNotes: 'Additional notes (optional)',
    footerBookings: 'Inquiries / Bookings',
    footerFollow: 'Follow us',
    whatsappFloatingText: 'Book via WhatsApp',
    whatsappDefaultMessage: 'Hello, I would like to ask about a transfer in El Chaltén.',
  },
  es: {
    navHome: 'Inicio',
    navDestinations: 'Destinos',
    navServices: 'Servicios',
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
    heroSlides: [
      { h1: 'Trayectoria', p: 'Más de 10 años recorriendo el sur' },
      { h1: 'Seguridad', p: 'Unidades equipadas para el clima patagónico' },
      { h1: 'Puntualidad', p: 'Tu itinerario es sagrado para nosotros' },
      { h1: 'Confort', p: 'Viajes de larga distancia sin fatiga' },
      { h1: 'Experiencia', p: 'Conocemos cada rincón de la ruta' },
      { h1: 'Paisajes', p: 'Disfruta el camino mientras nosotros conducimos' },
      { h1: 'Compromiso', p: 'Calidad de servicio en cada kilómetro' },
    ],
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
    servicesSubtitle: 'Puntualidad, Seguridad y Experiencia Local',
    servicesBody: 'Con años de trayectoria en el sector, nos especializamos en ofrecer soluciones de transporte punto a punto. Nuestra experiencia nos avala como el socio estratégico de confianza para agencias de turismo, grupos corporativos y traslados particulares, garantizando siempre distinción en cada trayecto.',
    servicesConsultUs: 'Consultanos:',
    servicesConsultUsExtra: 'Hoteles, Estancias, programas y otros!',
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
    contactPhone: 'Teléfono',
    contactMessage: 'Mensaje',
    contactMessagePlaceholder: 'Escribe tu mensaje. Incluye origen, destino, fecha, pasajeros y cualquier detalle.',
    btnSendInquiry: 'Enviar consulta',
    sending: 'Enviando...',
    contactSuccess: '¡Gracias! Te contactaremos pronto.',
    contactError: 'Algo salió mal. Por favor intenta de nuevo o contáctanos por WhatsApp.',
    luggageTrekking: 'Trekking',
    luggageClimbing: 'Escalada',
    luggageSki: 'Esquí',
    luggageTourism: 'Turismo',
    luggageOther: 'Otro',
    contactAdditionalNotes: 'Notas adicionales (opcional)',
    footerBookings: 'Consultas / Reservas',
    footerFollow: 'Seguinos',
    whatsappFloatingText: 'Reservar por WhatsApp',
    whatsappDefaultMessage: 'Hola, me gustaría consultar por un transfer en El Chaltén.',
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly currentLang = signal<Lang>('en');

  readonly lang = this.currentLang.asReadonly();
  readonly t = computed(() => TRANSLATIONS[this.currentLang()]);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'es' || stored === 'en') {
        this.currentLang.set(stored);
      } else {
        const browserLang = navigator.language ?? (navigator as { userLanguage?: string }).userLanguage ?? '';
        if (browserLang.toLowerCase().startsWith('es')) {
          this.currentLang.set('es');
        }
      }
    }
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }

  toggleLang(): void {
    this.currentLang.update((l) => (l === 'en' ? 'es' : 'en'));
  }
}
