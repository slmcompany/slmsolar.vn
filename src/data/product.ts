export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  model: string;
  specifications: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Pin Lithium-ion 5.12kWh",
    description: "Pin lưu trữ năng lượng mặt trời cao cấp",
    image: "/images/thiet-bi/battery/battery-lithium.png",
    category: "battery",
    brand: "Deye",
    model: "Deye 5.12kWh",
    specifications: {
      "Dung lượng": "5.12kWh",
      "Điện áp": "51.2V",
      "Công suất": "5kW",
      "Chu kỳ sạc": "6000+",
      "Bảo hành": "10 năm"
    }
  },
  {
    id: 2,
    name: "Pin Lithium-ion 10.24kWh",
    description: "Pin lưu trữ năng lượng mặt trời công suất lớn",
    image: "/images/thiet-bi/battery/battery-lithium.png",
    category: "battery",
    brand: "Deye",
    model: "Deye 10.24kWh",
    specifications: {
      "Dung lượng": "10.24kWh",
      "Điện áp": "51.2V",
      "Công suất": "10kW",
      "Chu kỳ sạc": "6000+",
      "Bảo hành": "10 năm"
    }
  },
  {
    id: 3,
    name: "Inverter Hybrid 5kW",
    description: "Inverter hòa lưới thông minh",
    image: "/images/thiet-bi/inverter/inverter-deye.png",
    category: "inverter",
    brand: "Deye",
    model: "Deye SUN-5K-SG01LP1",
    specifications: {
      "Công suất": "5kW",
      "Điện áp vào": "90-450V",
      "Điện áp ra": "220V/50Hz",
      "Hiệu suất": "98.4%",
      "Bảo hành": "5 năm"
    }
  },
  {
    id: 4,
    name: "Inverter Hybrid 8kW",
    description: "Inverter hòa lưới công suất lớn",
    image: "/images/thiet-bi/inverter/inverter-deye.png",
    category: "inverter",
    brand: "Deye",
    model: "Deye SUN-8K-SG01LP1",
    specifications: {
      "Công suất": "8kW",
      "Điện áp vào": "90-450V",
      "Điện áp ra": "220V/50Hz",
      "Hiệu suất": "98.4%",
      "Bảo hành": "5 năm"
    }
  },
  {
    id: 5,
    name: "Tấm pin mặt trời 550W",
    description: "Tấm pin năng lượng mặt trời hiệu suất cao",
    image: "/images/thiet-bi/solar/solar-panel.png",
    category: "solar",
    brand: "Canadian Solar",
    model: "CS6R-MS-550W",
    specifications: {
      "Công suất": "550W",
      "Hiệu suất": "21.3%",
      "Kích thước": "2279x1134x35mm",
      "Bảo hành": "12 năm sản phẩm, 25 năm hiệu suất"
    }
  },
  {
    id: 6,
    name: "Tấm pin mặt trời 600W",
    description: "Tấm pin năng lượng mặt trời công nghệ mới",
    image: "/images/thiet-bi/solar/solar-panel.png",
    category: "solar",
    brand: "Canadian Solar",
    model: "CS6R-MS-600W",
    specifications: {
      "Công suất": "600W",
      "Hiệu suất": "22.8%",
      "Kích thước": "2279x1134x35mm",
      "Bảo hành": "12 năm sản phẩm, 25 năm hiệu suất"
    }
  }
]; 