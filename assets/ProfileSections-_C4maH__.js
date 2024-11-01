import{j as e,P as d,g as x,B as m,r as u}from"./index-B8Mj0rHR.js";import{T as p}from"./TweetLikeBtn-6Vw1ftKm.js";import{S as i}from"./SingleUsers-CQjaUHA7.js";import{S as h,N as j}from"./NoTweets-_44y2e2N.js";const F=()=>e.jsxs("div",{className:"w-full animate-pulse flex flex-col items-center justify-center",children:[e.jsxs("div",{className:"flex items-start gap-6 py-2 w-full flex-shrink",children:[e.jsx("p",{className:"w-20 aspect-square rounded-full bg-neutral-200 p-1"}),e.jsx("div",{className:"flex flex-col items-start gap-3",children:e.jsx("div",{className:"flex items-start justify-between w-full",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"w-32 aspect-auto bg-neutral-200 h-8"}),e.jsx("p",{className:"w-56 aspect-auto bg-neutral-200 h-6"}),e.jsx("p",{className:"w-64 aspect-auto bg-neutral-200 h-6 mt-5"})]})})})]}),e.jsx("hr",{className:"border-b w-full"}),e.jsx("div",{className:"w-full py-6"}),e.jsx("hr",{className:"border-b w-full"}),e.jsx("div",{className:"w-full flex items-center justify-center mt-3 z-0",children:e.jsx(p,{})})]}),N="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='120px'%20height='120px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2018.86H17.24C16.44%2018.86%2015.68%2019.17%2015.12%2019.73L13.41%2021.42C12.63%2022.19%2011.36%2022.19%2010.58%2021.42L8.87%2019.73C8.31%2019.17%207.54%2018.86%206.75%2018.86H6C4.34%2018.86%203%2017.53%203%2015.89V4.97998C3%203.33998%204.34%202.01001%206%202.01001H18C19.66%202.01001%2021%203.33998%2021%204.97998V15.89C21%2017.52%2019.66%2018.86%2018%2018.86Z'%20stroke='%23737373'%20stroke-width='1'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.9999%2010.0001C13.2868%2010.0001%2014.33%208.95687%2014.33%207.67004C14.33%206.38322%2013.2868%205.34009%2011.9999%205.34009C10.7131%205.34009%209.66992%206.38322%209.66992%207.67004C9.66992%208.95687%2010.7131%2010.0001%2011.9999%2010.0001Z'%20stroke='%23737373'%20stroke-width='1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2015.6601C16%2013.8601%2014.21%2012.4001%2012%2012.4001C9.79%2012.4001%208%2013.8601%208%2015.6601'%20stroke='%23737373'%20stroke-width='1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",g=()=>e.jsxs("article",{className:"mt-20 w-full grid place-items-center gap-y-1",children:[e.jsx("img",{src:N,alt:""}),e.jsx("p",{className:"text-2xl text-green-500 font-extrabold",children:"Looking for followers?"}),e.jsx("p",{className:"text-neutral-400",children:"When someone follows this account, they’ll show up here."})]}),b=({followers:s})=>{let a;return(s==null?void 0:s.length)===0&&(a=e.jsx(g,{})),(s==null?void 0:s.length)>0&&(a=s==null?void 0:s.map(r=>e.jsx(i,{userId:r._id},r._id))),e.jsx("section",{className:"profile-section-tab-content",children:a})},f=()=>e.jsxs("article",{className:"mt-20 w-full grid place-items-center",children:[e.jsx("div",{className:"text-9xl text-neutral-500",children:e.jsx(d,{})}),e.jsxs("div",{className:"flex flex-col items-center gap-y-1",children:[e.jsx("p",{className:"text-neutral-400 font-medium",children:"When user follows an account, they’ll show up here."}),e.jsx("span",{type:"button",className:"rounded text-green-500 font-extrabold text-3xl",children:"No Followings"})]})]}),v=({followings:s})=>{let a;return(s==null?void 0:s.length)===0&&(a=e.jsx(f,{})),(s==null?void 0:s.length)>0&&(a=s==null?void 0:s.map(r=>e.jsx(i,{userId:r._id},r._id))),e.jsx("section",{className:"profile-section-tab-content",children:a})},k=({tweets:s})=>{const a=x(m);let r;return(s==null?void 0:s.length)>0&&(r=s==null?void 0:s.map(t=>e.jsx(h,{tweetId:t==null?void 0:t._id,isSaved:a==null?void 0:a.includes(t._id)},t==null?void 0:t._id))),(s==null?void 0:s.length)===0&&(r=e.jsx(j,{})),e.jsx("section",{className:"profile-section-tab-content gap-y-6",children:r})},P=({tweets:s,followers:a,followings:r})=>{const t=["tweets","followers","following"],[n,o]=u.useState(t[0]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-3 text-neutral-600 mt-5 sticky top-0 z-10 bg-neutral-50",children:[e.jsx("p",{className:"border-b border-neutral-300 col-span-3"}),t.map((c,l)=>e.jsxs("span",{className:"col-span-1 text-center hover:bg-neutral-200/60 transition-colors ease-in-out duration-200",children:[e.jsx("button",{type:"button",className:`${n===c?"font-semibold text-neutral-800":""} w-full capitalize py-3`,onClick:()=>o(t[l]),children:c}),e.jsx("p",{className:`w-full ${n===t[l]?"border-b border-black":"border-b border-neutral-300"}`})]},l))]}),e.jsxs("div",{className:"flex items-center justify-center mt-3 z-0",children:[n===t[0]&&e.jsx(k,{tweets:s}),n===t[1]&&e.jsx(b,{followers:a}),n===t[2]&&e.jsx(v,{followings:r})]})]})};export{F as P,P as a};
