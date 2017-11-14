import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from  'axios'

import { Layout,  Col, Row, Card, Button, message } from 'antd'
const { Header, Content } = Layout


class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loading: false,
      next: ''
    }
  }

  componentDidMount () {
    axios.get('/api/list/')
      .then(response => {
        this.setState({
          posts: response.data.results,
          next: response.data.next
        })
      })
  }

  loadMore = () => {
    if (!this.state.next) {
      message.info('没有更多了')
      this.setState({
        loading: false
      })
      return
    }
    this.setState({
      loading: true
    })
    axios.get(this.state.next)
      .then(response => {
        this.setState((state, props) => {
          return {
            posts: state.posts.concat(response.data.results),
            next: response.data.next,
            loading: false
          }
        })
      })
  }

  render () {
    const posts = this.state.posts
    const cards = posts.map(post => {
      let link = `/detail/${post.id}`
      return (
        <Col span={24} style={{marginBottom: '10px'}} key={post.id}>
          <Card title={post.title} bordered={true}  extra={<a href={link}>详情</a>}>
            <p className="post-intro">
              {post.intro}
            </p>
          </Card>
        </Col>
      )
    })
    return (
      <Layout style={{ marginTop: '20px', padding: '10px', background: '#fff'}}>
        <Content style={{ padding: '0 30px' }}>
          <Row gutter={16}>
            {cards}
          </Row>
          <Button style={{width: '100%'}} onClick={this.loadMore} loading={this.state.loading}>加载更多</Button>
        </Content>
      </Layout>
    )
  }
}


ReactDom.render(
  <Post />,
  document.getElementById('app')
)