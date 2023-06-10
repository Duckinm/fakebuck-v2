import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from '@/components/icons'
import axiosInstance from '@/lib/axios'
import { useStore } from '@/store/use-store'
import { useState } from 'react'

export default function PostFooter({ post }) {
  const user = useStore((state) => state.user)

  const [isLiked, setIsLiked] = useState(post.Likes.find((el) => el.User.id === user.id))
  const [numLikes, setNumLikes] = useState(post.Likes.length)

  const toggleLike = () => {
    if (isLiked) {
      setNumLikes(numLikes - 1)
    } else {
      setNumLikes(numLikes + 1)
    }
  }

  const handleClickLike = async () => {
    toggleLike()
    await axiosInstance.post(`/posts/${post.id}/like`)
    setIsLiked(!isLiked)
  }

  return (
    <div>
      <div className="flex justify-between items-center py-2.5">
        <div>
          {numLikes > 0 && (
            <>
              <div className="h-[1.125rem] w-[1.125rem] rounded-full bg-blue-500 inline-flex items-center justify-center">
                <ThumbsUpIcon />
              </div>
              <span className="text-sm ml-1">{numLikes}</span>
            </>
          )}
        </div>

        <span role="button" className="hover:underline text-sm text-gray-500">
          8 comments
        </span>
      </div>
      <hr />
      <div className="flex py-1 gap-1">
        <button className="py-1.5 w-full text-sm font-semibold rounded hover:bg-gray-200" onClick={handleClickLike}>
          <div className="flex gap-2 justify-center items-center">
            <ThumbsUpAltIcon className={`${isLiked ? 'fill-blue-600' : 'fill-gray-500'}`} />
            <span className={`${isLiked ? 'text-blue-600' : 'text-gray-500'}`}>Like</span>
          </div>
        </button>
        <button className="py-1.5 w-full text-sm font-semibold text-gray-500 rounded hover:bg-gray-200">
          <div className="flex gap-2 justify-center items-center">
            <MessageIcon className="fill-gray-500" />
            <span className="text-gray-500">Comment</span>
          </div>
        </button>
      </div>
    </div>
  )
}
