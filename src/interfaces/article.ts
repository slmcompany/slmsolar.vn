export default interface Article {
  id: number;
  attributes: {
    title: string;
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
          };
        };
      };
    };
  };
}
