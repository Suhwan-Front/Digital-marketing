import { postData } from "@/utils/_data";
import '../../app/globals.css'
import Post from "@/components/promotion/Post";

const Promotion = () => {
  if (!postData || !Array.isArray(postData)) {
    return <div>Error: postData is not an array or undefined</div>;
  }

  return (
    <div>
      {postData.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
};

export default Promotion;