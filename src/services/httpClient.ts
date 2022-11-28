import ky from "ky"
import { NextApiRequest, NextApiResponse } from "next"
import { IronSessionData } from "iron-session"

// Service Import
import fetchJson from "./jsonApi/fetchJson"

type NextIronRequest = NextApiRequest & { session: IronSessionData }

type ApiHandler<T, U> = (baseHttpClient: typeof ky, params: U) => Promise<T>

type MyHTTPOptions = {
  authRequired: boolean
  overrideLanguage?: string
  msType?: string
  additionalHeader?: AdditionalHeaderOptions[]
}

type AdditionalHeaderOptions = {
  key: string
  value: string
}

export class MyHTTP {
  // API services to expose on the client.
  public fetchJson

  constructor(
    req: NextIronRequest,
    res: NextApiResponse,
    opts: MyHTTPOptions = {
      authRequired: true,
      msType: undefined,
      additionalHeader: [],
    },
  ) {
    const baseUrl = "http://localhost:3000/"

    const baseHttpClient = ky.create({
      prefixUrl: baseUrl,
      retry: 0,
      hooks: {
        beforeRequest: [
          (request) => {
            if (!opts.authRequired) {
              return
            }
          },
        ],
      },
    })

    const withApiClient =
      <T, U>(handler: ApiHandler<T, U>) =>
      async (params: U = {} as U): Promise<T> => {
        return handler(baseHttpClient, params)
      }

    this.fetchJson = {
      getJson: withApiClient(fetchJson),
    }
  }
}
