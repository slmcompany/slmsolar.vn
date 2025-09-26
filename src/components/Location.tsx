import { useEffect } from "react";

const LOCATIONS = [
    {
        name: "Kho Hà Nội",
        address: "Đường Hoàng Sa, Đông Anh, TP.Hà Nội",
    },
    {
        name: "Kho Bắc Giang",
        address: "Đường Hoàng Hoa Thám, Tân Yên, Bắc Giang",
    },
    {
        name: "Kho Hải Dương",
        address: "KCN Tân Trường, Cẩm Giàng, Hải Dương",
    },
    {
        name: "Kho Thanh Hoá",
        address: "Đường Kim Xuân, Hoằng Hoá, Thanh Hoá",
    },
    {
        name: "Kho HCM",
        address: "212 Thạnh Xuân 52, Phường Thạnh Xuân, Quận 12, HCM",
    },
];

export default function Locations() {
    useEffect(() => {
        const domain = window.location.hostname.replace(/^www\./, "");
        let filteredLocations = LOCATIONS;
        if (domain === "slmsolar.com.vn") {
            filteredLocations = LOCATIONS.filter(loc => loc.name === "Kho HCM");
        }
        const container = document.getElementById("dynamic-locations");
        if (container) {
            container.innerHTML = filteredLocations.map(location => `
        <div class="relative flex items-start ...">
          <div class="flex-shrink-0">...</div>
          <div class="min-w-0 flex-1">
            <div class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-semibold capitalize text-white">${location.name}</p>
              <p class="text-sm text-slate-200">${location.address}</p>
            </div>
          </div>
        </div>
      `).join('');
        }
    }, []);
    return null;
}