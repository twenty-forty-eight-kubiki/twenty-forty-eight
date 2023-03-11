import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.scss'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-page-wrapper">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
