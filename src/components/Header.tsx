import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Combo On-Grid", href: "/goi-san-pham/combo-ongrid" },
  { name: "Combo Off-Grid", href: "/goi-san-pham/combo-offgrid" },
  { name: "Thiết bị", href: "/thiet-bi" },
  { name: "Dự án", href: "/du-an" },
  { name: "Hỏi đáp", href: "/hoi-dap" },
];

const mobilenavigation: {
  heading: string;
  submenu: {
    title: string;
    link: string;
    icon: string;
    button?: { btn: string; link: string }[];
  }[];
}[] = [
  {
    heading: "Gói sản phẩm",
    submenu: [
      {
        title: "Combo On-Grid",
        link: "/goi-san-pham/combo-ongrid",
        icon: "/images/icon-bolt-red.svg",
        button: [
          { btn: "1 pha", link: "#" },
          { btn: "3 pha", link: "#" },
        ],
      },
      {
        title: "Combo Off-Grid",
        link: "/goi-san-pham/combo-offgrid",
        icon: "/images/icon-bolt-green.svg",
        button: [
          { btn: "1 pha", link: "#" },
          { btn: "3 pha", link: "#" },
        ],
      },
    ],
  },
  {
    heading: "Thiết bị",
    submenu: [
      {
        title: "Tấm quang năng",
        link: "/thiet-bi/solar",
        icon: "/images/icon-solar.svg",
      },
      {
        title: "Biến tần | Inverter",
        link: "/thiet-bi/inverter",
        icon: "/images/icon-inverter.svg",
      },
      {
        title: "Pin lưu trữ Lithium",
        link: "/thiet-bi/battery",
        icon: "/images/icon-union.svg",
      },
    ],
  },
  {
    heading: "Thông tin",
    submenu: [
      {
        title: "Dự án đã thực hiện",
        link: "/du-an",
        icon: "/images/icon-briefcase.svg",
      },
      {
        title: "Hỏi - Đáp",
        link: "/hoi-dap",
        icon: "/images/icon-dialog.svg",
      },
      {
        title: "Giới thiệu",
        link: "/gioi-thieu",
        icon: "/images/icon-info.svg",
      },
      {
        title: "Liên hệ",
        link: "/lien-he",
        icon: "/images/icon-contact.svg",
      },
    ],
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed md:relative w-full isolate z-10 md:bg-white bg-white bg-clip-padding backdrop-filter bg-opacity-70 backdrop-blur-sm ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SoLarMax</span>
            <img
              alt=""
              src="/images/logo-solarmax.svg"
              className="lg:h-8 h-5 w-auto"
            />
          </a>
        </div>
        <div className="flex items-center space-x-6 md:order-2">
          <a
            href="https://www.facebook.com/solarmax87"
            className="text-blue-700 hover:text-gray-400"
            target="_blank"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@solarmax87"
            className="text-gray-900 hover:text-gray-400"
            target="_blank"
          >
            <span className="sr-only">Tiktok</span>
            <div className="w-5 h-5">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 660.82 659.74"
              >
                <g id="Layer_1-2" data-name="Layer_1">
                  <path
                    fill="currentColor"
                    d="M660.82,329.29c-.06,179.15-142.53,323.06-316.62,330.16C159.54,666.98,7.93,522.41.31,344.46-7.63,159.01,138.35,6.84,318.03.23c185.19-6.81,341.91,141.14,342.79,329.07ZM309.26,348.16c.4-.52.59-.65.59-.79.1-22.44.24-44.88.13-67.32,0-1.05-2.07-2.87-3.34-3.02-13.28-1.59-26.63-2.11-39.76.87-49.52,11.25-83.87,40.49-98.46,89.13-14.67,48.92-4.28,93.08,33.17,129.39,29.54,28.64,65.08,40.42,105.9,36.22,63.46-6.52,113.82-62.34,113.87-126.04.03-45.75,0-91.5,0-137.26v-6.1c23.83,16.28,48.85,26.2,76.63,29.49v-85.1c-1.84-.17-3.31-.33-4.78-.43-19.33-1.42-36.9-6.98-52.45-19.29-18.72-14.84-31.61-33.11-36.95-56.4-1-4.37-3.01-5.51-7.2-5.43-12.99.23-25.99.08-38.99.08q-7.42,0-7.43,7.41c0,90.51.01,181.01,0,271.52,0,24.86-16.71,47.36-41.18,54.76-27.19,8.22-50.97-2.82-65.15-22.05-14.82-20.11-14.99-42.66-1.9-63.74,13.02-20.97,32.83-30.38,57.85-27.44,3.24.38,6.46,1.05,9.45,1.55Z"
                  ></path>
                </g>
              </svg>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@solarmax87"
            className="text-red-500 hover:text-gray-400"
            target="_blank"
          >
            <span className="sr-only">YouTube</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Đăng nhập <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SoLarMax</span>
              <img
                alt=""
                src="/images/logo-solarmax.svg"
                className="h-5 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 mb-24 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  {mobilenavigation.map((item, index) => (
                    <div
                      key={index}
                      className="w-full py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-gray-900"
                    >
                      {item.heading}
                      <div
                        className="mt-2  bg-white shadow rounded-md divide-y divide-gray-100 "
                        id="disclosure-1"
                      >
                        {item.submenu.map((submenuItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={submenuItem.link}
                            className="block  py-2 pl-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-green-100"
                          >
                            <button
                              type="button"
                              className="flex w-full items-center justify-between  pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                            >
                              <div className="flex items-center">
                                <img
                                  alt=""
                                  src={submenuItem.icon}
                                  className="h-8 w-auto pr-2 "
                                />
                                <p className="text-nowrap">
                                  {submenuItem.title}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                {submenuItem.button
                                  ?.filter((btnItem) => btnItem) // Filter out undefined or null button items
                                  .map((btnItem, btnIndex) => (
                                    <a
                                      key={btnIndex}
                                      href={btnItem.link}
                                      className=" px-2 rounded-md border-2 border-slate-800"
                                    >
                                      {btnItem.btn}
                                    </a>
                                  ))}
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </button>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* <div style={{margin:"15px 10px 10px 10px", borderRadius:"10px", position: 'relative', paddingBottom: '53.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/7rnvOZWwh5I?feature=oembed&showinfo=0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  ></iframe>
</div>                  */}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
