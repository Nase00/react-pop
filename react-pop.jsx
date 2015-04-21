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
      , xOut: React.PropTypes.string
      , transitions: React.PropTypes.bool
    }
    , getDefaultProps: function() {
      return {
        opened: false
        , labelOpen: "Toggle"
        , labelClose: "Toggle"
        , xOut: "Close"
        , transitions: false
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
      var xOutDivStyle = {
        width: "100%"
        , textAlign: "right"
      }
      , xOutStyle = {
        fontFamily: "Helvetica"
        , textDecoration: "none"
      }
      if (this.state.opened) {
        var content =
                <div>
                  <div className="react-pop-xout" style={xOutDivStyle}>
                    <a className="react-pop-xout" style={xOutStyle} onClick={this.toggle} href="#">
                      {this.props.xOut}
                    </a>
                  </div>
                  {this.props.children}
                </div>
            , label = this.props.labelClose
      } else {
        var content = null
            , label = this.props.labelOpen
      }
      return (
        <div className="react-pop-wrapper">
          <Toggle label={label} on_click={this.toggle} />
          <div className="react-pop-content">
            {this.props.transitions ?
              <ReactCSSTransitionGroup transitionName="react-pop-content">
                {content}
              </ReactCSSTransitionGroup>
            : content}
          </div>
        </div>
      )
    }
  })

module.exports = Pop