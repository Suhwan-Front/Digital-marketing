import { postData } from '@/utils/_data'
import '../../app/globals.css'
import Post from '@/components/promotion/Post'
import { TopNav } from '@/components/main/TopNav'

const Promotion = () => {
  if (!postData || !Array.isArray(postData)) {
    return <div>Error: postData is not an array or undefined</div>
  }

  return (
    <div>
      <TopNav />

      {postData.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  )
}

export default Promotion
