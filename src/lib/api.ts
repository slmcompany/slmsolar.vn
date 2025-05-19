export const API_URL = 'https://api.slmglobal.vn/api';

export interface Sector {
  id: number;
  name: string;
  code: string;
  image: string;
  image_rectangular: string;
  tech_phone: string | null;
  sale_phone: string | null;
  description: string | null;
  list_combos: Combo[];
}

export interface Combo {
  id: number;
  name: string;
  code: string;
  description: string | null;
  image: string;
  total_price: number;
  installation_type: string;
  phase_type: string;
  output_min: number;
  output_max: number;
  payback_period: number;
  grouped_merchandises: GroupedMerchandise[];
}

export interface GroupedMerchandise {
  template: {
    name: string;
    code: string;
  };
  pre_quote_merchandises: PreQuoteMerchandise[];
}

export interface PreQuoteMerchandise {
  id: number;
  quantity: number;
  price: number;
  merchandise: {
    name: string;
    code: string;
    description_in_quotation: string;
    data_json: {
      power_watt?: number;
      width_mm?: number;
      height_mm?: number;
      thickness_mm?: number;
      area_m2?: number;
      weight_kg?: number;
      technology?: string;
      warranty_years?: number;
      ac_power_kw?: number;
      dc_max_power_kw?: number;
      installation_type?: string;
      phase_type?: string[];
      inverter_rating?: string;
    };
  };
}

export async function getSectors(): Promise<Sector[]> {
  const response = await fetch(`${API_URL}/sector`);
  if (!response.ok) {
    throw new Error('Failed to fetch sectors');
  }
  return response.json();
} 