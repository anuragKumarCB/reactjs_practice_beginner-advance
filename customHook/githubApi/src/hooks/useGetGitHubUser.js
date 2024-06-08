import { useEffect, useState } from "react"
import axios from "axios"

export const useGetGitHubUser = (username) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const githubApiUrl = "https://api.github.com/users"
                const { data } = await axios.get(`${githubApiUrl}/${username}`)
                setUser(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [username])

    return { user, loading, error }

}