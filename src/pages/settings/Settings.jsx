import './settings.css'
import SideBar from '../../components/sidebar/SideBar'
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img style={{width:"100px"}} src="https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}}/>

            </div>
            <label>Username</label>
            <input type="text" placeholder="Username" />
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button className="settingsSubmit">Update</button>
        
        </form>
      </div>
      <SideBar/>
    </div>
  )
}

export default Settings
