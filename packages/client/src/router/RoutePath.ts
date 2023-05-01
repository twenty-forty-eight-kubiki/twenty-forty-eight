export enum RoutePath {
  Root = '/',
  Login = '/login',
  Registration = '/registration',
  Game = '/game',
  Forum = '/forum',
  Leaders = '/leaders',
  Settings = '/settings',
  User = '/user',
  Post = '/posts/:postId'
}

export const HEADER_PATHS: RoutePath[] = [
  RoutePath.Forum,
  RoutePath.Leaders,
  RoutePath.Settings,
  RoutePath.Game,
  RoutePath.User
];
