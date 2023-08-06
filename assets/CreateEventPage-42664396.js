import{s as n,j as t,L as i,H as s}from"./index-6a10bcbf.js";import{S as o,C as r}from"./Button-f5c1b6e4.js";import{B as a}from"./eventsService-cbc46821.js";import{C as c}from"./CreateNewEventForm-c2fd9c17.js";const m=n.main`
  display: block;
  min-height: 100vh;
  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;n.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;const d=n.h2`
  margin-bottom: ${e=>e.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${e=>e.theme.fontSizes.l}px;
  line-height: ${e=>e.theme.lineHeights.secondary};
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: 1280px) {
    min-width: fit-content;
    margin-bottom: 25px;
  }
`;function f(){return t.jsx(m,{children:t.jsx(o,{children:t.jsxs(r,{children:[t.jsx(i,{to:"/",children:t.jsxs(a,{"aria-label":"Back button",children:[t.jsx(s,{size:16}),"Back"]})}),t.jsx(d,{children:"Create new event"}),t.jsx(c,{})]})})})}export{f as default};
