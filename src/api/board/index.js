import api from '@/plugins/axiosinterceptor'

// 게시글 목록 조회 (전체 조회)
const getBoardList = async (req) => {
  const res = await api.get('/board/read/list', req)
  return res.data
}

// 게시글 상제 조회
const getBoardDetail = async (req) => {
  const res = await api.get('/board/read/3', req)
  return res.data
}

export default { getBoardList, getBoardDetail }
