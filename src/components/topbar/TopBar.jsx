import "./topbar.css"
import {Link} from 'react-router-dom'
const TopBar = ({user}) => {
    return (
      <>
      <div className="top">
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="write">Write</Link></li>
            <li className="topListItem"><Link className="link" to="write">ABOUT US</Link></li>
            <li className="topListItem"><Link className="link" to="write">CONTACT US</Link></li>
            
            <li className="topListItem">{user ? 'LOGOUT' : ''}</li>
          </ul>
        </div>
        <div className="topRight">
          {
            user ? (
            <>
              <Link className="link" to="settings">
              <img className="topImage" src="https://scontent.fisb5-2.fna.fbcdn.net/v/t1.6435-9/176421775_1560922487435338_3246939728978845855_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGMa3LSxeuuqnbC5zzwq7C1MVhE-eg0lUYxWET56DSVRjqwYHeA96PQ_qeVkhwAf7NgRNxkozHNrhPnjTcK6CaA&_nc_ohc=9mb0Dfh4bVsAX9Mxq7I&_nc_ht=scontent.fisb5-2.fna&oh=00_AT-GUocHr62Aiuyp6EKdv2hIsbLWWuV_ZH66iY2YwqF-4g&oe=61E0D2E8" alt="" />
              </Link>
              <i className="topSearchIcon fas fa-search"></i>
            </>
            ) : 
            (
              <ul className="topList">
              <li className="topListItem"><Link className="link" to="login">Login</Link></li>
              <li className="topListItem"><Link className="link" to="register">Register</Link></li>
              </ul>
            )
          }
          
        </div>
      </div>
      </>
    );
}

export default TopBar