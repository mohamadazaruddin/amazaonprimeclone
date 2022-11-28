import ky from "ky"
import { responseTypes } from "ky/distribution/core/constants"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { JsonResponse } from "~/src/services/types/types"

const Movie = () => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    fetch()
  }, [])
  const [movie, setMovie] = useState<JsonResponse[]>([])
  const fetch = async () => {
    const response = await ky.get("/api/fetchJson").json<JsonResponse[]>()
    if (response) {
      setMovie(response)
    }
    console.log(movie, "movie")
  }
  return (
    <p>
      Post: {id}
      {movie[0].description}
    </p>
  )
}

export default Movie
