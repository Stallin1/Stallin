(this.webpackJsonpstallin=this.webpackJsonpstallin||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(10),n=a.n(i),r=a(16),o=a(11),l=a(146),m=(a(64),a(35)),d=a(36),j=a(40),p=a(39),b=a(150),h=a(151),g=a(70),u=a.n(g),x=a(1),O=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).type=s.props.type,s.state={type:s.props.type,label:s.props.label,style:s.props.style},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(x.jsx)(b.a,{id:this.props.id,type:this.state.type,label:this.state.label,style:this.state.style,InputProps:{startAdornment:Object(x.jsx)(h.a,{position:"start",children:Object(x.jsx)(u.a,{})})}})}}]),a}(s.Component),y=a(145),f=a(71),N=a.n(f),v=a(72),w=a.n(v),A=a(73),I=a.n(A),S=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).togglePasswordVisibility=function(){s.passwordVisible?s.setState({type:"password",visibleStyle:{display:"none"},invisibleStyle:{display:"inline"}}):s.setState({type:"text",visibleStyle:{display:"inline"},invisibleStyle:{display:"none"}}),s.passwordVisible=!s.passwordVisible},s.type=s.props.type,s.state={type:s.props.type,label:s.props.label,style:s.props.style,visibleStyle:{display:"none"},invisibleStyle:{display:"inline"}},s.passwordVisible=!1,s}return Object(d.a)(a,[{key:"render",value:function(){return Object(x.jsx)(b.a,{id:this.props.id,type:this.state.type,label:this.state.label,style:this.state.style,InputProps:{startAdornment:Object(x.jsx)(h.a,{position:"start",children:Object(x.jsx)(N.a,{})}),endAdornment:Object(x.jsx)(h.a,{position:"end",children:Object(x.jsxs)(y.a,{onClick:this.togglePasswordVisibility,"aria-label":"show password",children:[Object(x.jsx)(w.a,{style:this.state.visibleStyle}),Object(x.jsx)(I.a,{style:this.state.invisibleStyle})]})})}})}}]),a}(s.Component),C=(a(95),a.p+"static/media/login.c8c15137.svg");var k=function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)("div",{elevation:10,className:"mainContainer",children:[Object(x.jsx)("div",{className:"illustration-box",children:Object(x.jsx)("img",{src:C,alt:"login"})}),Object(x.jsxs)("div",{className:"form-box",children:[Object(x.jsxs)("div",{className:"headingTextContainer",children:[Object(x.jsx)("span",{className:"headingTextItem headingText",children:"Sign In to Continue"}),Object(x.jsx)("span",{className:"headingTextItem regularText",children:"Experience the Ease Of Shopping"})]}),Object(x.jsxs)("form",{className:"formContainer",action:"/home",children:[Object(x.jsx)("div",{className:"formItem"}),Object(x.jsx)(O,{label:"Email / Phone Number",type:"text",className:"formItem"}),Object(x.jsx)("div",{className:"formItem"}),Object(x.jsx)(S,{label:"Password",type:"password"}),Object(x.jsx)("div",{className:"formItem"}),Object(x.jsx)("button",{className:"formItem signinButton",type:"button",children:"Sign In"}),Object(x.jsx)("div",{className:"formItem"}),Object(x.jsxs)("span",{className:"smallText",children:["Don't have an account?"," ",Object(x.jsx)(r.b,{to:"/signup",className:"getStarted",children:"Get Started"})]})]})]})]})})},q=function(){return Object(x.jsx)(r.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/login",children:Object(x.jsx)(k,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/login",children:Object(x.jsx)(k,{})})]})})},_=(a(98),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).type=s.props.type,s.state={type:s.props.type,label:s.props.label,style:s.props.style},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(x.jsx)(b.a,{id:this.props.id,type:this.state.type,label:this.state.label,style:this.state.style,InputProps:{startAdornment:Object(x.jsx)(h.a,{children:Object(x.jsx)("div",{})})}})}}]),a}(s.Component));var F=function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)("div",{elevation:10,className:"mainContainer",children:[Object(x.jsx)("div",{className:"illustration-box",children:Object(x.jsx)("img",{src:C,alt:"login"})}),Object(x.jsxs)("div",{className:"form-box",children:[Object(x.jsxs)("div",{className:"headingTextContainer",children:[Object(x.jsx)("span",{className:"headingTextItem headingText",children:"Create Account"}),Object(x.jsx)("span",{className:"headingTextItem regularText",children:"Experience the Ease Of Shopping"})]}),Object(x.jsxs)("form",{className:"formContainer",action:"/home",children:[Object(x.jsx)("div",{className:"formItem"}),Object(x.jsx)(O,{label:"Email",type:"text",className:"formItem"}),Object(x.jsx)("div",{className:"formItem"}),Object(x.jsxs)("div",{className:"rowContainer",children:[Object(x.jsx)(_,{label:"Phone Number",type:"phone",className:"rowItem"}),Object(x.jsx)("div",{className:"separator"}),Object(x.jsx)(_,{label:"Name",type:"text",className:"rowItem"})]}),Object(x.jsx)("div",{className:"formItem"}),Object(x.jsxs)("div",{className:"rowContainer",children:[Object(x.jsx)(S,{label:"Password",type:"password",className:"rowItem"}),Object(x.jsx)("div",{className:"separator"}),Object(x.jsx)(S,{label:"Confirm Password",type:"password",className:"rowItem"})]}),Object(x.jsx)("div",{className:"formItem"}),Object(x.jsx)("button",{className:"formItem signinButton",type:"button",children:"Sign Up"}),Object(x.jsx)("div",{className:"formItem"}),Object(x.jsxs)("span",{className:"smallText",children:["Already have an account? ",Object(x.jsx)(r.b,{to:"/login",className:"getStarted",children:"Sign In"})]})]})]})]})})},B=function(){return Object(x.jsx)("h1",{children:"Cart"})},L=a(48),P=a(148),U=a(78),H=a(147),T=a(152),J=a(77),E=a.n(J),M=a(76),Y=a.n(M),K=a.p+"static/media/Landing-img.692404d9.svg",G=(a(99),a(74)),Q=a.n(G),V=a(75),W=a.n(V);a(100);var z=function(e){return Object(x.jsxs)("div",{className:"searchbar-container",children:[Object(x.jsxs)("a",{href:"/#",className:"location-btn",children:["Location",Object(x.jsx)(Q.a,{style:{color:"#F44336"}})]}),Object(x.jsx)("input",{className:"searchbox",type:"text",placeholder:e.placeholder}),Object(x.jsx)("a",{href:"/#",type:"submit",className:"search-btn",children:Object(x.jsx)(W.a,{style:{fontSize:"35px"}})})]})},R={color:"#fff",fontSize:"30px"};var D=function(){var e=Object(s.useState)(null),t=Object(L.a)(e,2),a=t[0],c=t[1],i=function(){c(null)};return Object(x.jsxs)("header",{className:"Top-section",children:[Object(x.jsxs)("nav",{className:"Nav-bar",children:[Object(x.jsx)("div",{className:"Left-nav",children:Object(x.jsx)("img",{src:"data:image/png;base64,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",className:"Home-logo",alt:"Stallin's Logo"})}),Object(x.jsxs)("div",{className:"Right-nav",children:[Object(x.jsx)(r.b,{to:"/cart",children:Object(x.jsx)(H.a,{children:Object(x.jsx)(P.a,{badgeContent:0,color:"secondary",showZero:!0,children:Object(x.jsx)(Y.a,{style:R})})})}),Object(x.jsx)(H.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:Object(x.jsx)(E.a,{style:R})}),Object(x.jsxs)(U.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:i,children:[Object(x.jsx)(r.b,{to:"/login",children:Object(x.jsx)(T.a,{onClick:i,children:"Login"})}),Object(x.jsx)(r.b,{to:"/signup",children:Object(x.jsx)(T.a,{onClick:i,children:"Sign Up"})})]})]})]}),Object(x.jsx)("div",{className:"searchbar-wrapper-for-Landing-page",children:Object(x.jsx)(z,{placeholder:"Search for stores"})}),Object(x.jsxs)("div",{className:"landing-container",children:[Object(x.jsxs)("div",{className:"Landing-text-container",children:[Object(x.jsx)("h1",{className:"Brand",children:"STALLIN"}),Object(x.jsx)("p",{className:"tagline",children:"Markets on your finger tip"}),Object(x.jsx)("a",{href:"/#",className:"Landing-btn",children:"EXPLORE"})]}),Object(x.jsx)("div",{className:"Landing-img-container",children:Object(x.jsx)("img",{src:K,alt:"Stallin landing page "})})]})]})},X=a(79),Z=[{id:1,name:"Jhun Jhun Wala",image:"https://www.collinsdictionary.com/images/full/supermarket_406913140_1000.jpg?version=4.0.148",category:"Rashan Store",address:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et labore exercitationem.",direction:"400m away",map:"",offerImage:"https://img.icons8.com/color/48/000000/discount--v3.png",offers:"10% off on Household items",star:"3.4",rating:"40+ Rating",bestseller:"#bestseller",ownersName:"Jhun Jhun Wala & Sons",socialLinks:"example.com",products:[{id:1,name:"Biscuit",image:"https://c.ndtvimg.com/2020-06/24pps9mg_parle-650_625x300_10_June_20.jpg",price:"3",quantity:"piece",category:"Household"},{id:2,name:"Cinnamon",image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170807181545-herbs-and-spices-cinnamon.jpg",price:"2400",quantity:"Kilogram",category:"Grocery"},{id:3,name:"Notebook",image:"https://m.media-amazon.com/images/I/71Y6vqQeNtL._AC_.jpg",price:"36",quantity:"piece",category:"Stationary"},{id:4,name:"Ghee",image:"https://pureshmilk.com/blog/wp-content/uploads/2019/06/pic-21.jpg",price:"400",quantity:"liter",category:"Grocery"},{id:5,name:"Pencil Pack",image:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/36j5h8g82adkes95_1600434292.jpeg",price:"20",quantity:"piece",category:"Stationary"},{id:6,name:"MatchBox",image:"https://i.ytimg.com/vi/nSyWgUIYfHw/mqdefault.jpg",price:"6",quantity:"piece",category:"Household"},{id:7,name:"Biscuit",image:"https://c.ndtvimg.com/2020-06/24pps9mg_parle-650_625x300_10_June_20.jpg",price:"20",quantity:"piece",category:"Household"},{id:8,name:"Cinnamon",image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170807181545-herbs-and-spices-cinnamon.jpg",price:"2400",quantity:"Kilogram",category:"Grocery"},{id:9,name:"Notebook",image:"https://m.media-amazon.com/images/I/71Y6vqQeNtL._AC_.jpg",price:"36",quantity:"piece",category:"Stationary"},{id:10,name:"Ghee",image:"https://pureshmilk.com/blog/wp-content/uploads/2019/06/pic-21.jpg",price:"400",quantity:"liter",category:"Grocery"},{id:11,name:"Pencil Pack",image:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/36j5h8g82adkes95_1600434292.jpeg",price:"20",quantity:"piece",category:"Stationary"},{id:12,name:"MatchBox",image:"https://i.ytimg.com/vi/nSyWgUIYfHw/mqdefault.jpg",price:"6",quantity:"piece",category:"Household"}]},{id:2,name:"Chintu Ki Dawaiya",image:"https://www.collinsdictionary.com/images/full/supermarket_406913140_1000.jpg?version=4.0.148",category:"Medical Store",address:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et labore exercitationem.",direction:"1Km away",map:"",star:"3.4",rating:"40+ Rating",bestseller:"#bestseller",ownersName:"Jhun Jhun Wala & Sons",socialLinks:"example.com",products:[{id:1,name:"Biscuit",image:"https://c.ndtvimg.com/2020-06/24pps9mg_parle-650_625x300_10_June_20.jpg",price:"3",quantity:"piece",category:"Household"},{id:2,name:"Cinnamon",image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170807181545-herbs-and-spices-cinnamon.jpg",price:"2400",quantity:"Kilogram",category:"Grocery"},{id:3,name:"Notebook",image:"https://m.media-amazon.com/images/I/71Y6vqQeNtL._AC_.jpg",price:"36",quantity:"piece",category:"Stationary"},{id:4,name:"Ghee",image:"https://pureshmilk.com/blog/wp-content/uploads/2019/06/pic-21.jpg",price:"400",quantity:"liter",category:"Grocery"},{id:5,name:"Pencil Pack",image:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/36j5h8g82adkes95_1600434292.jpeg",price:"20",quantity:"piece",category:"Stationary"},{id:6,name:"MatchBox",image:"https://i.ytimg.com/vi/nSyWgUIYfHw/mqdefault.jpg",price:"6",quantity:"piece",category:"Household"},{id:7,name:"Biscuit",image:"https://c.ndtvimg.com/2020-06/24pps9mg_parle-650_625x300_10_June_20.jpg",price:"20",quantity:"piece",category:"Household"},{id:8,name:"Cinnamon",image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170807181545-herbs-and-spices-cinnamon.jpg",price:"2400",quantity:"Kilogram",category:"Grocery"},{id:9,name:"Notebook",image:"https://m.media-amazon.com/images/I/71Y6vqQeNtL._AC_.jpg",price:"36",quantity:"piece",category:"Stationary"},{id:10,name:"Ghee",image:"https://pureshmilk.com/blog/wp-content/uploads/2019/06/pic-21.jpg",price:"400",quantity:"liter",category:"Grocery"},{id:11,name:"Pencil Pack",image:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/36j5h8g82adkes95_1600434292.jpeg",price:"20",quantity:"piece",category:"Stationary"},{id:12,name:"MatchBox",image:"https://i.ytimg.com/vi/nSyWgUIYfHw/mqdefault.jpg",price:"6",quantity:"piece",category:"Household"}]},{id:2,name:"Chandu Ki Kitabe",image:"https://www.collinsdictionary.com/images/full/supermarket_406913140_1000.jpg?version=4.0.148",category:"Statonary Shop",address:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et labore exercitationem.",direction:"1Km away",map:"",offerImage:"https://img.icons8.com/color/48/000000/discount--v3.png",offers:"20% off on Stationary items",star:"3.4",rating:"40+ Rating",ownersName:"Jhun Jhun Wala & Sons",socialLinks:"example.com",products:[{id:1,name:"Biscuit",image:"https://c.ndtvimg.com/2020-06/24pps9mg_parle-650_625x300_10_June_20.jpg",price:"3",quantity:"piece",category:"Household"},{id:2,name:"Cinnamon",image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170807181545-herbs-and-spices-cinnamon.jpg",price:"2400",quantity:"Kilogram",category:"Grocery"},{id:3,name:"Notebook",image:"https://m.media-amazon.com/images/I/71Y6vqQeNtL._AC_.jpg",price:"36",quantity:"piece",category:"Stationary"},{id:4,name:"Ghee",image:"https://pureshmilk.com/blog/wp-content/uploads/2019/06/pic-21.jpg",price:"400",quantity:"liter",category:"Grocery"},{id:5,name:"Pencil Pack",image:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/36j5h8g82adkes95_1600434292.jpeg",price:"20",quantity:"piece",category:"Stationary"},{id:6,name:"MatchBox",image:"https://i.ytimg.com/vi/nSyWgUIYfHw/mqdefault.jpg",price:"6",quantity:"piece",category:"Household"},{id:7,name:"Biscuit",image:"https://c.ndtvimg.com/2020-06/24pps9mg_parle-650_625x300_10_June_20.jpg",price:"20",quantity:"piece",category:"Household"},{id:8,name:"Cinnamon",image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170807181545-herbs-and-spices-cinnamon.jpg",price:"2400",quantity:"Kilogram",category:"Grocery"},{id:9,name:"Notebook",image:"https://m.media-amazon.com/images/I/71Y6vqQeNtL._AC_.jpg",price:"36",quantity:"piece",category:"Stationary"},{id:10,name:"Ghee",image:"https://pureshmilk.com/blog/wp-content/uploads/2019/06/pic-21.jpg",price:"400",quantity:"liter",category:"Grocery"},{id:11,name:"Pencil Pack",image:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/36j5h8g82adkes95_1600434292.jpeg",price:"20",quantity:"piece",category:"Stationary"},{id:12,name:"MatchBox",image:"https://i.ytimg.com/vi/nSyWgUIYfHw/mqdefault.jpg",price:"6",quantity:"piece",category:"Household"}]}];a(101);var $=function(e){return Object(x.jsxs)("span",{children:[Object(x.jsxs)("h2",{className:"ul-title",children:[Object(x.jsx)("span",{style:{color:e.pickedColor},children:e.colorValue}),e.normalValue]}),Object(x.jsx)("span",{className:"title-line",style:{backgroundColor:e.pickedColor}})]})},ee=(a(102),a(103),a(154)),te=a(55),ae=a.n(te);var se=function(e){return Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsxs)("div",{className:"cover-img-container",children:[Object(x.jsx)("img",{src:e.image,alt:e.name,className:"card-cover"}),Object(x.jsxs)("span",{className:"overlay-plate",children:[Object(x.jsxs)("span",{className:"overlay-links",children:[Object(x.jsx)("a",{href:e.socialLinks,children:Object(x.jsx)(ae.a,{fontSize:"small"})}),Object(x.jsx)("a",{href:e.socialLinks,children:Object(x.jsx)(ae.a,{fontSize:"small"})}),Object(x.jsx)("a",{href:e.socialLinks,children:Object(x.jsx)(ae.a,{fontSize:"small"})})]}),Object(x.jsx)("span",{children:Object(x.jsx)("span",{className:"shopcard-name",children:Object(x.jsx)("p",{children:e.name})})})]})]}),Object(x.jsxs)("div",{className:"card-content-container",children:[Object(x.jsxs)("div",{className:"card-name-category",children:[Object(x.jsx)("h3",{children:e.name}),Object(x.jsx)("h4",{children:e.category})]}),Object(x.jsx)("div",{children:Object(x.jsx)("h5",{className:"content-location",children:e.direction})}),Object(x.jsx)("div",{className:"direction-btn-container",children:Object(x.jsxs)("a",{className:"direction-btn",href:e.map,children:[Object(x.jsx)("span",{className:"map-icon-wrapper",children:Object(x.jsx)("img",{className:"map-icon",src:"https://img.icons8.com/fluent/48/000000/google-maps-new.png",alt:"google map icon"})}),"Get direction"]})}),Object(x.jsxs)("div",{className:"discount-offer",children:[Object(x.jsx)("img",{src:e.offerImage,alt:"sicount tag"}),Object(x.jsx)("span",{children:e.offers})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(ee.a,{name:"half-rating-read",defaultValue:e.star,precision:.1,readOnly:!0}),Object(x.jsxs)("span",{className:"rating-wrapper",children:[Object(x.jsx)("b",{children:e.star})," ",Object(x.jsxs)("span",{children:[" (",e.rating,")"]})]})]})]}),Object(x.jsx)("div",{className:"card-button-container",children:Object(x.jsx)(r.b,{to:"/shop",children:Object(x.jsx)("a",{className:"card-btn",href:"/",children:"Shop Now"})})})]})},ce=function(){return Object(x.jsxs)("main",{children:[Object(x.jsx)($,{colorValue:"Best ",normalValue:"Seller",pickedColor:"#3DC242"}),Object(x.jsx)("div",{className:"multicard-container",children:Z.map((function(e){return Object(x.jsx)(se,Object(X.a)({},e),e.id)}))})]})},ie=a(149),ne=a(153),re=(a(104),a.p+"static/media/profile.c39062cd.jpg"),oe=Object(ie.a)((function(e){return{large:{width:"100px",height:"100px",scale:"crop"}}})),le=function(e){return Object(x.jsx)("span",{onClick:e.onClick,className:e.className,children:e.label})},me=function(e){var t=oe();return Object(x.jsx)("div",{className:e.className,children:Object(x.jsxs)("div",{className:"about-inner-container",children:[Object(x.jsx)("span",{className:"about-text",children:"Lorem nulla adipisicing aliqua aliqua anim culpa ullamco eiusmod magna Lorem nostrud consequat. Labore est laborum ullamco id laboris laboris est dolor et do culpa. Incididunt consequat Lorem ullamco culpa esse.Et cillum sunt aliqua cupidatat incididunt veniam. Nisi proident occaecat deserunt fugiat esse quis voluptate exercitation sint dolor dolor do consectetur dolore. Magna ex nostrud qui amet velit velit ea nostrud. Amet labore cillum ex qui ullamco aliquip. Occaecat proident mollit excepteur veniam do consequat ut aliqua sint anim voluptate. Sunt dolore ex labore duis deserunt. Cupidatat velit officia adipisicing eiusmod sint non."}),Object(x.jsxs)("div",{className:"avatars",children:[Object(x.jsxs)("div",{className:"avatar",children:[Object(x.jsx)(ne.a,{src:re,className:t.large}),Object(x.jsx)("span",{children:"Sample Name"})]}),Object(x.jsxs)("div",{className:"avatar",children:[Object(x.jsx)(ne.a,{className:t.large,src:re}),Object(x.jsx)("span",{children:"Sample Name"})]}),Object(x.jsxs)("div",{className:"avatar",children:[Object(x.jsx)(ne.a,{className:t.large,src:re}),Object(x.jsx)("span",{className:"",children:"Sample Name"})]}),Object(x.jsxs)("div",{className:"avatar",children:[Object(x.jsx)(ne.a,{className:t.large,src:re}),Object(x.jsx)("span",{children:"Sample Name"})]}),Object(x.jsxs)("div",{className:"avatar",children:[Object(x.jsx)(ne.a,{className:t.large,src:re}),Object(x.jsx)("span",{children:"Sample Name"})]})]})]})})},de=function(e){return Object(x.jsx)("div",{className:e.className,children:Object(x.jsxs)("div",{className:"about-inner-container",children:[Object(x.jsx)("div",{className:"separator"}),Object(x.jsx)(b.a,{label:"Email",variant:"outlined"}),Object(x.jsx)("div",{className:"separator"}),Object(x.jsx)(b.a,{label:"Message",multiline:!0,rows:6,variant:"outlined"}),Object(x.jsx)("div",{className:"separator"}),Object(x.jsx)("button",{className:"sendMessageButton",children:"Send Message"}),Object(x.jsx)("div",{className:"separator"})]})})},je=function(e){var t=Object(s.useState)(!1),a=Object(L.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(!1),r=Object(L.a)(n,2),o=r[0],l=r[1];return Object(x.jsxs)("div",{className:"footerContainer",children:[Object(x.jsxs)("div",{className:"footer-bar",children:[Object(x.jsx)("div",{className:"empty-element"}),Object(x.jsx)(le,{onClick:function(){i(!c),o&&l(!o)},label:"About",className:c?"footer-link-selected":"footer-link-not-selected"}),Object(x.jsx)(le,{onClick:function(){l(!o),c&&i(!c)},label:"Contact",className:o?"footer-link-selected":"footer-link-not-selected"})]}),Object(x.jsx)(me,{className:c?"about":"hidden"}),Object(x.jsx)(de,{className:o?"about":"hidden"})]})},pe=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(D,{}),Object(x.jsx)(ce,{}),Object(x.jsx)(je,{})]})},be=function(){return Object(x.jsx)("h1",{children:"Profile"})},he=function(){return Object(x.jsx)("h1",{children:"Shop"})},ge=(a(105),function(){return Object(x.jsx)(r.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(pe,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/shop",children:Object(x.jsx)(he,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/cart",children:Object(x.jsx)(B,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/profile",children:Object(x.jsx)(be,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/login",children:Object(x.jsx)(k,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/signup",children:Object(x.jsx)(F,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/forgot password",children:Object(x.jsx)(q,{})})]})})});n.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(ge,{})}),document.getElementById("root"))},95:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.b1e17704.chunk.js.map