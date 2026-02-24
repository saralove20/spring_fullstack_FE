<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToList = () => {
  router.push('/board/list')
}

const goToCreate = () => {
  router.push('/board/create')
}
</script>

<template>
  <div>메인 페이지</div>

  <button @click="goToList">게시글 목록</button>
  <button @click="goToCreate">게시글 작성</button>
</template>

<style scoped></style>
