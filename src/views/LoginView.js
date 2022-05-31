import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export default function LoginView() {

  const { signInGoogle } = useContext(AuthContext)

  const navigate = useNavigate()

  const loguear = async () => {
    const rpta = await signInGoogle()
    if(rpta.user.uid){
      navigate('/')
    }
  }

  return (
    <div>
      <button className='btn btn-danger btn-lg' onClick={loguear}>
      <i class="fa-brands fa-google"></i> Continuar con Google
      </button>
    </div>
  )
}