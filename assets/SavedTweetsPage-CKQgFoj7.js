import{j as s,r as f,U as j,o as N,k as h,g as x,O as p,i as g,m as T,Q as v}from"./index-BQPtO1rX.js";import{b as y,c as B,d as S,e as k,f as b,g as U,h as A,j as C,T as D}from"./TweetLikeBtn-TVodLZ_O.js";import{T as I}from"./TweetModals-D9xYwaEo.js";import"./index-DiaGZGyL.js";import"./FormSubmitButtons-BQs79VtV.js";const E=()=>s.jsxs("article",{className:"flex flex-col items-start justify-center w-full gap-y-4",children:[s.jsx("h2",{className:"font-extrabold text-5xl text-neutral-700",children:"Save tweets for later"}),s.jsx("p",{className:"text-neutral-500 font-light",children:"Bookmark posts to easily find them again in the future"})]}),_=({tweet:e,currentUserId:l})=>{var c,r;const[t,a]=f.useState(null);return f.useEffect(()=>{(i=>{const n=C(new Date(i),new Date().toString(),{includeSeconds:!1});return a(n),n})(e==null?void 0:e.createdAt)},[t]),s.jsx(y,{children:s.jsx("div",{className:"w-full",children:s.jsxs("div",{className:"w-full flex items-start gap-2",children:[s.jsx("div",{className:"",children:s.jsx("div",{className:"flex items-center gap-x-2",children:s.jsx(j,{userName:e==null?void 0:e.userName,className:"avatar w-14"})})}),s.jsxs("div",{className:"flex flex-col items-start w-full",children:[s.jsxs("div",{className:"flex items-baseline gap-x-1",children:[s.jsx(N,{fullName:(c=e==null?void 0:e.createdBy)==null?void 0:c.fullName,className:"user-fullName"}),s.jsx(h,{userName:`${(r=e==null?void 0:e.createdBy)==null?void 0:r.userName}`,className:"userName"}),s.jsx("span",{className:"text-[8px] text-neutral-400",children:s.jsx(B,{})}),s.jsx("p",{className:"text-xs text-neutral-400 font-normal",children:t})]}),s.jsx(S,{content:e==null?void 0:e.content}),s.jsxs("div",{className:"w-full flex items-center justify-between text-lg pr-5",children:[s.jsx(k,{tweetId:e==null?void 0:e._id,likedBy:e==null?void 0:e.likedBy,currentUserId:l}),s.jsx(b,{tweet:e,currUserId:l}),s.jsx(U,{tweetId:e==null?void 0:e._id}),s.jsx(A,{tweetId:e==null?void 0:e._id})]})]})]})})})},O=()=>{var o,i,n,d,m;const e=x(p),l=x(g),t=x(T),{data:a,isLoading:c}=v();let r;return((i=(o=a==null?void 0:a.currentUser)==null?void 0:o.savedTweets)==null?void 0:i.length)===0&&(r=s.jsx(E,{})),((d=(n=a==null?void 0:a.currentUser)==null?void 0:n.savedTweets)==null?void 0:d.length)>0&&(r=(m=a==null?void 0:a.currentUser)==null?void 0:m.savedTweets.map(u=>s.jsx(_,{tweet:u,currentUserId:e},u._id))),c&&(r=s.jsx(D,{})),s.jsxs("section",{className:"flex flex-col items-start gap-y-4 w-full",children:[t?s.jsx(I,{}):"",s.jsxs("header",{className:"mb-4",children:[s.jsx("h2",{className:"font-bold text-2xl text-neutral-700",children:"Bookmarks"}),l!=null&&l.userName?s.jsxs("h4",{className:"text-neutral-500",children:["@",l==null?void 0:l.userName]}):s.jsx("h4",{className:"bg-neutral-200 animate-pulse w-20 h-4 py-1 rounded"})]}),r]})};export{O as default};