import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/mainPage',
    component: Layout,
    redirect: '/mainPage/table',
    name: 'mainPage',
    meta: {
      title: '轮播管理',
      icon: 'example'
    },
    children: [{
      path: 'tree',
      name: 'Tree',
      component: () => import('@/views/tree/index'),
      meta: {
        title: '轮播管理',
        icon: 'example'
      }
    }]
  },
  {
    path: '/newsArticleManage',
    component: Layout,
    meta: {
      title: '新闻管理',
      icon: 'form'
    },
    children: [
      {
        path: 'list',
        name: 'newsList',
        component: () => import('@/views/newsList'),
        meta: {
          title: '新闻列表',
          icon: 'form',
        }
      },
      {
        path: 'edit/:id(\\d+)',
        name: 'newsEdit',
        component: () => import('@/views/newsEdit'),
        meta: {
          title: '新闻编辑',
          icon: 'form',
          noCached:false
        },
        hidden: true,
      },
      {
        path: 'create',
        name: 'newsCreate',
        component: () => import('@/views/newsCreate'),
        meta: {
          title: '创建新闻',
          icon: 'form',
          noCached:false
        },
      }
    ]
  },
  {
    path: '/ideaArticleManage',
    component: Layout,
    meta: {
      title: '理念管理',
      icon: 'form'
    },
    children: [{
        path: 'list',
        name: 'ideaArticleList',
        component: () => import('@/views/ideaArticleList'),
        meta: {
          title: '理念列表',
          icon: 'form',
        }
      },
      {
        path: 'edit/:id(\\d+)',
        name: 'ideaArticleEdit',
        component: () => import('@/views/ideaArticleEdit'),
        meta: {
          title: '理念编辑',
          icon: 'form',
          noCached:false
        },
        hidden:true
      },
      {
        path: 'create',
        name: 'ideaArticleCreate',
        component: () => import('@/views/ideaArticleCreate'),
        meta: {
          title: '创建理念',
          icon: 'form',
          noCached:false
        },
      }
    ]
  },
  {
    path: '/focusArticleManage',
    component: Layout,
    meta: {
      title: '专题管理',
      icon: 'form'
    },
    children: [
      {
        path: 'list',
        name: 'focusList',
        component: () => import('@/views/focusList'),
        meta: {
          title: '专题列表',
          icon: 'form',
        }
      },
      {
        path: 'edit/:id(\\d+)',
        name: 'focusEdit',
        component: () => import('@/views/focusEdit'),
        meta: {
          title: '专题编辑',
          icon: 'form',
          noCached:false
        },
        hidden: true,
      },
      {
        path: 'create',
        name: 'focusCreate',
        component: () => import('@/views/focusCreate'),
        meta: {
          title: '创建专题',
          icon: 'form',
          noCached:false
        },
      }
    ]
  },
  {
    path: '/projectManage',
    component: Layout,
    meta: {
      title: '项目管理',
      icon: 'form'
    },
    children: [
      {
        path: 'list',
        name: 'projectList',
        component: () => import('@/views/projectList'),
        meta: {
          title: '项目列表',
          icon: 'form',
        }
      },
      {
        path: 'edit/:id(\\d+)',
        name: 'projectEdit',
        component: () => import('@/views/projectEdit'),
        meta: {
          title: '项目编辑',
          icon: 'form',
          noCached:false
        },
        hidden: true,
      },
      {
        path: 'create',
        name: 'projectCreate',
        component: () => import('@/views/projectCreate'),
        meta: {
          title: '项目创建',
          icon: 'form',
          noCached:false
        },
      }
    ]
  },
  {
    path: '/civilization',
    component: Layout,
    meta: {
      title: '文明印迹',
      icon: 'form'
    },
    children: [{
        path: 'list',
        name: 'civilizationList',
        component: () => import('@/views/civilizationList'),
        meta: {
          title: '建筑列表',
          icon: 'form',
        }
      },
      {
          path: 'create',
          name: 'civilizationCreate',
          component: () => import('@/views/civilizationCreate'),
          meta: {
            title: '创建文明',
            icon: 'form',
          }
        },
      {
        path: 'edit/:id(\\d+)',
        name: 'civilizationEdit',
        component: () => import('@/views/civilizationEdit'),
        meta: {
          title: '编辑文明',
          icon: 'form',
          noCached:false
        }
      }
    ]
  },
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [{
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: {
  //         title: 'Menu1'
  //       },
  //       children: [{
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: {
  //             title: 'Menu1-1'
  //           }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: {
  //             title: 'Menu1-2'
  //           },
  //           children: [{
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: {
  //                 title: 'Menu1-2-1'
  //               }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: {
  //                 title: 'Menu1-2-2'
  //               }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: {
  //             title: 'Menu1-3'
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: {
  //         title: 'menu2'
  //       }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [{
  //     path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //     meta: {
  //       title: 'External Link',
  //       icon: 'link'
  //     }
  //   }]
  // },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
