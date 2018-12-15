import React, {Component} from 'react';

class ImgFigure extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    /**
     * 点击事件
     */
    handleClick(e) {
        if (this.props.arrange.isCenter) {
            this.props.inverse && this.props.inverse()
        } else {
            this.props.center && this.props.center()
        }

        e.stopPropagation()
        e.preventDefault()

    }

    render() {
        let styleObj = {}

        // 如果有定位信息,那么使用定位信息
        if (this.props.arrange.pos) {
            styleObj = {...this.props.arrange.pos}
        }

        // 如果有图片的旋转角度、添加旋转角度
        if (this.props.arrange.rotate && !styleObj["transform"]) {
            (["transform", "MsTransform", "MozTransform", "WebkitTransform"]).forEach(value => {
                styleObj[value] = "rotate(" + this.props.arrange.rotate + "deg)";
            })
        }

        if (this.props.arrange.isCenter) {
            styleObj["zIndex"] = 11
        }

        let imgFigureClassName = this.props.arrange.isInverse ? "img-figure is-inverse" : "img-figure";

        return (
            <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
                <img src={"/images/" + this.props.data.url} alt={this.props.data.title}/>
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                    <div className="img-back" onClick={this.handleClick}>
                        <p>{this.props.data.content}</p>
                    </div>
                </figcaption>
            </figure>
        )
    }
}

export default ImgFigure