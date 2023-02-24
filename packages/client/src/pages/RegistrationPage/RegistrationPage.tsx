import './RegistrationPage.scss'
import RegistrationForm from '../../components/modules/RegisatrationForm/RegistrationForm'

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="container">
        <div className="registration-page-wrapper">
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
