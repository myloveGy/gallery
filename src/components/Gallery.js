import React, {Component} from 'react'
import images from "../data/image"
import {ImgFigure, ControllerUnit} from "./index"
import ReactDOM from 'react-dom'
import {get30DegRandom, getRangeRandom} from "../utils"

class Gallery extends Component {

  constructor(props) {
    super(props)
    this.images = []
    this.state = {
      imagesArrangeArray: [
        /* {
            // 定位信息
            pos: {
                left: 0,
                top: 0,
            },
            // 旋转值
            rotate: 0,

            // 是否翻转
            isInverse: false,

            // 是否居中
            isCenter: false,
        } */
      ]
    }
  }

  Constant = {
    centerPos: {
      left: 0,
      right: 0,
    },
    // 水平方向的取值范围
    hPosRange: {
      leftSectionX: [0, 0],
      rightSectionX: [0, 0],
      y: [0, 0]
    },
    // 垂直方法的取值
    vPosRange: {
      x: [0, 0],
      topY: [0, 0]
    }
  };

  /**
   * 翻转图片
   * @param index 输入当前需要执行inverse 操作的图片对应的图片的index
   * @return {Function} 这是一个闭包函数，返回一个正真的
   */
  inverse(index) {
    let imagesArrangeArray = this.state.imagesArrangeArray
    imagesArrangeArray[index].isInverse = !imagesArrangeArray[index].isInverse
    this.setState({imagesArrangeArray})
  }

  /**
   * 利用rearrange 函数，居中图片
   * @param index
   * @returns {Function}
   */
  center(index) {
    this.rearrange(index)
  }

  /**
   * 添加事件
   *
   * @param index
   */
  handle(index) {
    return () => {
      if (this.state.imagesArrangeArray[index].isCenter) {
        this.inverse(index)
      } else {
        this.center(index)
      }
    }
  }

  // 组件加载完成处理
  componentDidMount() {
    // 获取浏览器宽度和高度
    let sDom = ReactDOM.findDOMNode(this.input)
    let sWidth = sDom.scrollWidth;
    let sHeight = sDom.scrollHeight;
    let sHalfWidth = Math.ceil(sWidth / 2);
    let sHalfHeight = Math.ceil(sHeight / 2);

    // 拿到一个imageFigure 的大小
    let dom = ReactDOM.findDOMNode(this.images[0])
    let iWidth = dom.scrollWidth,
      iHeight = dom.scrollHeight,
      hWidth = Math.ceil(iWidth / 2),
      hHeight = Math.ceil(iHeight / 2);

    this.Constant.centerPos = {
      left: sHalfWidth - hWidth,
      top: sHalfHeight - hHeight
    }

    // 计算左侧、右侧的取值范围
    this.Constant.hPosRange.leftSectionX[0] = -hWidth;
    this.Constant.hPosRange.leftSectionX[1] = sHalfWidth - hWidth * 3;
    this.Constant.hPosRange.rightSectionX[0] = sHalfWidth + hWidth;
    this.Constant.hPosRange.rightSectionX[1] = sWidth - hWidth;
    this.Constant.hPosRange.y[0] = -hHeight;
    this.Constant.hPosRange.y[1] = sHeight - hHeight;

    // 计算上侧区域图片分布位置的取值范围
    this.Constant.vPosRange.topY[0] = -hHeight;
    this.Constant.vPosRange.topY[1] = sHalfHeight - hHeight * 3;
    this.Constant.vPosRange.x[0] = sHalfWidth - iWidth;
    this.Constant.vPosRange.x[1] = sHalfWidth;

    this.rearrange(0)
  }

  /**
   * 从新布局所有图片
   *
   * @param centerIndex
   */
  rearrange(centerIndex) {
    let imagesArrangeArray = this.state.imagesArrangeArray,
      Constant = this.Constant,
      hPosRange = Constant.hPosRange,
      vPosRange = Constant.vPosRange,
      hPosRangeLeftSecX = hPosRange.leftSectionX,
      hPosRangeRightSecX = hPosRange.rightSectionX,
      hPosRangeY = hPosRange.y,
      vPosRangeTopY = vPosRange.topY,
      vPosRangeX = vPosRange.x,

      imagesArrangeTopArray = [],
      // 取一个或者不取一个图片放在上面
      topImageNum = Math.floor(Math.random() * 2),
      imagesArrangeCenterArray = imagesArrangeArray.splice(centerIndex, 1);

    // 首先居中centerIndex 的图片
    imagesArrangeCenterArray[0] = {
      pos: Constant.centerPos,
      rotate: 0,
      isInverse: false,
      isCenter: true,
    };

    // 取出要布局上侧的图片的状态信息
    let topImageSpliceIndex = Math.ceil(Math.random() * (imagesArrangeArray - topImageNum));
    imagesArrangeTopArray = imagesArrangeArray.splice(topImageSpliceIndex, topImageNum);

    // 布局位于上侧的图片
    imagesArrangeTopArray.forEach((value, index) => {
      imagesArrangeTopArray[index] = {
        pos: {
          top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
          left: getRangeRandom(vPosRangeX[0], vPosRangeX[1]),
        },
        rotate: get30DegRandom(),
        isInverse: false,
        isCenter: false,
      }
    })

    // 布局左右两侧的图片
    for (let i = 0, j = imagesArrangeArray.length, k = j / 2; i < j; i++) {
      let hPosRangeLORX = i < k ? hPosRangeLeftSecX : hPosRangeRightSecX;

      imagesArrangeArray[i] = {
        pos: {
          top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
          left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
        },
        rotate: get30DegRandom(),
        isInverse: false,
        isCenter: false,
      }
    }

    if (imagesArrangeTopArray && imagesArrangeTopArray[0]) {
      imagesArrangeArray.splice(topImageSpliceIndex, 0, imagesArrangeTopArray[0])
    }

    imagesArrangeArray.splice(centerIndex, 0, imagesArrangeCenterArray[0])
    this.setState({imagesArrangeArray})
  }

  render() {
    let imgFigures = [], controllerUnit = [];
    images.forEach((item, index) => {
      if (!this.state.imagesArrangeArray[index]) {
        let imagesArrangeArray = this.state.imagesArrangeArray;
        imagesArrangeArray[index] = {
          pos: {
            left: 0,
            top: 0,
          },

          rotate: 0,

          isInverse: false,
          isCenter: false,
        }

        this.setState({imagesArrangeArray})
      }

      // 图片信息
      imgFigures.push(<ImgFigure
        handle={this.handle(index)}
        key={index}
        arrange={this.state.imagesArrangeArray[index]}
        data={item}
        ref={imgRef => {
          this.images[index] = imgRef
        }}/>)

      // 按钮信息
      controllerUnit.push(<ControllerUnit key={index} arrange={this.state.imagesArrangeArray[index]}
                                          handle={this.handle(index)}/>)
    });

    return (
      <section className="stage" style={{height: window.document.body.scrollHeight + "px"}} ref={input => {
        this.input = input
      }}>
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnit}
        </nav>
      </section>
    )
  }
}

export default Gallery