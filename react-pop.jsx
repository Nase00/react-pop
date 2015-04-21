var React = require('react/addons')
    , ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

React.initializeTouchEvents(true)

var Toggle = React.createClass({
    render: function() {
      return (
        <a className="react-pop-toggle" href="#" onClick={this.props.on_click}>
          {this.props.label}
        </a>
      )
    }
  })

var Pop = React.createClass({
    propTypes: {
      opened: React.PropTypes.bool
      , labelOpen: React.PropTypes.string
      , labelClose: React.PropTypes.string
    }
    , getDefaultProps: function() {
      return {
        opened: false
        , labelOpen: "Toggle"
        , labelClose: "Toggle"
      }
    }
    , getInitialState: function() {
      return {
        mounted: false
        , opened: false
      }
    }
    , componentDidMount: function() {
      this.setState({
        mounted: true
      })
    }
    , toggle: function() {
      this.setState({opened: !this.state.opened})
    }
    , render: function() {
      console.log(this.props)
      if (this.state.opened) {
        var content = this.props.children
            , label = this.props.labelClose
      } else {
        var content = null
            , label = this.props.labelOpen
      }
      return (
        <div className="react-pop-wrapper">
          <Toggle label={label} on_click={this.toggle} />
          <div className="react-pop-content">
            {content}
          </div>
        </div>
      )
    }
  })

module.exports = Pop