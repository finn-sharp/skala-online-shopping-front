import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()

  return (
    <>
      <h1>회원가입</h1>
      <button type="button" onClick={() => navigate('/')}>
        홈
      </button>
    </>
  )
}

export default Signup
