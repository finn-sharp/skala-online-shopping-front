import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <h1>홈</h1>
      <button type="button" onClick={() => navigate('/login')}>
        로그인
      </button>
      <button type="button" onClick={() => navigate('/signup')}>
        회원가입
      </button>
    </>
  )
}

export default Home
