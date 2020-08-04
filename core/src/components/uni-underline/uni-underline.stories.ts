export default {
  title: 'Typography/Underline'
};

export const Underline = () => `
<uni-underline>Plain underline</uni-underline>
<uni-underline><span>Underline with child span</span></uni-underline>
<br>

<uni-underline class="uni-color-danger">Colorful underline</uni-underline>
<br>

<h1><uni-underline><span>Underline with parent h1</span></uni-underline></h1>

<h2><uni-underline>Underline with parent h2</uni-underline></h2>

<p><uni-underline>Underline with parent p</uni-underline></p>

<p>Paragraph as control</p>
`;
