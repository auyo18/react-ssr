import React, {Component} from 'react'

export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      styles._getCss && this.props.staticContext.css.push(styles._getCss())
    }

    render() {
      return <DecoratedComponent {...this.props}/>
    }
  }
}
