import './ProfilePage.scss'
import ProfileList from '../../components/ProfileList/ProfileList'
import userIcon from '../../assets/icons/user-icon.svg'

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
            avatar={userIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
