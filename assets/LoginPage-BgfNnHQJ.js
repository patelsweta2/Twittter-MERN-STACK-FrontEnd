import{u as F,a as b,b as w,c as N,d as v,j as s,L as y,s as C,e as L,f as k,n as S}from"./index-BQPtO1rX.js";import{F as U,a as I,b as P,c as B,f as E}from"./formValidationOptions-2uvqAFjV.js";import{F as A,a as R,b as d,c as T}from"./FormSubmitButtons-BQs79VtV.js";const V=()=>{var n,c;const[l,o]=F(),{register:i,handleSubmit:u,formState:{errors:t},watch:z}=b(),x=w(),[h,{isLoading:p,isSuccess:g}]=N(),a=v(),j=async r=>{var m;try{const e=await h(r).unwrap();a(C(e.userExist._id)),a(L(e.accessToken)),a(k(e.userId)),o(f=>!f),x("/feed",{replace:!0})}catch(e){console.log(e),S.error((m=e==null?void 0:e.data)==null?void 0:m.message)}};return s.jsxs("div",{children:[s.jsx(U,{text:"Create account",path:"register"}),s.jsx("div",{className:"mt-12",children:s.jsxs(A,{children:[s.jsx("div",{className:"mb-10",children:s.jsx(R,{heading:"Login"})}),s.jsxs(I,{handleSubmit:u,onFormSubmit:j,children:[s.jsx(d,{error:(n=t==null?void 0:t.userName)==null?void 0:n.message,children:s.jsx(P,{placeholder:"Email/Username",type:"text",autoFocus:!0,register:i("userName")})}),s.jsx(d,{error:(c=t==null?void 0:t.password)==null?void 0:c.message,children:s.jsx(B,{register:i("password",E.password)})}),s.jsxs("footer",{className:"w-full flex justify-between items-center",children:[s.jsx(y,{to:"/auth/reset",className:"text-sm capitalize font-medium text-neutral-600 hover:underline",children:"Forgot password?"}),s.jsx(T,{text:"Login",isLoading:p,isSuccess:g})]})]}),s.jsx("form",{className:"my-3",children:s.jsxs("label",{htmlFor:"persist",children:[s.jsx("input",{type:"checkbox",id:"persist",checked:l,onChange:()=>o(r=>!r)})," ",s.jsx("span",{className:"text-sm font-semibold text-neutral-700",children:"Accept Cookies"})]})})]})})]})};export{V as default};
