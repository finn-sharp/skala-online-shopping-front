import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <>
      <h1>로그인</h1>
      <button type="button" onClick={() => navigate('/signup')}>
        회원가입
      </button>
      <button type="button" onClick={() => navigate('/')}>
        홈
      </button>
    </>
  )
}

export default Login
