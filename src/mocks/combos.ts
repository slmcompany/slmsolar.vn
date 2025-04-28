export interface Combo {
    id: number;
    attributes: {
        nhom_combo: string;
        pha: string;
        cong_suat: string;
        slug: string;
        image: {
            data: {
                attributes: {
                    formats: {
                        small: {
                            url: string;
                        }
                    }
                }
            }
        };
        tilte: string;
        gia_niem_yet: number;
        san_luong: string;
        hoan_von: string;
        dien_tich: string;
        feature: number;
        mo_ta: string;
        thong_so_ky_thuat: string[];
        loi_ich: string[];
        placeholder: {
            bgColor: string;
            textColor: string;
            text: string;
        };
        products: {
            title: string;
            soluong: string;
            dvt: string;
            logo: string;
            image: string;
        }[];
    };
}

export const mockCombos: Combo[] = [
    {
        id: 1,
        attributes: {
            nhom_combo: "On-Grid",
            pha: "1 pha",
            cong_suat: "5",
            slug: "on-grid-1p-ja-55-invt-5",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/on-grid-1p-ja-55-invt-5-1.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo On-Grid 5 kW - 1 Pha",
            gia_niem_yet: 49000000,
            san_luong: "400-600",
            hoan_von: "4-5 năm",
            dien_tich: "30",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời hòa lưới 5kW phù hợp cho hộ gia đình có mức tiêu thụ điện trung bình. Hệ thống giúp giảm chi phí điện hàng tháng và bảo vệ môi trường.",
            thong_so_ky_thuat: [
                "Công suất: 5kW",
                "Số tấm pin: 9 tấm 415W",
                "Inverter: 5kW 1 pha",
                "Điện áp: 220V",
                "Tuổi thọ: 25-30 năm"
            ],
            loi_ich: [
                "Tiết kiệm 70-80% hóa đơn điện",
                "Bảo vệ môi trường",
                "Tăng giá trị bất động sản",
                "Hoạt động tự động, không cần bảo trì"
            ],
            placeholder: {
                bgColor: "bg-red-100",
                textColor: "text-red-600",
                text: "On-Grid 5kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "9",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter on-grid 5kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-invt-logo.png",
                    image: "/images/inverter-invt.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    },
    {
        id: 2,
        attributes: {
            nhom_combo: "On-Grid",
            pha: "1 pha",
            cong_suat: "10",
            slug: "on-grid-1p-ja-88-invt-10",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/on-grid-1p-ja-88-invt-10.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo On-Grid 10 kW - 1 Pha",
            gia_niem_yet: 98000000,
            san_luong: "800-1200",
            hoan_von: "5-6 năm",
            dien_tich: "60",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời hòa lưới 10kW phù hợp cho hộ gia đình lớn hoặc doanh nghiệp nhỏ. Hệ thống cung cấp nguồn điện ổn định và tiết kiệm chi phí.",
            thong_so_ky_thuat: [
                "Công suất: 10kW",
                "Số tấm pin: 18 tấm 415W",
                "Inverter: 10kW 1 pha",
                "Điện áp: 220V",
                "Tuổi thọ: 25-30 năm"
            ],
            loi_ich: [
                "Tiết kiệm 80-90% hóa đơn điện",
                "Phù hợp cho doanh nghiệp nhỏ",
                "Giảm phát thải CO2",
                "Hệ thống giám sát thông minh"
            ],
            placeholder: {
                bgColor: "bg-red-100",
                textColor: "text-red-600",
                text: "On-Grid 10kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "18",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter on-grid 10kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-invt-logo.png",
                    image: "/images/inverter-invt.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    },
    {
        id: 3,
        attributes: {
            nhom_combo: "On-Grid",
            pha: "3 pha",
            cong_suat: "10",
            slug: "on-grid-3p-ja-88-invt-10",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/on-grid-3p-ja-88-invt-10.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo On-Grid 10 kW - 3 Pha",
            gia_niem_yet: 120000000,
            san_luong: "1200",
            hoan_von: "5-6 năm",
            dien_tich: "60",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời hòa lưới 10kW phù hợp cho hộ gia đình lớn hoặc doanh nghiệp nhỏ. Hệ thống cung cấp nguồn điện ổn định và tiết kiệm chi phí.",
            thong_so_ky_thuat: [
                "Công suất: 10kW",
                "Số tấm pin: 24 tấm 415W",
                "Inverter: 10kW 3 pha",
                "Điện áp: 380V",
                "Tuổi thọ: 25-30 năm"
            ],
            loi_ich: [
                "Tiết kiệm 80-90% hóa đơn điện",
                "Phù hợp cho doanh nghiệp nhỏ",
                "Giảm phát thải CO2",
                "Hệ thống giám sát thông minh"
            ],
            placeholder: {
                bgColor: "bg-red-100",
                textColor: "text-red-600",
                text: "On-Grid 10kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "24",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter on-grid 10kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-invt-logo.png",
                    image: "/images/inverter-invt.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    },
    {
        id: 4,
        attributes: {
            nhom_combo: "On-Grid",
            pha: "3 pha",
            cong_suat: "15",
            slug: "on-grid-3p-ja-132-invt-15",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/on-grid-3p-ja-132-invt-15.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo On-Grid 15 kW - 3 Pha",
            gia_niem_yet: 180000000,
            san_luong: "1800",
            hoan_von: "5-6 năm",
            dien_tich: "90",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời hòa lưới 15kW phù hợp cho doanh nghiệp vừa và nhỏ. Hệ thống cung cấp nguồn điện ổn định và tiết kiệm chi phí.",
            thong_so_ky_thuat: [
                "Công suất: 15kW",
                "Số tấm pin: 36 tấm 415W",
                "Inverter: 15kW 3 pha",
                "Điện áp: 380V",
                "Tuổi thọ: 25-30 năm"
            ],
            loi_ich: [
                "Tiết kiệm 80-90% hóa đơn điện",
                "Phù hợp cho doanh nghiệp vừa và nhỏ",
                "Giảm phát thải CO2",
                "Hệ thống giám sát thông minh"
            ],
            placeholder: {
                bgColor: "bg-red-100",
                textColor: "text-red-600",
                text: "On-Grid 15kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "36",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter on-grid 15kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-invt-logo.png",
                    image: "/images/inverter-invt.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    },
    {
        id: 5,
        attributes: {
            nhom_combo: "Off-Grid",
            pha: "1 pha",
            cong_suat: "5",
            slug: "off-grid-1p-ja-55-solis-5-easyway-5",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/off-grid-1p-ja-55-solis-5-easyway-5-1.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo Off-Grid 5 kW - 1 Pha",
            gia_niem_yet: 88500000,
            san_luong: "400-600",
            hoan_von: "5-6 năm",
            dien_tich: "30",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời độc lập 5kW phù hợp cho khu vực chưa có điện lưới hoặc cần nguồn điện dự phòng. Hệ thống hoạt động độc lập với lưới điện quốc gia.",
            thong_so_ky_thuat: [
                "Công suất: 5kW",
                "Số tấm pin: 9 tấm 415W",
                "Inverter: 5kW 1 pha",
                "Pin lưu trữ: 5kWh Lithium",
                "Tuổi thọ: 15-20 năm"
            ],
            loi_ich: [
                "Hoạt động độc lập không phụ thuộc lưới điện",
                "Phù hợp vùng sâu vùng xa",
                "Có thể kết hợp với máy phát điện",
                "Hệ thống dự phòng khi mất điện"
            ],
            placeholder: {
                bgColor: "bg-green-100",
                textColor: "text-green-600",
                text: "Off-Grid 5kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "9",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter off-grid 5kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-solis-logo.svg",
                    image: "/images/inverter-solis.jpg"
                },
                {
                    title: "Pin Lithium - Bản rack",
                    soluong: "01",
                    dvt: "Pack",
                    logo: "/images/brand-easyway-logo.svg",
                    image: "/images/pin-easyway-rack.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    },
    {
        id: 6,
        attributes: {
            nhom_combo: "Off-Grid",
            pha: "1 pha",
            cong_suat: "5",
            slug: "off-grid-1p-ja-88-solis-5-easyway-5",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/off-grid-1p-ja-88-solis-5-easyway-5-1.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo Off-Grid 5 kW - 1 Pha",
            gia_niem_yet: 88500000,
            san_luong: "400-600",
            hoan_von: "5-6 năm",
            dien_tich: "30",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời độc lập 5kW phù hợp cho khu vực chưa có điện lưới hoặc cần nguồn điện dự phòng. Hệ thống hoạt động độc lập với lưới điện quốc gia.",
            thong_so_ky_thuat: [
                "Công suất: 5kW",
                "Số tấm pin: 9 tấm 415W",
                "Inverter: 5kW 1 pha",
                "Pin lưu trữ: 5kWh Lithium",
                "Tuổi thọ: 15-20 năm"
            ],
            loi_ich: [
                "Hoạt động độc lập không phụ thuộc lưới điện",
                "Phù hợp vùng sâu vùng xa",
                "Có thể kết hợp với máy phát điện",
                "Hệ thống dự phòng khi mất điện"
            ],
            placeholder: {
                bgColor: "bg-green-100",
                textColor: "text-green-600",
                text: "Off-Grid 5kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "9",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter off-grid 5kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-solis-logo.svg",
                    image: "/images/inverter-solis.jpg"
                },
                {
                    title: "Pin Lithium - Bản rack",
                    soluong: "01",
                    dvt: "Pack",
                    logo: "/images/brand-easyway-logo.svg",
                    image: "/images/pin-easyway-rack.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    },
    {
        id: 7,
        attributes: {
            nhom_combo: "Off-Grid",
            pha: "3 pha áp thấp",
            cong_suat: "12",
            slug: "off-grid-3p-ja-110-deye-12-easyway-5-ap-thap",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/off-grid-3p-ja-110-deye-12-easyway-5-ap-thap.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo Off-Grid 12 kW - 3 Pha Áp Thấp",
            gia_niem_yet: 150000000,
            san_luong: "1200",
            hoan_von: "6-7 năm",
            dien_tich: "60",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời độc lập 12kW phù hợp cho doanh nghiệp vừa và nhỏ ở khu vực chưa có điện lưới. Hệ thống cung cấp nguồn điện ổn định và độc lập.",
            thong_so_ky_thuat: [
                "Công suất: 12kW",
                "Số tấm pin: 24 tấm 415W",
                "Inverter: 12kW 3 pha",
                "Pin lưu trữ: 5kWh Lithium",
                "Tuổi thọ: 15-20 năm"
            ],
            loi_ich: [
                "Cung cấp điện ổn định cho doanh nghiệp",
                "Không phụ thuộc lưới điện quốc gia",
                "Tiết kiệm chi phí vận hành",
                "Bảo vệ môi trường"
            ],
            placeholder: {
                bgColor: "bg-green-100",
                textColor: "text-green-600",
                text: "Off-Grid 12kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "24",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter off-grid 12kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-deye-logo.svg",
                    image: "/images/inverter-deye.jpg"
                },
                {
                    title: "Pin Lithium - Bản rack",
                    soluong: "01",
                    dvt: "Pack",
                    logo: "/images/brand-easyway-logo.svg",
                    image: "/images/pin-easyway-rack.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    },
    {
        id: 8,
        attributes: {
            nhom_combo: "Off-Grid",
            pha: "3 pha áp cao",
            cong_suat: "10",
            slug: "off-grid-3p-ja-110-solis-10-easyway-10-ap-cao",
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: "/images/off-grid-3p-ja-110-solis-10-easyway-10-ap-cao.png"
                            }
                        }
                    }
                }
            },
            tilte: "Combo Off-Grid 10 kW - 3 Pha Áp Cao",
            gia_niem_yet: 150000000,
            san_luong: "1200",
            hoan_von: "6-7 năm",
            dien_tich: "60",
            feature: 1,
            mo_ta: "Hệ thống điện mặt trời độc lập 10kW phù hợp cho doanh nghiệp vừa và nhỏ ở khu vực chưa có điện lưới. Hệ thống cung cấp nguồn điện ổn định và độc lập.",
            thong_so_ky_thuat: [
                "Công suất: 10kW",
                "Số tấm pin: 24 tấm 415W",
                "Inverter: 10kW 3 pha",
                "Pin lưu trữ: 10kWh Lithium",
                "Tuổi thọ: 15-20 năm"
            ],
            loi_ich: [
                "Cung cấp điện ổn định cho doanh nghiệp",
                "Không phụ thuộc lưới điện quốc gia",
                "Tiết kiệm chi phí vận hành",
                "Bảo vệ môi trường"
            ],
            placeholder: {
                bgColor: "bg-green-100",
                textColor: "text-green-600",
                text: "Off-Grid 10kW"
            },
            products: [
                {
                    title: "Tấm pin mặt trời 1 mặt kính",
                    soluong: "24",
                    dvt: "tấm",
                    logo: "/images/brand-ja-solar-logo.svg",
                    image: "/images/solar-jasolar.png"
                },
                {
                    title: "Inverter off-grid 10kW",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/brand-solis-logo.svg",
                    image: "/images/inverter-solis.jpg"
                },
                {
                    title: "Pin Lithium - Bản rack",
                    soluong: "01",
                    dvt: "Pack",
                    logo: "/images/brand-easyway-logo.svg",
                    image: "/images/pin-easyway-rack.png"
                },
                {
                    title: "Hệ khung giá đỡ nhôm cao cấp",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
                },
                {
                    title: "Bộ tủ điện năng lượng mặt trời",
                    soluong: "01",
                    dvt: "bộ",
                    logo: "/images/logo-solarmax.png",
                    image: "/images/bo-tu-dien-solarmax.png"
                }
            ]
        }
    }
]; 