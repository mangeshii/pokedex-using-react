(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(16),r=n.n(i),s=n(21),o=n.p+"static/media/pokeball.db3d80d3.png",l=n(102),d=n(108),j=n(103),p=n(104),x=n(105),h=n(106),m=n(22),b=n.n(m),u=n(30),f=n(100),g=Object(f.a)((function(e){return{root:Object(u.a)({width:"580px",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{width:"320px"}),container:{display:"flex",justifyContent:"center",textAlign:"center"},mains:{display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid pink"},card:Object(u.a)({border:"2px solid black",borderRadius:"5%",width:"180px",height:"180px",backgroundColor:"white","&:hover":{backgroundColor:"#FFFAFA"}},e.breakpoints.down("sm"),{width:"140px",height:"140px"}),CardMedia:{margin:"auto",marginTop:"10px",width:"130px",height:"130px"},textCenter:{textAlign:"center",paddingTop:"0px"},logo:{width:"40px",height:"40px"},navbar:{display:"flex",flexDirection:"row",height:"120px",alignItems:"center"},textfield:{border:"2px solid black",padding:"6px",width:"200px",fontFamily:"Bree Serif"},imgStyle:{width:"150px"},heading:{fontFamily:"Bree Serif"},theme:{fontFamily:"Bree Serif",color:"#696969"},button:{backgroundColor:"white",color:"black",border:"2px solid #e7e7e7",height:"25px",fontFamily:"Bree Serif",marginTop:"10px",padding:"10px"}}})),O=n(2),y=function(e){var t=e.history,n=Object(a.useState)({}),c=Object(s.a)(n,2),i=c[0],r=c[1],m=Object(a.useState)(""),u=Object(s.a)(m,2),f=u[0],y=u[1];console.log(i),Object(a.useEffect)((function(){b.a.get("https://pokeapi.co/api/v2/pokemon?limit=807").then((function(e){console.log(e);var t=e.data.results,n={};t.forEach((function(e,t){n[t+1]={id:t+1,name:e.name,sprite:"https://pokeres.bastionbot.org/images/pokemon/".concat(t+1,".png")}})),r(n)}))}),[]);var k=g(),v=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(l.a,{container:!0,className:k.navbar,children:[Object(O.jsx)(l.a,{item:!0,md:3,xs:3}),Object(O.jsxs)(l.a,{item:!0,md:3,xs:6,style:{display:"flex",textAlign:"center",justifyContent:"center"},children:[Object(O.jsx)("img",{className:k.logo,src:o}),Object(O.jsx)(x.a,{variant:"h5",style:{fontFamily:"Bree Serif"},children:"Pokedex"})]}),Object(O.jsx)(l.a,{item:!0,md:3,xs:12,style:{display:"flex",justifyContent:"center",textAlign:"center"},children:Object(O.jsx)("input",{className:k.textfield,placeholder:"Search pokemon...",onChange:function(e){y(e.target.value)}})}),Object(O.jsx)(l.a,{item:!0,md:3,xs:3})]}),i?Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(l.a,{container:!0,direction:"row",spacing:1,className:k.root,children:Object.keys(i).map((function(e){return i[e].name.includes(f)&&function(e){var n=i[e],a=n.name,c=n.sprite;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(l.a,{item:!0,xs:6,md:4,children:Object(O.jsxs)(d.a,{className:k.card,onClick:function(){return t.push("/".concat(e))},children:[Object(O.jsx)(j.a,{className:k.CardMedia,image:c}),Object(O.jsx)(p.a,{className:k.textCenter,children:Object(O.jsx)(x.a,{style:{fontFamily:"Bree Serif",fontSize:"15px"},children:"".concat(v(a))})})]})})})}(e)}))})}):Object(O.jsx)(h.a,{})]})},k=n(107),v=function(e){var t=e.match,n=e.history,c=t.params.pokemonid,i=g(),r=Object(a.useState)(),o=Object(s.a)(r,2),l=o[0],d=o[1];Object(a.useEffect)((function(){b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(c,"/")).then((function(e){var t=e.data;d(t)})).catch((function(e){d(!1)}))}),[c]);var j=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(O.jsxs)(O.Fragment,{children:[void 0===l&&Object(O.jsx)(h.a,{style:{display:"flex",justifyContent:"center",textAlign:"center"}}),void 0!==l&&l&&function(){var e=l.id,t=l.name,a=l.types,c=l.height,r=l.weight,s="https://pokeres.bastionbot.org/images/pokemon/".concat(e,".png");return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:i.container,children:Object(O.jsxs)("div",{children:[Object(O.jsx)(x.a,{style:{marginTop:"10px",fontFamily:"Bree Serif"},variant:"h3",children:"".concat(j(t))}),Object(O.jsx)("img",{className:i.imgStyle,src:s}),Object(O.jsx)(x.a,{className:i.heading,variant:"h6",children:"Pokemon Info"}),Object(O.jsx)(x.a,{className:i.theme,children:"Height:".concat(10*c,"cm")}),Object(O.jsx)(x.a,{className:i.theme,children:"Weight:".concat(r/10,"kg")}),Object(O.jsx)(x.a,{className:i.heading,variant:"h6",children:"Types"}),a.map((function(e){var t=e.type.name;return Object(O.jsx)(x.a,{className:i.theme,children:"".concat(t)})})),Object(O.jsx)(k.a,{onClick:function(){n.push("/")},className:i.button,children:"Back to Pokedex"})]})})})}(),!1===l&&Object(O.jsx)(x.a,{children:"Page Not Found"})]})},C=n(5),w=function(){return Object(O.jsxs)(C.c,{children:[Object(O.jsx)(C.a,{exact:!0,path:"/",component:y}),Object(O.jsx)(C.a,{exact:!0,path:"/:pokemonid",component:v})]})},F=n(29),N=n(45),S=Object(N.a)();r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(F.a,{history:S,children:Object(O.jsx)(w,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.c5542f21.chunk.js.map