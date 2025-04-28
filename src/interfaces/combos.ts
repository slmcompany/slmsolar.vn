export interface Combo {
    id: number;
    name: string;
    code: string;
    description: string | null;
    total_price: number;
    installation_type: string;
    phase_type: string;
    output_max: number;
    output_min: number;
    image: string;
    payback_period: number;
    best_selling: boolean;
    grouped_merchandises: {
        template: {
            name: string;
            code: string;
            is_main: boolean;
        };
        pre_quote_merchandises: {
            quantity: number;
            merchandise: {
                name: string;
                code: string;
                description_in_quotation: string;
                data_json: {
                    power_watt: number;
                    width_mm: number;
                    height_mm: number;
                    thickness_mm: number;
                    area_m2: number;
                    weight_kg: number;
                    technology: string;
                    warranty_years: number;
                };
                brand: {
                    name: string;
                    code: string;
                };
            };
        }[];
    }[];
}

export interface Sector {
    id: number;
    name: string;
    description?: string;
    logo?: string;
    image: string;
    image_rectangular: string;
    sale_phone: string | null;
    tech_phone: string | null;
    list_combos: Combo[];
    list_contents: any[];
}
