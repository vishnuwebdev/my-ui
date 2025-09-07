var g={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function h(){if(y)return t;y=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function n(m,r,e){var a=null;if(e!==void 0&&(a=""+e),r.key!==void 0&&(a=""+r.key),"key"in r){e={};for(var p in r)p!=="key"&&(e[p]=r[p])}else e=r;return r=e.ref,{$$typeof:l,type:m,key:a,ref:r!==void 0?r:null,props:e}}return t.Fragment=c,t.jsx=n,t.jsxs=n,t}var v;function f(){return v||(v=1,g.exports=h()),g.exports}var b=f();const x=({children:l,variant:c="primary",size:n="md",...m})=>{const r="rounded font-medium focus:outline-none focus:ring transition-colors duration-200",e={primary:"bg-blue-600 text-white hover:bg-blue-700",secondary:"bg-gray-200 text-gray-800 hover:bg-gray-300",danger:"bg-red-600 text-white hover:bg-red-700"},a={sm:"px-2 py-1 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return b.jsx("button",{className:`${r} ${e[c]} ${a[n]}`,...m,children:l})};x.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}}};const R={title:"Components/Button",component:x,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["primary","secondary","danger"]},size:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"}}},s={args:{children:"Primary Button",variant:"primary"}},o={args:{children:"Secondary Button",variant:"secondary"}},i={args:{children:"Danger Button",variant:"danger"}},d={args:{children:"Disabled Button",disabled:!0}},u={args:{children:"Large Button",size:"lg"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "lg"
  }
}`,...u.parameters?.docs?.source}}};const S=["Primary","Secondary","Danger","Disabled","Large"];export{i as Danger,d as Disabled,u as Large,s as Primary,o as Secondary,S as __namedExportsOrder,R as default};
