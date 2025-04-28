export default interface Projects {
  id: number;
  attributes: {
    title: string;
    price: number;
    he: string;
    pha: string;
    highlight: {
      title: string;
      value: string;
    };
    youtube_id: string;
    description: string;
    content: string;
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
