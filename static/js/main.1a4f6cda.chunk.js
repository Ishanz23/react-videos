(this["webpackJsonpreact-videos"]=this["webpackJsonpreact-videos"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),o=a(6),s=a.n(o),l=a(17),m=a(2),u=a(3),d=a(4),v=a(5),p=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",{forname:"search"},"Search Videos"),r.a.createElement("input",{id:"search",type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(n.Component),f=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{src:a,title:t.snippet.title})),r.a.createElement("h4",null,t.snippet.title),r.a.createElement("p",null,t.snippet.description))},h=(a(25),function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}),b=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(h,{key:e.id.videoId,video:e,onVideoSelect:a})}));return r.a.createElement("div",{className:"ui relaxed divided list"},n)},E=a(18),S="AIzaSyCd0po8p3BCdNcw4xXqaIKmw5hIeLP_Qt0",y=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",key:S}}),w=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onFormSubmit=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("/search",{params:{q:a,part:"snippet",type:"video",key:S,maxResults:10}});case 3:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onFormSubmit("react js")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(p,{onFormSubmit:this.onFormSubmit}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(f,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"five wide column"},r.a.createElement(b,{videos:this.state.videos,onVideoSelect:this.onVideoSelect}))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1a4f6cda.chunk.js.map