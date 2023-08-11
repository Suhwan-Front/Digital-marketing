import React, { useState } from 'react';
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";
import '../../app/globals.css'

type Comment = {
  text: string;
  likes: number;
};

type PostData = {
  id: number;
  productTitle: string;
  author: string;
  pictures: string[];
  likes: number;
  hashtags: string[];
  comments: Comment[];
};

type PostProps = {
  data: PostData;
};

const Post: React.FC<PostProps> = ({ data }) => {
  const {
    productTitle, author, pictures, likes, hashtags, comments,
  } = data;

  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [animatedLike, setAnimatedLike] = useState<number | null>(null);

   const handleShowComments = () => {
    setShowComments(!showComments);
  };

    const likeClickHandler = () => {
    if (!liked) {
      setAnimatedLike(Date.now());
      setTimeout(() => {
        setAnimatedLike(null);
      }, 800);
    }
    setLiked(!liked);
  };

  return (
    <div  className="post-container bg-white border shadow-md p-4 mb-4 transition-all duration-300 ease-in-out">
    <div className="bg-white border shadow-md p-4 mb-4 transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-bold">{productTitle}</h2>
      <p className="text-sm text-gray-500">{author}</p>
      <div className="mt-4 relative">
        <img
          className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={pictures[0]}
          alt={productTitle}
        />
      </div>
      <div className="flex items-center mt-2">
        <button
          onClick={likeClickHandler}
          className={`focus:outline-none ${
            liked
              ? "text-red-500 transition-colors duration-300"
              : "text-black transition-colors duration-300"
          }`}
        >
          {animatedLike && !liked && (
            <SolidHeartIcon
              className="absolute animate-bounce text-red-500 left-5 bottom-9"
              height={40}
            />
          )}
            {!liked ? (
  <OutlineHeartIcon className="h-5" />
) : (
  <SolidHeartIcon className="h-5 text-red-500" />
)}
        </button>
        <span className="ml-2">{liked ? likes + 1 : likes}</span>
        <span className="ml-2">좋아요</span>
      </div>
      <div className="mt-2">
        {hashtags.map((hashtag, index) => (
          <span key={index} className="text-blue-500 mr-2">{hashtag}</span>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={handleShowComments}
          className="text-blue-500 focus:outline-none"
        >
          {showComments ? "댓글 접기" : "댓글 더보기"}
        </button>
        {showComments && (
          <div className="mt-4">
            {comments.map((comment, index) => (
              <div key={index} className="mb-2">
                <p>{comment.text}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{comment.likes}</span>
                  <span className="ml-1">좋아요</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Post;