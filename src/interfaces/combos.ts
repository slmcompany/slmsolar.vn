export default interface Combos {
  id: number;
  attributes: {
    tilte: string;
    gia_niem_yet: number;
    he: string;
    pha: string;
    cong_suat: string;
    san_luong: string;
    dien_tich: string;
    hoan_von: string;
    nhom_combo: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
          formats: {
            medium: {
              url: string;
            };
            small: {
              url: string;
            };
            large: {
              url: string;
            };
          };
        };
      };
    };
  };
}
