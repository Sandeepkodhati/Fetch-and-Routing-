// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedBlogData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    console.log(updatedBlogData)
    this.setState({blogData: updatedBlogData, isLoading: false})
  }

  getRenderedData = () => {
    const {blogData} = this.state
    const {title, avatarUrl, imageUrl, author, content} = blogData
    return (
      <div>
        <h1 className="title-heading">{title}</h1>
        <div className="row-styling">
          <img src={avatarUrl} className="avatar-image" alt="avatar" />
          <p className="author-description">{author}</p>
        </div>
        <div>
          <img src={imageUrl} className="blog-item-image" alt={title} />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.getRenderedData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
