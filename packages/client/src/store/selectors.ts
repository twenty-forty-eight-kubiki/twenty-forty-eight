import { State } from './store.types'
import { AuthorizationStatus } from '../constants'
import { createSelector } from '@reduxjs/toolkit'

export const getAuthorizationStatus = (state: State) =>
  state.auth.authorizationStatus

export const getAuthCheckedStatus = (state: State): boolean =>
  state.auth.authorizationStatus !== AuthorizationStatus.Unknown

export const getUserData = (state: State) => state.auth.data

export const getUserAvatar = (state: State) => state.auth.data?.avatar

export const getLeaders = (state: State) => state.leaderboard.data

export const getSortedLeaders = createSelector(getLeaders, leaders => {
  let sortedList
  if (leaders && leaders.length) {
    const leaderList = leaders[0].data.leader
    sortedList = [...leaderList].sort((a, b) => b.score - a.score)
  }

  return sortedList
})
