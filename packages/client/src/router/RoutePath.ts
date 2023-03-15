export enum RoutePath {
  root = '/',
  login = '/login',
  registration = '/registration',
  game = '/game',
  forum = '/forum',
  leaders = '/leaders',
  settings = '/settings',
  user = '/user',
}

export const HEADER_PATHS: RoutePath[] = [
  RoutePath.forum,
  RoutePath.leaders,
  RoutePath.settings,
  RoutePath.game,
  RoutePath.user,
]
