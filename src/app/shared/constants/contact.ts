export const WHATSAPP_NUMBER = '5492966724361';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = 'https://www.instagram.com/el_chalten_transfers/';
export const CONTACT_EMAIL = 'reservas@elchaltentransfers.com';
export const CONTACT_PHONE = '+54 9 2966 724361';
export const CONTACT_PHONE_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const ADDRESS = 'Comandante Arrua 370';
export const ADDRESS_CITY = 'El Chaltén, Santa Cruz, Argentina';
export const CONTACT_NAME = 'Carolina Cervetta';

export function getWhatsAppUrl(message?: string): string {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : '';
  return `${WHATSAPP_URL}${text}`;
}
