import '../ProfilePage/ProfilePage.scss'
import ProfileForm from '../../components/ProfileForm/ProfileForm'

const ProfileSettings = () => {
  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-page__wrapper">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
