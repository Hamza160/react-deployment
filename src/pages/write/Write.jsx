import './write.css'

const Write = () => {
  return (
    <div className="write">
      <img className="writeImage" src="https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:'none'}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus="true"/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story" type="text" className="writeInput writeTex"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
