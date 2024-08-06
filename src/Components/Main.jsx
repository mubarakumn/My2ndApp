import PostCard from "./PostCard"
import Trending from "./Trending"
import Advert from "./Advert"
export default function Main(){
  return(
    <>
     <div>
      <div className="category">
        <h3>Category</h3>
        <ul>
          <li>Stort</li>
          <li>books</li>
          <li>business</li>
          <li>Entertainment</li>
        </ul>
      </div>
      <div className="posts">
        <PostCard />
        <PostCard />
        <PostCard full={true}/>
        <PostCard />
        <PostCard />
      </div>
      <Advert />
     </div>
      <Trending/>
    </>
    )
}