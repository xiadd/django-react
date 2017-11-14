import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from  'axios'


class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    axios.get('/api/list/')
      .then(response => {
        this.setState({
          posts: response.data.results
        })
      })
  }

  render () {
    const posts = this.state.posts
    const cards = posts.map(post => {
      return <h1 key={post.id}>{post.title}</h1>
    })
    return (
      <div>
        {cards}
      </div>
    )
  }
}


ReactDom.render(
  <Post />,
  document.getElementById('app')
)