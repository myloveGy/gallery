(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),s=n.n(r),o=n(2),l=n(3),c=n(5),g=n(4),m=n(6),h=[{url:"./images/1.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/2.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/3.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/4.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/5.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/6.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/7.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/6.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/7.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/3.jpg",title:"my name is liujinxing",content:"my name is jinxing"},{url:"./images/4.jpg",title:"my name is liujinxing",content:"my name is jinxing"}],u=function(e,t){return Math.ceil(Math.random()*(t-e)+e)},p=function(){return(Math.random()>.5?"":"-")+Math.ceil(30*Math.random())},f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(g.a)(t).call(this,e))).Constant={centerPos:{left:0,right:0},hPosRange:{leftSectionX:[0,0],rightSectionX:[0,0],y:[0,0]},vPosRange:{x:[0,0],topY:[0,0]}},n.images=[],n.state={imagesArrangeArray:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"inverse",value:function(e){var t=this.state.imagesArrangeArray;t[e].isInverse=!t[e].isInverse,this.setState({imagesArrangeArray:t})}},{key:"center",value:function(e){this.rearrange(e)}},{key:"handle",value:function(e){var t=this;return function(){t.state.imagesArrangeArray[e].isCenter?t.inverse(e):t.center(e)}}},{key:"componentDidMount",value:function(){var e=s.a.findDOMNode(this.input),t=e.scrollWidth,n=e.scrollHeight,a=Math.ceil(t/2),i=Math.ceil(n/2),r=s.a.findDOMNode(this.images[0]),o=r.scrollWidth,l=r.scrollHeight,c=Math.ceil(o/2),g=Math.ceil(l/2);this.Constant.centerPos={left:a-c,top:i-g},this.Constant.hPosRange.leftSectionX[0]=-c,this.Constant.hPosRange.leftSectionX[1]=a-3*c,this.Constant.hPosRange.rightSectionX[0]=a+c,this.Constant.hPosRange.rightSectionX[1]=t-c,this.Constant.hPosRange.y[0]=-g,this.Constant.hPosRange.y[1]=n-g,this.Constant.vPosRange.topY[0]=-g,this.Constant.vPosRange.topY[1]=i-3*g,this.Constant.vPosRange.x[0]=a-o,this.Constant.vPosRange.x[1]=a,this.rearrange(0)}},{key:"rearrange",value:function(e){var t=this.state.imagesArrangeArray,n=this.Constant,a=n.hPosRange,i=n.vPosRange,r=a.leftSectionX,s=a.rightSectionX,o=a.y,l=i.topY,c=i.x,g=[],m=Math.floor(2*Math.random()),h=t.splice(e,1);h[0]={pos:n.centerPos,rotate:0,isInverse:!1,isCenter:!0};var f=Math.ceil(Math.random()*(t-m));(g=t.splice(f,m)).forEach(function(e,t){g[t]={pos:{top:u(l[0],l[1]),left:u(c[0],c[1])},rotate:p(),isInverse:!1,isCenter:!1}});for(var j=0,y=t.length,d=y/2;j<y;j++){var v=j<d?r:s;t[j]={pos:{top:u(o[0],o[1]),left:u(v[0],v[1])},rotate:p(),isInverse:!1,isCenter:!1}}g&&g[0]&&t.splice(f,0,g[0]),t.splice(e,0,h[0]),this.setState({imagesArrangeArray:t})}},{key:"render",value:function(){var e=this,t=[],n=[];return h.forEach(function(a,r){e.state.imagesArrangeArray[r]||(e.state.imagesArrangeArray[r]={pos:{left:0,top:0},rotate:0,isInverse:!1,isCenter:!1}),t.push(i.a.createElement(d,{handle:e.handle(r),key:r,arrange:e.state.imagesArrangeArray[r],data:a,ref:function(t){e.images[r]=t}})),n.push(i.a.createElement(v,{key:r,arrange:e.state.imagesArrangeArray[r],handle:e.handle(r)}))}),i.a.createElement("section",{className:"stage",style:{height:window.document.body.scrollHeight+"px"},ref:function(t){e.input=t}},i.a.createElement("section",{className:"img-sec"},t),i.a.createElement("nav",{className:"controller-nav"},n))}}]),t}(a.Component),j=n(9),y=n(1),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(g.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(y.a)(Object(y.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.handle&&this.props.handle(),e.stopPropagation(),e.preventDefault()}},{key:"render",value:function(){var e=this,t={};this.props.arrange.pos&&(t=Object(j.a)({},this.props.arrange.pos)),this.props.arrange.rotate&&!t.transform&&["transform","MsTransform","MozTransform","WebkitTransform"].forEach(function(n){t[n]="rotate("+e.props.arrange.rotate+"deg)"}),this.props.arrange.isCenter&&(t.zIndex=11);var n=this.props.arrange.isInverse?"img-figure is-inverse":"img-figure";return i.a.createElement("figure",{className:n,style:t,onClick:this.handleClick},i.a.createElement("img",{src:this.props.data.url,alt:this.props.data.title}),i.a.createElement("figcaption",null,i.a.createElement("h2",{className:"img-title"},this.props.data.title),i.a.createElement("div",{className:"img-back",onClick:this.handleClick},i.a.createElement("p",null,this.props.data.content))))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(g.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(y.a)(Object(y.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.handle&&this.props.handle(),e.stopPropagation(),e.preventDefault()}},{key:"render",value:function(){var e="controller-unit";return this.props.arrange&&(this.props.arrange.isCenter&&(e+=" is-center "),this.props.arrange.isInverse&&(e+=" is-inverse ")),i.a.createElement("span",{className:e,onClick:this.handleClick})}}]),t}(a.Component);n(16);s.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.691555a6.chunk.js.map