export type TMenuTypes = {
  label: string;
  url?: string;
  items?: TMenuTypes[];
};

export const navMenus: TMenuTypes[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Service",
    url: "/services",
    items: [
      {
        label: "Body Scrub",
        url: "/body-scrub",
      },
      {
        label: "Facial Spa",
        url: "/facial-spa",
      },
      {
        label: "Oil Bath",
        url: "/oil-bath",
      },
      {
        label: "Salt Bath",
        url: "/salt-bath",
      },
      {
        label: "Waxing & Threading",
        url: "/waxing-&-threading",
      },
      {
        label: "Body Treatment",
        url: "/body-treatment",
      },
      {
        label: "Hot Stone Massage",
        url: "/hot-stone-massage",
      },
      {
        label: "Hot Oil Massage",
        url: "/hot-oil-massage",
      },
      {
        label: "Head massage",
        url: "/head-massage",
      },
    ],
  },
  {
    label: "Package",
    url: "/packages",
  },
  {
    label: "Gallery",
    url: "/gallery",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
