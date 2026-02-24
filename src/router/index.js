import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/views/Main.vue'
import BoardList from '@/views/board/List.vue'
import BoardDetail from '@/views/board/Detail.vue'
import BoardCreate from '@/views/board/Create.vue'
import BoardEdit from '@/views/board/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', component: Main },
    { path: '/board/list', component: BoardList },
    { path: '/board/:idx', component: BoardDetail }, // 동적 라우팅 (게시글 번호에 따라)
    { path: '/board/create', component: BoardCreate },
    { path: '/board/:idx/edit', component: BoardEdit },
  ],
})

export default router
