import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TopNav } from '@/components/main/TopNav'
import Post from '@/components/promotion/post'

const Promotion = () => {
  const [postList, setPostList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)

      try {
        const response = await axios.get(
          `http://49.50.161.125:8080/promotionalpost`,
        )
        if (response.data && response.data.result === 'success') {
          setPostList(response.data.data)
          console.log(response.data)
        } else {
          throw new Error(response.data.result)
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (error) return <div>Error: {error}</div>
  if (loading) return <div>Loading...</div>

  return (
    <div>
      <TopNav />
      {postList.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  )
}

export default Promotion
