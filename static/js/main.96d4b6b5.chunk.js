(this["webpackJsonpreact-dentaku"]=this["webpackJsonpreact-dentaku"]||[]).push([[0],{12:function(t,e,n){t.exports=n(26)},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var r=n(0),u=n.n(r),a=n(5),c=n.n(a),o=n(3),i=n(2),b=n(6),l=n(1),p=n(4),O={"+":function(t,e){return new p.BigNumber(t).plus(e).toString(10)},"-":function(t,e){return new p.BigNumber(t).minus(e).toString(10)},"*":function(t,e){return new p.BigNumber(t).times(e).toString(10)},"/":function(t,e){return new p.BigNumber(t).dividedBy(e).toString(10)},nil:function(){throw new Error("no operator")}},f={EMPTY:{putNumber:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{a:e,state:"ONE_NUM"})},putOperator:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{op:e,state:"ONE_OP"})},putEqual:function(t){return Object(l.a)(Object(l.a)({},t),{},{state:"ANSWER"})}},ONE_NUM:{putNumber:function(){throw new Error("unexpected trigger <Number> in <ONE_NUM> state")},putOperator:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{op:e,state:"ONE_OP"})},putEqual:function(t){return Object(l.a)(Object(l.a)({},t),{},{state:"ANSWER"})}},ONE_OP:{putNumber:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{b:e,state:"TWO_NUM"})},putOperator:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{op:e,state:"ONE_OP"})},putEqual:function(t){return Object(l.a)(Object(l.a)({},t),{},{a:O[t.op](t.a,t.a),state:"ANSWER"})}},TWO_NUM:{putNumber:function(){throw new Error("unexpected trigger <Number> in <TWO_NUM> state")},putOperator:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{a:O[t.op](t.a,t.b),op:e,state:"ONE_OP"})},putEqual:function(t){return Object(l.a)(Object(l.a)({},t),{},{a:O[t.op](t.a,t.b),state:"ANSWER"})}},ANSWER:{putNumber:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{a:e,state:"NEXT_NUM"})},putOperator:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{op:e,state:"ONE_OP"})},putEqual:function(t){return Object(l.a)(Object(l.a)({},t),{},{a:O[t.op](t.a,t.b),state:"ANSWER"})}},NEXT_NUM:{putNumber:function(){throw new Error("unexpected trigger <Number> in <NEXT_NUM> state")},putOperator:function(t,e){return Object(l.a)(Object(l.a)({},t),{},{op:e,state:"ONE_OP"})},putEqual:function(t){return Object(l.a)(Object(l.a)({},t),{},{a:O[t.op](t.a,t.b),state:"ANSWER"})}}},E=function(t,e){return f[t.state].putNumber(t,String(e))},s=function(t,e){return 0===t.length||"0"===t?String(e):t+e},m=function(){return Object(l.a)(Object(l.a)({},{a:"0",b:"0",op:"nil",state:"EMPTY"}),{},{input:""})},j=function(t,e){return""!==t.input&&(t=Object(l.a)(Object(l.a)({},E(t,t.input)),{},{input:""})),Object(l.a)(Object(l.a)({},function(t,e){return f[t.state].putOperator(t,e)}(t,e)),{},{input:""})},N=function(t){return""!==t.input&&(t=Object(l.a)(Object(l.a)({},E(t,t.input)),{},{input:""})),Object(l.a)(Object(l.a)({},f[(e=t).state].putEqual(e)),{},{input:""});var e},d=Object(b.b)({name:"dentaku",initialState:m(),reducers:{digit:function(t,e){return function(t,e){return Object(l.a)(Object(l.a)({},t),{},{input:s(t.input,e)})}(t,e.payload)},period:function(t){return function(t){return Object(l.a)(Object(l.a)({},t),{},{input:(e=t.input,0===e.length?"0.":e.includes(".")?e:e+".")});var e}(t)},negate:function(t){return function(t){return Object(l.a)(Object(l.a)({},t),{},{input:(e=t.input,0===e.length?"":"0"===e?"0":"-"===e.charAt(0)?e.slice(1):"-"+e)});var e}(t)},backspace:function(t){return function(t){return Object(l.a)(Object(l.a)({},t),{},{input:(e=t.input,0===e.length?"":/^-\d$/.test(e)?"0":e.slice(0,-1)||"0")});var e}(t)},clearEntry:function(t){return e=t,Object(l.a)(Object(l.a)({},e),{},{input:""});var e},operator:function(t,e){return j(t,e.payload)},equal:function(t){return N(t)},clear:function(t){return m()}}}),k=d.actions,g=k.digit,C=k.period,w=k.backspace,h=k.negate,v=k.clearEntry,_=k.operator,S=k.equal,M=k.clear,W=d.reducer,q=Object(i.c)({dentaku:W}),A=Object(b.a)({reducer:q}),P=o.c,U=A,y=(n(23),function(){var t=P((function(t){return t.dentaku.a})),e=P((function(t){return t.dentaku.input}));return u.a.createElement("div",{className:"display"},""===e?t:e)}),T=(n(24),function(){var t=Object(o.b)();return u.a.createElement("div",{className:"frame"},u.a.createElement("button",{onClick:function(){return t(v())}},"CE"),u.a.createElement("button",{onClick:function(){return t(M())}},"C"),u.a.createElement("button",{onClick:function(){return t(w())}},"\u2190"),u.a.createElement("button",{onClick:function(){return t(_("/"))}},"\xf7"),u.a.createElement("button",{onClick:function(){return t(g(7))}},"7"),u.a.createElement("button",{onClick:function(){return t(g(8))}},"8"),u.a.createElement("button",{onClick:function(){return t(g(9))}},"9"),u.a.createElement("button",{onClick:function(){return t(_("*"))}},"\xd7"),u.a.createElement("button",{onClick:function(){return t(g(4))}},"4"),u.a.createElement("button",{onClick:function(){return t(g(5))}},"5"),u.a.createElement("button",{onClick:function(){return t(g(6))}},"6"),u.a.createElement("button",{onClick:function(){return t(_("-"))}},"-"),u.a.createElement("button",{onClick:function(){return t(g(1))}},"1"),u.a.createElement("button",{onClick:function(){return t(g(2))}},"2"),u.a.createElement("button",{onClick:function(){return t(g(3))}},"3"),u.a.createElement("button",{onClick:function(){return t(_("+"))}},"+"),u.a.createElement("button",{onClick:function(){return t(h())}},"\xb1"),u.a.createElement("button",{onClick:function(){return t(g(0))}},"0"),u.a.createElement("button",{onClick:function(){return t(C())}},"."),u.a.createElement("button",{onClick:function(){return t(S())}},"="))}),B=(n(25),function(){return u.a.createElement("div",{className:"frame"},u.a.createElement(y,null),u.a.createElement(T,null))});var R=function(){return u.a.createElement("div",{className:"App"},u.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(o.a,{store:U},u.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.96d4b6b5.chunk.js.map