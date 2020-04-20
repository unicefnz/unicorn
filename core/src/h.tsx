// Thanks to https://twitter.com/dassurma/status/1232742089408073728 and
// https://dev.to/ofhouse/enhance-your-stencil-web-components-in-storybook-with-knobs-actions-and-jsx-54m4
export default function h(t, props, ...kids) {
  const el = document.createElement(t);
  for (const i in props) {
    i in el
      ? el[i] = props[i]
      : el.setAttribute(i,props[i]);
  }
  el.append(...kids);
  return el;
}
