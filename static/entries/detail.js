import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from  'axios'
import { Provider } from 'react-redux'
import { createStore, compose  } from 'redux'

import { Layout,  Col, Row, Card, Button, message } from 'antd'
const { Content } = Layout

const counter =  (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(action)
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(
  counter, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
    const { onIncrement, data } = this.props
    return (
      <Layout style={{ marginTop: '20px', padding: '10px', background: '#fff'}}>
        <Content style={{ padding: '0 30px' }}>
          <h1 onClick={onIncrement}>{this.state.post.title}, {data}</h1>
          <div style={{marginTop: '20px', fontSize: '13px'}}>
            {this.state.post.content}
          </div>
        </Content>
      </Layout>
    )
  }
}

ReactDom.render(
  <Provider store={store} >
  <Detail data={store.getState()} onIncrement={() => store.dispatch({ type: 'INCREMENT' })} />
  </Provider>,
  document.getElementById('app')
)