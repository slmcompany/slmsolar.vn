const DOMAIN_PHONE_MAP: Record<string, string> = {
    "slmsolar.com": "0964920242",
    "slmsolar.com.vn": "0969663387",
    "slmsolar.vn": "0976666905",
};

export function getPhoneNumberByDomain(domain?: string): string {
    if (typeof window !== "undefined") {
        // Đảm bảo code chỉ chạy ở client-side
        setTimeout(() => {
            domain = window.location.hostname.replace(/^www\./, "");
            console.log("Detected domain:", domain);
        }, 0);
    }
    return DOMAIN_PHONE_MAP[domain || "slmsolar.com"] || "0976666905";
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