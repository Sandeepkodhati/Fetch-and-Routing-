// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogData
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container row-styling">
        <div className="image-container">
          <img src={imageUrl} className="image" alt={title} />
        </div>
        <div>
          <p className="custom-description">{topic}</p>
          <h1 className="title">{title} </h1>
          <div className="row-styling">
            <img src={avatarUrl} className="avatar" alt="avatar" />
            <p className="custom-description">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
