# 权限
首先需要在应用配置里开启权限功能

``` js
const globalSettings = {
    app: {
        enablePermission: true, // 是否开启权限功能
    },
}
```

然后在 `src/store/modules/user.js` 文件里 `action` 下有个 `getPermissions` 的方法，该方法用于登录成功后获取用户权限，实际开发中替换 `permission` 接口即可

``` js
getPermissions() {
    return new Promise(resolve => {
        permission({ account: this.account }).then(res => {
            this.permissions = res.data.permissions
            resolve(res.data.permissions)
        })
    })
}
```

返回的值如果为 `permissions: ['admin']`，但是路由页面没有设置 `auth` 或者 `auth: ['admin']`， 那么页面会展示出来 <br/>

如果页面路由设置的为 `auth: ['test']`，那么该页面由于没有 `admin` 权限则不会显示出来，除非返回的值为多个 `permissions: ['admin', 'test']`

## 小技巧
由于权限配置不涉及角色，所以在实现上会更灵活，开发者可自行扩展出角色模块，根据不同角色动态设置该角色所拥有的权限，然后用户与角色挂钩，这样就无需繁琐的给每个用户重复配置权限

当然了，业务有大有小，针对一些小型的管理系统，对权限这块没有这么多复杂的要求，甚至什么角色拥有什么权限都是写死固定的，不需要自由配置。针对这种情况，框架也可以很方便的实现

如下，设置了 `auth` 里有 `'admin', 'common'`，角色的都可以访问 `icons` 路由，而 `common` 却不能访问外链路由，因为没有权限
``` js
export default [
    {
        path: '/icons',
        component: Layout,
        meta: {
            title: 'icons 图标',
            icon: 'icons',
            auth: ['admin', 'common'],
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
            },
        ]
    },
    {
        path: 'https://www.baidu.com/',
        meta: {
            title: '外链展示',
            icon: 'link',
            auth: ['admin'],
        },
    },
]
```

## 鉴权组件
页面中某个模块，当前用户具备该权限是如何显示，不具备该权限又是如何显示，针对这样的需求，框架提供了 `<Auth>` 和 `<AuthAll>` 组件，具体使用如下

``` vue
<!-- 单权限验证 -->
<Auth :value="'department.create'">
    <p>你有该权限</p>
    <template #no-auth>
        <p>你没有该权限</p>
    </template>
</Auth>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<Auth :value="['department.create', 'department.edit']">
    <p>你有该权限</p>
    <template #no-auth>
        <p>你没有该权限</p>
    </template>
</Auth>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<AuthAll :value="['department.create', 'department.edit']">
    <p>你有该权限</p>
    <template #no-auth>
        <p>你没有该权限</p>
    </template>
</AuthAll>
```

## 鉴权指令
对于单个元素，也提供了 `v-auth` 和 `v-auth-all` 鉴权指令，使用上对比鉴权组件更方便，当然它能做的事情也更简单

``` html
<!-- 单权限验证 -->
<button v-auth="'department.create'">新增部门</button>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<button v-auth="['department.create', 'department.edit']">新增部门</button>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<button v-auth-all="['department.create', 'department.edit']">新增部门</button>
```

## 鉴权函数
鉴权组件和鉴权指令控制的是页面上的元素，而鉴权函数则更多是使用在业务流程代码里的权限判断

``` js
import useAuth from '@/utils/composables/useAuth'
const { auth, authAll } = useAuth()

// 单权限验证，返回 true 或 false
auth('department.create')

// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false
auth(['department.create', 'department.edit'])

// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false
authAll(['department.create', 'department.edit'])
```