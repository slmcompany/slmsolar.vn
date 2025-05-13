export default interface Projects {
  id: number;
  attributes: {
    title: string;
    youtube_id: string;
    vi_tri: string;
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
            large: {
              url: string;
            };
          };
        };
      };
    };
  };
}
