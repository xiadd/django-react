import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from  'axios'

import { Layout,  Col, Row, Card, Button, message } from 'antd'
const { Content } = Layout


class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  componentDidMount () {
    const id = document.getElementById('app').dataset['postId']
    axios.get(`/api/detail/${id}/`)
      .then(response => {
        this.setState({
          post: response.data
        })
      })
  }

  render () {
    return (
      <Layout style={{ marginTop: '20px', padding: '10px', background: '#fff'}}>
        <Content style={{ padding: '0 30px' }}>
          <h1>{this.state.post.title}</h1>
          <div style={{marginTop: '20px', fontSize: '13px'}}>
            {this.state.post.content}
          </div>
        </Content>
      </Layout>
    )
  }
}

ReactDom.render(
  <Detail/>,
  document.getElementById('app')
)