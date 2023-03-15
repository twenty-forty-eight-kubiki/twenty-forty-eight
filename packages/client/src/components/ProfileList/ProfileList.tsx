import { useHistory } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/store'
import { authAPI } from '../../api/authApi'
import GuiButton from '../../ui/GuiButton/GuiButton'
import './ProfileList.scss'
import { logoutUser } from '../../store/reducers/AuthSlice'
import { RoutePath } from '../../router/RoutePath'

interface ProfileProps {
  firstname?: string
  surname?: string
  email?: string
  displayName?: string
  avatar?: string
}

const ProfileList = (props: ProfileProps) => {
  const history = useHistory()
  const dispatch = useAppDispatch()

  const { firstname, surname, email, displayName, avatar } = props

  const onLogoutClick = () => {
    dispatch(logoutUser()).catch(console.error)
    history.push(RoutePath.root)
  }

  return (
    <div className="profile-list">
      <div className="profile-list__inner">
        <div className="profile-list__avatar">
          <img src={avatar} alt="User avatar" />
        </div>
        <div className="profile-list__fields">
          <h2 className="profile-list__title">Profile info</h2>
          <div className="profile-list__list">
            <div className="profile-list__column">
              <div className="profile-list__item">
                <p className="profile-list__subtitle">Name</p>
                <p className="profile-list__value">{firstname}</p>
              </div>
              <div className="profile-list__item">
                <p className="profile-list__subtitle">Surname</p>
                <p className="profile-list__value">{surname}</p>
              </div>
              <div className="profile-list__item">
                <p className="profile-list__subtitle">Display name</p>
                <p className="profile-list__value">{displayName}</p>
              </div>
            </div>
            <div className="profile-list__column">
              <div className="profile-list__item">
                <p className="profile-list__subtitle">Email</p>
                <p className="profile-list__value">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuiButton
        type="button"
        btnText="Change profile info"
        className="profile-list__btn"
      />
      <GuiButton
        type="button"
        btnText="Logout"
        className="profile-list__btn profile-list__btn--logout"
        onClick={() => onLogoutClick()}
      />
    </div>
  )
}

export default ProfileList
