export default {
    path: '/movie',
    component: () =>
        import ('@/views/Movie'), //@表示src文件夹

    // 配置二级路由
    children: [{
            // 不加斜杠表示上边的路径/movie和city会拼接到一起
            path: 'city',
            component: () =>
                import ('@/components/City')
        },
        {
            path: 'nowPlaying',
            component: () =>
                import ('@/components/NowPlaying')
        },
        {
            path: 'comingSoon',
            component: () =>
                import ('@/components/ComingSoon')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Search')
        },
        {
            path: 'detail/:movieId', //与命名视图中对应的name----动态路由，动态路径参数以：开头
            components: { //命名视图是components
                default: () =>
                    import ('@/components/NowPlaying'), //解决进入详情过程原页面消失问题
                detail: () =>
                    import ('@/views/Movie/detail.vue')
            },
            props: { //动态路由之间传参
                detail: true
            }

        },
        {
            path: 'detail/:movieId', //与命名视图中对应的name----动态路由，动态路径参数以：开头
            components: { //命名视图是components
                default: () =>
                    import ('@/components/ComingSoon'), //解决进入详情过程原页面消失问题
                detail: () =>
                    import ('@/views/Movie/detail.vue')
            },
            props: { //动态路由之间传参
                detail: true
            }

        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}