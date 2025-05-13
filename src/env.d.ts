/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_SOLARMAX_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}