import './ProfileList.scss'
import React, { FC } from 'react'
import GuiButton from '../../ui/GuiButton/GuiButton'
import './ProfileList.scss'

interface ProfileProps {
  firstname?: string
  surname?: string
  email?: string
  displayName?: string
  avatar?: string
}

const ProfileList = (props: ProfileProps) => {
  const { firstname, surname, email, displayName, avatar } = props

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
    </div>
  )
}

export default ProfileList
