import img from "../assets/react.svg"
export default function Trending(){
  return(
    <>
      <div className="Trending">
        <h5>Trend Topics</h5>
        <ul>
          <li>Sport</li>
          <li>Game</li>
          <li>programming</li>
        </ul>
      </div>
      <div className="social">
        <h6>Follow & Like</h6>
        <ul>
          <li>
            <img src={img} alt="whatApp"/>
            <p>Join</p>
          </li>
          <li>
           <img src={img} alt="facebook"/>
            <p>Follow</p>
          </li>
          <li>
            <img src={img} alt="Youtube"/>
            <p>Watch </p>
          </li>
        </ul>
      </div>
    </>
    )
}