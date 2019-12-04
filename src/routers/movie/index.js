export default {
    path : '/movie',
    component : () => import('@/views/Movie'),   //@表示src文件夹

    // 配置二级路由
    children : [
        {
            // 不加斜杠表示上边的路径/movie和city会拼接到一起
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}