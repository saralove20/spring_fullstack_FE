import api from '@/plugins/axiosinterceptor'

// 게시글 목록 조회 (전체 조회)
const getBoardList = async (req) => {
  const res = await api.get('/board/read/list', req)
  return res.data
}

// 게시글 상세 조회
const getBoardDetail = async (idx) => {
  const res = await api.get(`/board/read/${idx}`)
  return res.data
}

export default { getBoardList, getBoardDetail }
