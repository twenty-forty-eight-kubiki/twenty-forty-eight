import './LoginPage.scss'
import LoginForm from '../../components/modules/LoginForm/LoginForm'

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
