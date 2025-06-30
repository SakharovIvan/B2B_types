export enum CARD_ROUTES {
  MAIN = '/api/card',
  NEW = '/new',
  GET = '',
  UPDATE = '/update',
  DELETE = '',
  CHECK = '/check',
  CREATE_ORDER = '/order',
}

export enum AUTH_ROUTES {
  MAIN = '/api/auth',
  REGISTRATION = '/registration',
  LOGIN = '/login',
  LOGOUT = '/logout',
  ROLE = '/role',
  CLIENT_INFO = '/cli',
  CLIENT_INFO_LIST='/cliList',
  ASC_INFO = '/asc',
  ACTIVATION_LINK = '/activate',
  REFRESH_TOKEN = '/refresh',
  GET_USERS = '/users',
  CHECK = '/check',
  COMMIT = '/commit',
  ADMIN_ASC_INFO = '/admin/asc',
  ADMIN_CLIENT_INFO = '/admin/cli',
}

export enum ORDER_ROUTES {
  MAIN = '/api/order',
  POST = '/update',
  GET = '',
  INFO = '/info',
}

export enum ADMIN_ROUTES {
  MAIN='/api/admin',
  ORDER_LIST = '/api/admin/order',
  SP_UPDATE='/sparepart',
}
