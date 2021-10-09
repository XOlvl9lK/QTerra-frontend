export type User = {
  id: string | null,
  email: string | null,
  avatar: string | null,
}

export interface loginActionType {
  email: string,
  password: string,
}

export interface registerActionType extends loginActionType {
  userName: string,
}