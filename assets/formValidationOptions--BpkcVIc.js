import{j as a,b as o,r as l,I as i,v as c}from"./index-B8Mj0rHR.js";const d=({children:s,handleSubmit:e,onFormSubmit:t})=>a.jsx("form",{className:"w-full",onSubmit:e(t),children:s}),u=({placeholder:s,register:e,type:t,autoFocus:n})=>a.jsx("input",{className:"bg-transparent outline-none w-full text-sm placeholder:capitalize",type:t,placeholder:s,...e,autoFocus:n,autoComplete:"off",maxLength:30}),p=({text:s,path:e})=>{const t=o(),n=()=>{t(`/auth/${e}`)};return a.jsx("div",{className:"flex w-full items-start",children:a.jsx("button",{className:"w-44 rounded-md border border-black bg-green-300 font-medium p-2 hover:shadow-lg transition-shadow ease-in-out duration-200",onClick:n,children:s})})},h=({register:s})=>{const[e,t]=l.useState(!1),n=()=>{t(r=>!r)};return a.jsxs(a.Fragment,{children:[a.jsx(u,{placeholder:"password",type:e?"text":"password",register:s}),a.jsx("button",{onClick:n,className:"outline-none text-neutral-400 hover:text-neutral-600 focus-within:text-neutral-600 transition-colors ease-in-out duration-200",type:"button",children:e?a.jsx(i,{}):a.jsx(c,{})})]})},g={fullName:{pattern:{value:/^[A-Za-z]+(?:[ ][A-Za-z]+)*$/,message:"Must start with a letter (A-Z) and can contain blank spaces."}},userName:{pattern:{value:/[a-zA-Z][a-zA-Z0-9_.]{2,29}$/,message:"Username must be at least 3 characters long and can contain letters (a-z), numbers (0-9), underscores(_), and periods(.)"},minLength:{value:2,message:"Username must be at least 3 characters long and can contain letters (a-z), numbers (0-9), underscores(_), and periods(.)"},maxLength:{value:30,message:"maximum character limit reached"}},email:{pattern:{value:/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-z]{2,6}$/,message:"Must be a valid email consisting of letters (a-z), numbers (0-9), periods(.) are allowed."}},password:{pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,message:"Password must be at least 8 characters long and must contain uppercase (A-Z) and lowercase (a-z) letters, digits (0-9), and special characters (@$!%*?&)."}},confirmPassword:{}};export{p as F,d as a,u as b,h as c,g as f};