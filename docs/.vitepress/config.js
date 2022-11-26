export default {
    title: '五老星',
    description: '五老星的小屋',
    base: '/blog',
    themeConfig: {
        siteTitle: "五老星的小屋",
        lastUpdated: '上次更新',
        nav: [
            { text: "首页", link: "/" },
            { text: "前端", link: "/frontend/javascript/1" },
        ],

        sidebar: {
            "/frontend/": [
                {
                    text: "javascript",
                    collapsible: true,
                    items: [
                        {
                            text: '做题家',
                            link: '/frontend/javascript/1'
                        }
                    ],
                },
                {
                    text: "typescript",
                    collapsible: true,
                    items: [
                        {
                            text: '类型也是可以编程',
                            link: "/frontend/typescript/1",
                        }
                    ],
                }
            ],
        }
    },
}