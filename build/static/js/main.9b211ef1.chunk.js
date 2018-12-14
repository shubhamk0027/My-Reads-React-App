(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){e.exports=a(29)},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(16),r=a.n(s),c=a(4),l=a(5),i=a(8),u=a(6),h=a(7),d=a(10),m=a(30),p=a(12),b="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:f},v=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(p.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleUpdate",value:function(e,t){this.props.updateShelf(e,t)}},{key:"render",value:function(){var e=this;return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(this.props.bookDetails.imageLinks.smallThumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){return e.handleUpdate(e.props.bookDetails,t.target.value)},value:"Move To"},o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),"  The first option doesnot works i dnt know why",o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},this.props.bookDetails.title),o.a.createElement("div",{className:"book-authors"},this.props.bookDetails.authors[0])))}}]),t}(n.Component),j=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.type),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books.map(function(t){return o.a.createElement(y,{bookDetails:t,key:t.id,updateShelf:e.props.updateShelf})}))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={books:[]},a.updateShelf=a.updateShelf.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"updateShelf",value:function(e,t){var a=this;v(e,t).then(function(n){var o=a.state.books;o.forEach(function(a){return a.id===e.id&&(a.shelf=t),a}),console.log(o),a.setState({books:o})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement(j,{type:"Currently Reading",books:this.state.books.filter(function(e){return"currentlyReading"===e.shelf}),updateShelf:this.updateShelf})),o.a.createElement("div",{className:"list-books-content"},o.a.createElement(j,{type:"Want to Read",books:this.state.books.filter(function(e){return"wantToRead"===e.shelf}),updateShelf:this.updateShelf})),o.a.createElement("div",{className:"list-books-content"},o.a.createElement(j,{type:"Read",books:this.state.books.filter(function(e){return"read"===e.shelf}),updateShelf:this.updateShelf})),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("div",{className:"open-search"},o.a.createElement(m.a,{to:"/Search"},o.a.createElement("button",null,"Add a book"))))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).searchQuery=function(e){var t=this;console.log("Query is "+e),e?E(e).then(function(e){e.error?t.setState({results:[]}):t.setState({results:e})}):this.setState({results:[]}),console.log(this.state.results)},a.state={results:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"updateShelf",value:function(e,t){v(e,t).then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(m.a,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(t){return e.searchQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.results.map(function(t){return o.a.createElement(y,{bookDetails:t,key:t.id,updateShelf:e.updateShelf})}))))}}]),t}(n.Component),N=a(32),g=a(31),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement("div",null,o.a.createElement(g.a,{exact:!0,path:"/",component:O}),o.a.createElement(g.a,{exact:!0,path:"/Search",component:S})))}}]),t}(o.a.Component);a(27);r.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.9b211ef1.chunk.js.map