export type TMenuTypes = {
    label: string;
    url?: string;
    items?: TMenuTypes[];
}
export const navMenus:TMenuTypes[] = [
    {
        label: "Home",
        url: '/',
    },
    {
        label: "About",
        url: '/about',
    },
    {
        label: "Service",
        url: '/services',
        items: [
            {
                label: 'Body Scrub',
                url: '/body-scrub'
            },
        ],
    },
    {
        label: 'Package',
        url: '/packages',
    },
    {
        label: 'Gallery',
        url: '/gallery',
    },
    {
        label: 'Blog',
        url: '/blog',
    },
    {
        label: 'Contact',
        url: '/contact',
    },
]