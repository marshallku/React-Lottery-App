(this["webpackJsonpreact-lottery"]=this["webpackJsonpreact-lottery"]||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),c=n(3),i=n(4),s=n(7),o=n(0),u=n.n(o),l=n(6),m=n.n(l),d=(n(14),Object(s.a)(Array(45).keys())),f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={number:[0,0,0,0,0,0,0]},e.randomize=function(){if(!e.state.effect){for(var t=d.map((function(e){return e})),n=[],r=0;r<=7;r++){var a=Math.floor(Math.random()*(t.length-1));n.push(t[a]+1),t.splice(a,1)}e.setState({number:n,effect:!0}),setTimeout((function(){e.setState({effect:!1})}),8e3)}},e}return Object(a.a)(n,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",{id:"title"},"Lotto"),u.a.createElement("div",{id:"numbers"},u.a.createElement(b,{index:"0",color:"blue",number:this.state.number[0],decrypting:this.state.effect}),u.a.createElement(b,{index:"1",color:"blue",number:this.state.number[1],decrypting:this.state.effect}),u.a.createElement(b,{index:"2",color:"blue",number:this.state.number[2],decrypting:this.state.effect}),u.a.createElement(b,{index:"3",color:"red",number:this.state.number[3],decrypting:this.state.effect}),u.a.createElement(b,{index:"4",color:"red",number:this.state.number[4],decrypting:this.state.effect}),u.a.createElement(b,{index:"5",color:"grey",number:this.state.number[5],decrypting:this.state.effect}),u.a.createElement("div",{className:"plus"},"+"),u.a.createElement(b,{index:"6",color:"bonus",number:this.state.number[6],decrypting:this.state.effect})),u.a.createElement("div",null,u.a.createElement(p,{decrypting:this.state.effect,run:this.randomize})))}}]),n}(u.a.Component),p=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return u.a.createElement("button",{id:"btn",className:this.props.decrypting&&"hide",onClick:this.props.run},"\ucd94\ucca8!")}}]),n}(u.a.Component),b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={number:"?",decryptingDone:""},a}return Object(a.a)(n,[{key:"decryptEffect",value:function(){var e=this;this.setState({decryptingDone:""}),this.timer=setInterval((function(){e.randomNumber()}),10),setTimeout((function(){e.setState({decryptingDone:"done",number:e.props.number}),clearTimeout(e.timer)}),1e3*+this.props.index+1e3)}},{key:"randomNumber",value:function(){this.setState({number:Math.round(44*Math.random())+1})}},{key:"componentDidUpdate",value:function(e){var t=this.props.decrypting;console.log(t,e.decrypting),e.decrypting!==t&&t&&this.decryptEffect()}},{key:"render",value:function(){return u.a.createElement("div",{className:"ball ".concat(this.props.color," ").concat(this.state.decryptingDone)},this.state.number)}}]),n}(u.a.Component);m.a.render(u.a.createElement(f,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.c28c8ba0.chunk.js.map