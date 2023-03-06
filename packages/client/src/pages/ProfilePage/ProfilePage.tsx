import './ProfilePage.scss'
import ProfileList from '../../components/ProfileList/ProfileList'

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-page__wrapper">
          <ProfileList
            firstname="Ivan"
            surname="Ivanov"
            email="test@test.ru"
            displayName="ivan"
            avatar="icons/user-icon.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
