
const routes = [
  {
    path: '/',
    component: () => import('../pages/HelloScreen.vue')
  },
  {
    path: '/auth',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('../pages/Authorization/Login.vue') },
      { path: 'registration', component: () => import('../pages/Authorization/Registration.vue') }
    ]
  },
  {
    path: '/workspace',
    component: () => import('../pages/Workspace.vue')
  },
  {
    path: '/profile',
    component: () => import('pages/Profile.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
