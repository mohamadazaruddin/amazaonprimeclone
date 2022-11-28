import ky from "ky"
type Response = {
  id: number
  message: string
}
const fetchJson = async (httpClient: typeof ky) => {
  return httpClient.get("videoData.json").json<Response>()
}
export default fetchJson
