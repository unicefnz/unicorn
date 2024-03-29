export default {
  title: 'Typography/Headings'
};

export const UsingClasses = () => `
<div class="display-h1">Heading 1</div>
<div class="display-h2">Heading 2</div>
<div class="display-h3">Heading 3</div>
<div class="display-h4">Heading 4</div>
<div class="display-h5">Heading 5</div>
<div class="display-h6">Heading 6</div>
<div class="display-overline">Overline</div>
<div class="display-caption">Caption</div>
<div class="display-link">Div pretending to be a link!</div>
<button class="display-link">Button pretending to be a link</button>
<div class="display-link uni-block-link">Block link!</div>
<button class="display-link uni-block-link">Button pretending to be a block link</button>
<div class="display-paragraph">Paragraph</div>
`;

export const WithoutClasses = () => `
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
<a href="#">It's a link!</a>
<p>Paragraph!</p>
`;
