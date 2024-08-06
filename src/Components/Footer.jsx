import Advert from "./Advert"
export default function Footer(){
  return(
    <>
      <div className="footer">
        <div className="details">
          <ul>
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </ul>
         <ul>
            <li>Blogs</li>
            <li>Blogs</li>
            <li>blogs</li>
          </ul>
        </div>
        <div className="newsletter">
          <input />
          <br />
          <button>Subscribe</button>
        </div>
      </div>
      <Advert />
    </>
    )
}