import ky from "ky"

const singleMovies = async (
  httpClient: typeof ky,
  params: {
    id: string
  },
) => {
  console.log("In Service Transaction Details params", params)
  return httpClient.get(`transaction/view?id=${params.id}`).json()
}

export default singleMovies
