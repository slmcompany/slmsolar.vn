export const PHONE_NUMBER = "0929884950";
export const PHONE_NUMBER_WITH_COUNTRY_CODE = "+84929884950";

export const formatPhoneNumber = (phone: string): string => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format as xxx.xxx.xxx
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3');
};

export const formatPhoneNumberWithCountryCode = (phone: string): string => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format as +84 (xx) xxx-xxxx
    return cleaned.replace(/(\d{2})(\d{3})(\d{4})/, '+84 ($1) $2-$3');
}; 