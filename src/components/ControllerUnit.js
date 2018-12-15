import React, {Component} from 'react';

class ControllerUnit extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.handle && this.props.handle()
        e.stopPropagation()
        e.preventDefault()
    }

    render() {
        let controllerClassName = "controller-unit"
        if (this.props.arrange) {
            if (this.props.arrange.isCenter) {
                controllerClassName += " is-center "
            }

            if (this.props.arrange.isInverse) {
                controllerClassName += " is-inverse "
            }
        }

        return (
            <span className={controllerClassName} onClick={this.handleClick}></span>
        )
    }
}

export default ControllerUnit