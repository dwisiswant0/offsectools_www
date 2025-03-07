
import axios from 'axios';


const dynamicRoutes = async () => {
    // const r_tags = await axios.get(process.env.API_URL+'/tags/export?from=config.js');
    // const t_tags = r_tags.data.map((obj) => {
    //                     // return {
    //                     //     route: '/tag/' + obj.slug,
    //                     //     payload: tagtag,
    //                     // };
    //                     return '/tag/' + obj.slug   ;
    //                     // return '/tag/' + obj.slug + '/';
    //                 });
    const r_tools = await axios.get(process.env.API_URL+'/tools/export?from=config.js');
    const t_tools = r_tools.data.map((obj) => {
                        // return {
                        //     route: '/tool/' + obj.slug,
                        //     payload: tooltool,
                        // };
                        return '/tool/' + obj.slug;
                        // return '/tool/' + obj.slug + '/';
                    });
    const t_routes = t_tools;
    // const t_routes = t_tags.concat(t_tools);
    // console.log(t_routes);
    return t_routes;
}


export default {
    // https://nuxtjs.org/docs/concepts/server-side-rendering
    ssr: true,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: process.env.APP_NAME,
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A vast collection of security tools' },
            { hid: 'keywords', name: 'keywords', content: 'offsec, security, bug bounty, tools' },
            { property: 'og:locale', content: 'en_US' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: process.env.APP_NAME },
            { property: 'og:site_name', content: process.env.APP_NAME },
            { property: 'og:description', content: 'A vast collection of security tools' },
            { property: 'og:url', content: process.env.APP_URL },
            { property: 'og:image', content: process.env.APP_URL+'/assets/img/preview.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: process.env.APP_NAME },
            { name: 'twitter:description', content: 'A vast collection of security tools' },
            { name: 'twitter:image', content: process.env.APP_URL+'/assets/img/preview.png' },
        ],
        link: [
            { hid: 'canonical', rel: 'canonical', href: process.env.APP_URL },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        ],
        script: [
            { src: "https://www.googletagmanager.com/gtag/js?id=G-36B73TFMYT", async: true, },
            { src: "/js/ga.js" },
            { src: "/js/bootstrap.bundle.min.js" },
        ]
    },

    basePath: '/',

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/custom.css',
        // '@/assets/scss/custom.scss',
    ],

    // Loading bar https://nuxtjs.org/docs/2.x/features/loading
    loading: {
        color: '#4ADE80',
        height: '2px'
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/sitemap',
    ],

    sitemap: {
        hostname: process.env.APP_URL,
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_URL,
    },

    // public vars
    publicRuntimeConfig: {
        APP_NAME: process.env.APP_NAME,
        APP_URL: process.env.APP_URL,
        APP_ENV: process.env.APP_ENV,
        GITHUB_URL: process.env.GITHUB_URL,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    generate: {
        fallback: "404.html",
        routes: dynamicRoutes,
    },
}
