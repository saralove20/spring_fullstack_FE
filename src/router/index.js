import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/views/Main.vue'
import BoardList from '@/views/board/List.vue'
import BoardDetail from '@/views/board/Detail.vue'
import BoardCreate from '@/views/board/Create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', component: Main },
    { path: '/board/list', component: BoardList },
    { path: '/board/detail', component: BoardDetail },
    { path: '/board/create', component: BoardCreate },
  ],
})

export default router
