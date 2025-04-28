export interface ProductImage {
  data: {
    attributes: {
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

export interface ProductHighlight {
  title: string;
  value: string;
}

export interface Product {
  id: number;
  attributes: {
    title: string;
    slug: string;
    he?: string;
    pha?: string;
    price: string;
    image: ProductImage;
    highlight: ProductHighlight[];
  };
}

export const mockProducts: Product[] = [
  {
    id: 1,
    attributes: {
      title: "Inverter Solarmax 3.6kW 1 Pha",
      slug: "inverter-solarmax-3-6kw-1-pha",
      he: "3.6kW",
      pha: "1 Pha",
      price: "12.500.000",
      image: {
        data: {
          attributes: {
            formats: {
              small: {
                url: "/uploads/inverter_3_6kw_small.jpg"
              }
            }
          }
        }
      },
      highlight: [
        {
          title: "Hiệu suất",
          value: "98.2%"
        },
        {
          title: "Bảo hành",
          value: "10 năm"
        }
      ]
    }
  },
  {
    id: 2, 
    attributes: {
      title: "Inverter Solarmax 5kW 1 Pha",
      slug: "inverter-solarmax-5kw-1-pha",
      he: "5kW",
      pha: "1 Pha",
      price: "15.900.000",
      image: {
        data: {
          attributes: {
            formats: {
              small: {
                url: "/uploads/inverter_5kw_small.jpg"
              }
            }
          }
        }
      },
      highlight: [
        {
          title: "Hiệu suất",
          value: "98.4%"
        },
        {
          title: "Bảo hành",
          value: "10 năm" 
        }
      ]
    }
  },
  {
    id: 3,
    attributes: {
      title: "Inverter Solarmax 10kW 3 Pha",
      slug: "inverter-solarmax-10kw-3-pha", 
      he: "10kW",
      pha: "3 Pha",
      price: "25.900.000",
      image: {
        data: {
          attributes: {
            formats: {
              small: {
                url: "/uploads/inverter_10kw_small.jpg"
              }
            }
          }
        }
      },
      highlight: [
        {
          title: "Hiệu suất",
          value: "98.6%"
        },
        {
          title: "Bảo hành",
          value: "10 năm"
        }
      ]
    }
  }
]; 