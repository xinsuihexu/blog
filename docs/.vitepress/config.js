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
                        },
                        {
                            text: '常用工具函数',
                            link: '/frontend/javascript/2'
                        },
                        {
                            text: '常用正则',
                            link: '/frontend/javascript/3'
                        },
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
                },
                {
                    text: '实用算法',
                    collapsible: true,
                    items: [
                        {
                            text: 'Luhn check',
                            link: '/frontend/algorithm/1'
                        },
                        {
                            text: '字符串子串',
                            link: '/frontend/algorithm/2'
                        },
                        {
                            text: '点距离',
                            link: '/frontend/algorithm/3'
                        },
                        {
                            text: '二分查找',
                            link: '/frontend/algorithm/4'
                        },
                        {
                            text: '排序',
                            link: '/frontend/algorithm/5'
                        }
                    ]
                },
                {
                    text: "数据结构",
                    collapsible: true,
                    items: [
                        {
                            text: '单向链表',
                            link: "/frontend/structure/1",
                        },
                        {
                            text: '双向链表',
                            link: "/frontend/structure/2",
                        }
                    ],
                },
            ],
        }
    },
}