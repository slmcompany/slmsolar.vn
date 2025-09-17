const DOMAIN_PHONE_MAP: Record<string, string> = {
    "slmsolar.com": "0964920242",
    "slmsolar.com.vn": "0977879291",
    "slmsolar.vn": "0929884950",
};

export function getPhoneNumberByDomain(domain?: string): string {
    if (!domain && typeof window !== "undefined") {
        domain = window.location.hostname.replace(/^www\./, "");
    }
    return DOMAIN_PHONE_MAP[domain || "slmsolar.vn"] || "0929884950";
}

export const PHONE_NUMBER = getPhoneNumberByDomain();
export const PHONE_NUMBER_WITH_COUNTRY_CODE = "+84" + PHONE_NUMBER.slice(1);

export const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3');
};

export const formatPhoneNumberWithCountryCode = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.replace(/(\d{2})(\d{3})(\d{4})/, '+84 ($1) $2-$3');
};