import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomeArticleList} from "./store/actions"

class Home extends Component {
  componentDidMount() {
    !this.props.homeList.length && this.props.getArticleList()
  }

  render() {
    return (
        <div>
          <p>this is home</p>
          <p>{this.props.name}</p>
          {
            this._getListDom()
          }
        </div>
    )
  }

  _getListDom() {
    return this.props.homeList.map(item => <p key={item._id}>{item.title}</p>)
  }
}

Home.loadData = (store) => {
  // 负责在服务器渲染之前，把数据加载好
  return store.dispatch(getHomeArticleList())
}

const mapStateToProps = state => ({
  name: state.home.name,
  homeList: state.home.homeList
})

const mapDispatchToProps = dispatch => ({
  getArticleList() {
    dispatch(getHomeArticleList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
