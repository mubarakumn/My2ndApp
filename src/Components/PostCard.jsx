import img from "../assets/react.svg"
export default function PostCard(props){
  return(
    <>
      <div className={ !props.full ? "postCard" : "postCard2"}>
        <img src={img} alt="postCard"/>
        <div>
          <div className="title">
            <h5>Post Title</h5>
            <p>Post description not too long.</p>
          </div>
          <div className="detail">
           <p className="date">6-08-24</p>
           <p className="postBy">by Admin</p>
          </div>
        </div>
      </div>
    </>
    )
}