(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(14),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," toolbar sidebar backdrop"),r.a.createElement("main",null,e.children))}),s=a(5),o=a(1),u=a(2),d=a(4),m=a(3),h=function(e){return e.children},p=a(8),b=(a(15),a(16),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;default:e=null}return console.log(e),e}}]),a}(n.Component)),E=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(p.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(b,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:"Burger"},r.a.createElement(b,{type:"bread-top"}),t,r.a.createElement(b,{type:"bread-bottom"}))},f=(a(17),a(18),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))}),g=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],v=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),g.map((function(t){return r.a.createElement(f,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},k=(a(19),a(20),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),y=function(e){return r.a.createElement(h,null,r.a.createElement(k,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},C=(a(21),function(e){return r.a.createElement("button",{className:"Button "+e.btnType,onClick:e.clicked},e.children)}),N=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return r.a.createElement(h,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null," Total Price :",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(C,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(C,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},O={salad:.5,cheese:.4,meat:1.3,bacon:.7},w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(s.a)({},e.state.ingredients);n[t]=a;var r=O[t],c=e.state.totalPrice+r;e.setState({totalPrice:c,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(s.a)({},e.state.ingredients);r[t]=n;var c=O[t],l=e.state.totalPrice-c;e.setState({totalPrice:l,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("You continue!")},e}return Object(u.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(s.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(h,null,r.a.createElement(y,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(N,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),r.a.createElement(E,{ingredients:this.state.ingredients}),r.a.createElement(v,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",null,r.a.createElement(i,null,r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1a80c33e.chunk.js.map