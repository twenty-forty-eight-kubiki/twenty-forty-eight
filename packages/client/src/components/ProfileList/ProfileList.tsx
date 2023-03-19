import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import GuiButton from '../../ui/GuiButton/GuiButton'
import { logoutUser } from '../../store/auth-actions'
import { RoutePath } from '../../router/RoutePath'
import { useState } from 'react'
import userIcon from '../../assets/icons/user-icon.svg'
import GuiLink from '../../ui/GuiLink/GuiLink'
import './ProfileList.scss'
import { getUserData } from '../../store/selectors'
import { getAvatar } from '../../helpers/getAvatar'

const ProfileList = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const userData = useAppSelector(getUserData)

  const [email] = useState(userData?.email || '')
  const [firstname] = useState(userData?.first_name || '')
  const [surname] = useState(userData?.second_name || '')
  const [displayName] = useState(userData?.display_name || '')
  const [avatar] = useState(getAvatar(userData?.avatar))

  const onLogoutClick = () => {
    dispatch(logoutUser())
      .then(() => history.push(RoutePath.Login))
      .catch(console.error)
  }

  return (
    <div className="profile-list">
      <div className="profile-list__inner">
        <div className="profile-list__avatar">
          <img
            className="profile-list__avatar-img"
            src={avatar}
            alt="User avatar"
          />
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
      <GuiLink
        text="Change profile info"
        url={RoutePath.Settings}
        className="gui-button profile-list__btn"
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
