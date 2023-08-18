import React, { useState } from 'react'
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/solid'
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline'
import '../../app/globals.css'

type Comment = {
  id: number
  content: string
  commentLike: number
  username: string
  created_at: string
  updated_at: string
}

type PostData = {
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

type PostProps = {
  data: PostData
}

const Post: React.FC<PostProps> = ({ data }) => {
  const {
    pmPostTitle,
    pmPostWriter,
    pmMainImage,
    pmPostPictures,
    pmPostLike,
    pmTag,
    pmPostContent,
    comments,
  } = data

  const [showComments, setShowComments] = useState(false)
  const [liked, setLiked] = useState(false)
  const [animatedLike, setAnimatedLike] = useState<number | null>(null)
  const [heartHover, setHeartHover] = useState(false)
  const [currentPicture, setCurrentPicture] = useState(0)

  const handleShowComments = () => {
    setShowComments(!showComments)
  }

  const likeClickHandler = () => {
    if (!liked) {
      setAnimatedLike(Date.now())
      setTimeout(() => {
        setAnimatedLike(null)
      }, 800)
    }
    setLiked(!liked)
  }

  const nextPicture = () => {
    setCurrentPicture((currentPicture + 1) % (pmPostPictures.length + 1))
  }

  const prevPicture = () => {
    setCurrentPicture(
      (currentPicture - 1 + pmPostPictures.length + 1) %
        (pmPostPictures.length + 1),
    )
  }

  return (
    <div className="bg-white border shadow-md p-4 mb-4 transition-all duration-300 ease-in-out max-w-md mx-auto">
      <h2 className="text-xl font-bold">{pmPostTitle}</h2>
      <p className="text-sm text-gray-500">{pmPostWriter}</p>
      <div className="mt-2 mb-4">
        <p>{pmPostContent}</p>
      </div>
      <div className="mt-4 relative">
        {pmPostPictures.length >= 1 && (
          <>
            <button
              onClick={prevPicture}
              className="absolute top-1/2 left-1 z-10"
            >
              {'<'}
            </button>
            <button
              onClick={nextPicture}
              className="absolute top-1/2 right-1 z-10"
            >
              {'>'}
            </button>
          </>
        )}
        <div className="overflow-hidden">
          <div className="slide-track" style={{ width: '100%', height: '64' }}>
            <img
              className={`w-full h-64 object-cover cursor-pointer slider-img ${
                currentPicture === 0 ? 'block' : 'hidden'
              }`}
              src={pmMainImage}
              alt={'mainImage'}
            />
            {pmPostPictures.map((picture, index) => (
              <img
                key={index + 1}
                className={`w-full h-64 object-cover cursor-pointer slider-img ${
                  currentPicture === index + 1 ? 'block' : 'hidden'
                }`}
                src={picture}
                alt={`${index + 2}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <button
          onMouseEnter={() => setHeartHover(true)}
          onMouseLeave={() => setHeartHover(false)}
          onClick={likeClickHandler}
          className={`focus:outline-none ${heartHover ? 'text-red-400' : ''}`}
        >
          {!liked ? (
            <OutlineHeartIcon className="h-5 w-5" />
          ) : (
            <SolidHeartIcon className="h-5 w-5" />
          )}
        </button>
        <span className="ml-1">{liked ? pmPostLike + 1 : pmPostLike}</span>
        <span
          className="ml-auto text-sm text-gray-500 cursor-pointer"
          onClick={handleShowComments}
        >
          {showComments ? '댓글 닫기' : '댓글 열기'}
        </span>
      </div>
      <div className={`mt-2 ${showComments ? 'block' : 'hidden'}`}>
        {comments.map((comment) => (
          <div key={comment.id} className="border-t py-2">
            <h3 className="text-sm font-semibold">{comment.username}</h3>
            <p className="text-xs text-gray-500">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
