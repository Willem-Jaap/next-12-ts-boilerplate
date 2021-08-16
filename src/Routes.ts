//Routes to render for navigation purposes.

export interface Route {
    label: string;
    url: string;
    hidden?: boolean;
}

export interface Breadcrumbs {
    [key: string]: { label: string; url: string }[];
}

const routes: Route[] = [
    {
        label: 'Home',
        url: '/',
        hidden: true,
    },
];

const breadcrumbs: Breadcrumbs = {
    home: [
        {
            label: 'Home',
            url: '/',
        },
    ],
};

export { breadcrumbs };
export default routes;
