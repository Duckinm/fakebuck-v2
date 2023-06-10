import CreatePostBox from '@/components/post/CreatePostBox'
import PostList from '@/components/post/PostList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function PostContainer() {
  const [posts, setPosts] = useState([])

  // TODO this should be refactored to use react-query
  const fetchPost = async () => {
    const res = await axios.get('http://localhost:8888/posts/friends', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
    setPosts(res.data.posts)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  // TODO this should be refactored to use react-query
  const createPost = async (message, file) => {
    const formData = new FormData()
    if (message) {
      formData.append('message', message)
    }
    if (file) {
      formData.append('image', file)
    }

    try {
      const res = await axios.post('http://localhost:8888/posts', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      })
      const postsAfterCreated = [res.data.post, ...posts]
      setPosts(postsAfterCreated)
      // await fetchPost();
    } catch (err) {
      console.log(err)
      toast.error('Error create post')
    }
  }

  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostBox createPost={createPost} />
      <PostList posts={posts} />
    </div>
  )
}
