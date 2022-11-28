import type { NextApiRequest, NextApiResponse } from "next"
import { MyHTTP } from "../../services/httpClient"
import { withSessionRoute } from "../../utils/withSession"
import { JsonResponse } from "../../services/types/types"

async function handler(
  req: NextApiRequest | any,
  res: NextApiResponse<JsonResponse>,
) {
  if (req.method == "GET") {
    let httpClient = new MyHTTP(req, res)

    console.log("Request", req.body)

    const response: JsonResponse | any = await httpClient.fetchJson.getJson()

    await req.session.save()
    res.status(200).json(response)
  }
}

export default withSessionRoute(handler)
