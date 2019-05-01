export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true
    }
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/views/Login/index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true
    }
  },

  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/*',
    redirect: '/home'
  }
]
