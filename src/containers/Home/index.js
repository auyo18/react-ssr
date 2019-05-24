import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomeArticleList} from "./store/actions"
import styles from './index.scss'
import withStyle from "../../withStyle"

class Home extends Component {
  componentDidMount() {
    !this.props.homeList.length && this.props.getArticleList()
  }

  render() {
    return (
        <div className={styles.home}>
          <p>this is home</p>
          <button onClick={() => {
            alert(123)
          }}>click</button>
          <p>{this.props.name}</p>
          {
            this._getMoreListDom()
          }
          {
            this._getListDom()
          }
        </div>
    )
  }

  _getListDom() {
    return this.props.homeList.map(item => <p key={item._id}>{item.title}</p>)
  }

  _getMoreListDom() {
    return this.props.moreList.map(item => <p key={item._id}>{item.title}</p>)
  }
}

const mapStateToProps = state => ({
  name: state.home.name,
  homeList: state.home.homeList,
  moreList: state.home.moreList
})

const mapDispatchToProps = dispatch => ({
  getArticleList() {
    dispatch(getHomeArticleList())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles))

ExportHome.loadData = store => {
  return store.dispatch(getHomeArticleList())
}

export default ExportHome
