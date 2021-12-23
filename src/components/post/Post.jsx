import './post.css'

const Post = () => {
  return (
    <div className="post">
      <img className="postImage" src="https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem, ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut saepe voluptas animi quod quam non ullam alias inventore rem natus porro, quae quo voluptate quis dolor iste a? Optio!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, soluta minus iure aspernatur saepe, architecto quidem aut quaerat laudantium nemo eligendi, culpa mollitia tempora itaque vel placeat labore incidunt dolores.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, excepturi modi, quam voluptate saepe quo, animi fugit expedita minima dolore incidunt officiis hic quidem quasi architecto dignissimos cupiditate mollitia tenetur?</p>
    </div>
  )
}

export default Post
