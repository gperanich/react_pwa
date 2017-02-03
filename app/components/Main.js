var React = require('react');

var Main = react.createClass({
    render() {
        return (
            <div className='main-container'>
                {this.props.children}    
            </div>
        )
    }
})

module.exports = Main;