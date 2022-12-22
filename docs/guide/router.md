# 路由（导航）
项目路由配置存放在 `/scr/router/modules/` 目录下，每一个 `js` 文件会被视为一个路由模块。配置好的路由模块最终会在 `/src/router/routes.js` 文件里进行引入并放到主导航下

## 基本配置

### 二级路由
一个路由模块包含以下结构：
``` js
const Layout = () => import('@/layout/index.vue') // 布局主页面

export default {
    path: '/icons',
    component: Layout,
    meta: {
        title: 'icons 图标',
        icon: 'icons'
    },
    children: [
        {
            path: '',
            name: 'icons',
            component: () => import('@/views/icons/index.vue'),
            meta: {
                title: 'icons 图标',
                sidebar: false,
            }
        }
    ]
},
```

::: warning 注意事项
* 整个项目所有路由的 name 不能重复
* 一级路由的 component 需设置为 Layout ，并且 path 前面需要加 /，其余子路由都不要以 / 开头
* 一级路由得 component 必须设置为 Layout，否则会单独列出一个页面，不在导航页展示
:::

上面配置设置完成之后默认展示为二级路由，如果只想展示一级路由，在子级路由 `meta` 中设置 `sidebar` 为 `false` 即可
`sidebar` 为 `true`
![An image](/sidebar-true.jpg)
`sidebar` 为 `false`
![An image](/sidebar-false.jpg)

### 多级路由
::: tip
多级路由最终都会转成二级路由并注册，但多级嵌套的层级结构会在侧边栏导航和面包屑导航中得到保留，其设计原因可阅读《页面缓存》
:::

多级路由的中间层级，可以无需设置 `component`
``` js
export default {
    path: '/multilevel',
    component: Layout,
    redirect: '/multilevel/menu1',
    name: 'multilevel',
    meta: {
        title: '多级导航',
        icon: 'nested'
    },
    children: [
        {
            path: 'menu1',
            name: 'multilevelMenu1',
            meta: {
                title: '导航1'
            },
            children: [
                {
                    path: 'menu1-1',
                    name: 'multilevelMenu1-1',
                    component: () => import('@/views/multilevel/menu1/menu1-1/index.vue'),
                    meta: {
                        title: '导航1-1'
                    }
                },
            ]
        }
    ]
}
```

### 主导航
主导航并非路由的一部分，它只是将我们配置好的路由模块进行归类，在 `/src/router/routes.js` 里进行设置
主导航只需设置 `meta` 和 `children` 两个参数，其中 `meta` 只接受 `title` 和 `icon` 这两个参数，`children` 则是存放我们配置的路由模块数据

``` js
import defaultExample from './modules/defaultExample.js' // 默认演示
import systemSettings from './modules/systemSettings.js' // 系统设置

const asyncRoutes = [
	{
		meta: {
			title: '演示',
			icon: 'example'
		},
		children: [
			...defaultExample
		]
	},
	{
		meta: {
			title: '系统',
			icon: 'system'
		},
		children: [
			systemSettings
		]
	}
]
```

## 导航配置
框架的核心是通过路由的配置生成对应的导航，所以除了路由的基本配置外，框架还提供了针对导航的自定义配置，这些配置都存放在 `meta` 对象里

### title
|  类型  | 默认值 | 说明                                 |
| :----: | :----: | :----------------------------------- |
| string |   /    | 导航、面包屑导航以及页面中展示的标题 |

### icon
|  类型  | 默认值 | 说明             |
| :----: | :----: | :--------------- |
| string |   /    | 导航中显示的图标 |

该项配置最终会通过 <svg-icon /> 组件进行展示，意味着你可以使用自定义图标，详细可阅读[《SVG 图标》](./svg-icon.md)

### auth
|      类型      | 默认值 | 说明                                          |
| :------------: | :----: | :----------------------------------------- |
| string / array |   /    | 该路由访问权限，支持多个权限叠加，只要满足一个，即可 |

用户在登录时，会获取用户权限，根据权限去过滤并动态注册路由。所以没有权限的路由不会被注册，也不会在侧边栏导航里显示，详细可阅读《[权限 - 小技巧](./permission#小技巧)》

### sidebar
|  类型   | 默认值 | 说明                         |
| :-----: | :----: | :--------------------------- |
| boolean |  true  | 该路由是否在侧边栏导航中展示 |

### defaultOpened
|  类型   | 默认值 | 说明               |
| :-----: | :----: | :----------------- |
| boolean | false  | 次导航是否默认展开 |

不能设置在 `children` 中路由上，需要设置在父级节点上

``` js
{
    path: '/components',
    component: Layout,
    meta: {
        title: '扩展组件',
        icon: 'component',
        defaultOpened: true
    },
    children: []
}
```

使用该特性时，建议在应用配置里关闭 `menu.subMenuUniqueOpened` 设置

### breadcrumb
|  类型   | 默认值 | 说明                         |
| :-----: | :----: | :--------------------------- |
| boolean |  true  | 该路由是否在面包屑导航中展示 |

### activeMenu
|  类型  | 默认值 | 说明                                     |
| :----: | :----: | :--------------------------------------- |
| string |   /    | 指定高亮侧边栏路由，需要设置完整路由地址 |

该参数常与 `sidebar: false` 一起使用，因为路由不在侧边栏导航显示，会导致进入该路由后，侧边栏导航高亮效果失效，所以需要手动指定
``` js{23,24}
export default {
    path: '/icons',
    component: Layout,
    meta: {
        title: 'icons 图标',
        icon: 'icons'
    },
    children: [
        {
            path: 'icons',
            name: 'icons',
            component: () => import('@/views/icons/index.vue'),
            meta: {
                title: 'icons 图标',
            }
        },
        {
            path: 'icons-detail',
            name: 'icons-detail',
            component: () => import('@/views/icons-detail/index.vue'),
            meta: {
                title: 'icons detail',
                sidebar: false,
                activeMenu: '/icons-detail',
            }
        }
    ]
},
```

### copyright
|  类型   | 默认值 | 说明                       |
| :-----: | :----: | :------------------------- |
| boolean |   /    | 该路由是否显示底部版权信息 |

该参数比应用配置里的 `copyright.enable` 优先级高，不设置则继承应用配置里的设置

### cache
|           类型           | 默认值 | 说明                 |
| :----------------------: | :----: | :------------------- |
| boolean / string / array |   /    | 是否对该页面进行缓存 |

- `boolean` 设置为 `true` 时，该路由页面会被一直缓存
- `string` 设置某个目标路由的 `name`，表示当前路由页面跳转到设置的 `name` 对应的路由页面时，则将当前路由页面进行缓存，否则不缓存
- `array` 同 `string` ，可设置一个目标路由的 `name` 数组

当类型为 `string` 或 `array` 时，可以更精细的去控制页面缓存的逻辑。例如从列表页进入详情页，则需要将列表页进行缓存；而从列表页进入其它页面，则无需将列表页进行缓存。详细介绍请移步[页面缓存](keep-alive)

### link

|  类型  | 默认值 | 说明         |
| :----: | :----: | :----------- |
| string |   /    | 外部网页链接 |

会在新窗口访问该链接

内嵌网页无需设置 `component` ，但需设置 `redirect` 和 `name` 属性

``` js
const routes = {
    path: '/xxx',
    component: () => import('@/layouts/index.vue'),
    redirect: '/xxx/link',
    meta: {
        title: '外部网页',
    },
    children: [
        {
            path: 'link',
            redirect: '',
            name: 'Link',
            meta: {
                title: 'Gitee 仓库',
                link: 'https://gitee.com/hooray/fantastic-admin',
            },
        },
    ],
}
```