export const DESTINATION_OPTIONS = [
  'Aeropuerto / Ciudad de El Calafate',
  'El Chaltén',
  'Est. Bonanza / Eco Domes / H. El Pilar',
  'P. Río Eléctrico / H. Explora',
  'Rva. Los Huemules / Lago del Desierto',
  'Ref. Valle del Crestón',
  'Est. La Quinta / Chaltén Camp',
  'Bahía Tunel / La Leona',
  'M. Glaciarium / El Galpon del Glaciar',
  'H. Eolo / Puerto Punta Bandera',
  'Glaciar Perito Moreno',
  'Otro / Other',
] as const;

export type LuggageType = 'trekking' | 'climbing' | 'ski' | 'tourism' | 'other';

export const LUGGAGE_OPTIONS: { value: LuggageType; labelKey: 'luggageTrekking' | 'luggageClimbing' | 'luggageSki' | 'luggageTourism' | 'luggageOther' }[] = [
  { value: 'trekking', labelKey: 'luggageTrekking' },
  { value: 'climbing', labelKey: 'luggageClimbing' },
  { value: 'ski', labelKey: 'luggageSki' },
  { value: 'tourism', labelKey: 'luggageTourism' },
  { value: 'other', labelKey: 'luggageOther' },
];
