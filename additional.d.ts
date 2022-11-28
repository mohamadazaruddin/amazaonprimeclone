import { User } from "./services/types/types"

declare module "iron-session" {
  interface IronSessionData {
    user: User
    accessToken: string
    activeCamp: number
    activePhase: number
  }
}
