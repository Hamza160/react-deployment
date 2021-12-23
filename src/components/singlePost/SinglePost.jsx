import './singlepost.css'
import {Link} from 'react-router-dom'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <Link className="link" to="single/1">
        <img width="100%" src="https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="singlePostImage" />
        </Link>
        <h1 className="singlePostTitle">
        <Link className="link" to="single/1">
          Lorem ipsum dolor sit amet
          </Link>
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePageInfo">
            <span className="singlePostAuthor">Author: <b>Hamza Ashraf</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
            <p className="singlePostDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit expedita modi sit exercitationem, atque tempora ratione eius deserunt dolores asperiores aut dolorum dolorem cum explicabo accusantium iure! Eius, suscipit doloribus!
            Laudantium adipisci, in inventore doloremque aut repellat reiciendis assumenda obcaecati deleniti sint eos? Ratione temporibus libero culpa quibusdam, fuga optio totam corporis ab. Neque ullam quis dolorum et impedit odit.
            Quam corrupti numquam reiciendis esse id neque dolor iusto at voluptatem. Similique soluta autem amet pariatur, aliquam nesciunt quibusdam nam explicabo itaque minus, deleniti corrupti non error, quaerat natus ipsam.
            Velit ducimus modi, incidunt nihil inventore id, sequi repellat esse expedita perspiciatis perferendis! Nihil omnis, molestias neque reiciendis autem, animi doloribus facere consequatur molestiae deserunt quae voluptate doloremque nobis minus?
            Sit eligendi, recusandae at alias velit, voluptates earum soluta ipsum eaque natus laboriosam deserunt sunt iure nemo aspernatur aut tempora. Amet aliquid vero doloremque, explicabo mollitia porro odit neque autem.
            Ab aliquid molestiae eos. Reprehenderit aliquid reiciendis sint ex sit! Vitae modi soluta fuga quisquam temporibus? Doloremque unde vero molestiae! Repellendus minima culpa dolore quaerat deserunt dicta natus illum ullam.
            Laudantium laborum beatae reiciendis, culpa tempora minus fugiat repellat deleniti officiis porro! Incidunt, doloribus. Sequi necessitatibus qui accusantium facere dolores impedit repellendus. Distinctio ipsum cumque sunt harum, rerum unde ut.
            Distinctio incidunt veniam architecto facilis, illum commodi alias atque temporibus eos molestias harum velit! Quam molestiae et natus nam quaerat voluptate error architecto nisi, praesentium alias, distinctio, nesciunt vel molestias!
            Laudantium aliquam minus, quae officiis, assumenda quaerat commodi unde quis deleniti porro rem sed quia, ea blanditiis eaque expedita architecto obcaecati harum non nisi. Animi adipisci provident vitae nesciunt expedita.
            Temporibus magni ipsa laudantium velit dignissimos dolores quam hic voluptatibus perspiciatis expedita. Dolorum error molestias sed expedita tempore voluptatum, fugit, quo laudantium autem officia vel ipsum, repellat quos excepturi quae!</p>
          </div>
    </div>
  )
}

export default SinglePost
 