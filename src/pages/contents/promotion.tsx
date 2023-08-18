import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TopNav } from '../../components/main/TopNav'
import Post from '../../components/promotion/post'

interface PostType {
  id: number
  pmPostTitle: string
  pmPostWriter: string
  pmMainImage: string
  pmPostPictures: string[]
  pmPostLike: number
  pmTag: string[]
  pmPostContent: string
  comments: Comment[]
}

type Comment = {
  id: number
  content: string
  commentLike: number
  username: string
  created_at: string
  updated_at: string
}

const Promotion = () => {
  const [postList, setPostList] = useState<PostType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setError('false')
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
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError('알 수 없는 오류가 발생했습니다.')
        }
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
