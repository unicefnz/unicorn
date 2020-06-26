import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Button'
};

export const Default = () => `
<div>
  <uni-button>Default</uni-button>
  <uni-button color="${text('Color', 'danger')}">Alt Color</uni-button>
  <uni-button disabled>Disabled</uni-button>
  <uni-button>
    <ion-icon slot="prepend-icon" name="${text('Icon', 'add')}"></ion-icon>
    With Prepend Icon
  </uni-button>
  <uni-button icon>
    <ion-icon name="add"></ion-icon>
  </uni-button>
</div>
<div>
  <uni-button href="#link">Link</uni-button>
  <uni-button href="#link2" color="${text('Color', 'danger')}">Colorful Link</uni-button>
  <uni-button href="#link3" disabled>Disabled Link?</uni-button>
  <uni-button href="#link4">
    <ion-icon slot="prepend-icon" name="${text('Icon', 'add')}"></ion-icon>
    Link with icon
  </uni-button>
  <uni-button href="#link5" icon>
    <ion-icon name="add"></ion-icon>
  </uni-button>
</div>
`;

export const Border = () => `
<div>
  <uni-button variant="border">Border</uni-button>
  <uni-button variant="border" color="${text('Color', 'danger')}">Alt Color</uni-button>
  <uni-button variant="border" disabled>Disabled</uni-button>
  <uni-button variant="border">
    <ion-icon slot="prepend-icon" name="${text('Icon', 'add')}"></ion-icon>
    With Prepend Icon
  </uni-button>
  <uni-button variant="border" icon>
    <ion-icon name="add"></ion-icon>
  </uni-button>
</div>
<div>
  <uni-button variant="border" href="#link">Link</uni-button>
  <uni-button variant="border" href="#link2" color="${text('Color', 'danger')}">Colorful Link</uni-button>
  <uni-button variant="border" href="#link3" disabled>Disabled Link?</uni-button>
  <uni-button variant="border" href="#link4">
    <ion-icon slot="prepend-icon" name="${text('Icon', 'add')}"></ion-icon>
    Link with icon
  </uni-button>
  <uni-button variant="border" href="#link5" icon>
    <ion-icon name="add"></ion-icon>
  </uni-button>
</div>
`;

export const Loading = () => `
<uni-button loading prepend-icon="logo-google">
    <ion-icon slot="prepend-icon" name="logo-google"></ion-icon>
    Logging in
</uni-button>
<uni-button loading color="danger">Deleting...</uni-button>
<uni-button loading color="primary" button-style="border">Border</uni-button>
<br>
<uni-button href="#" loading prepend-icon="logo-google">
    <ion-icon slot="prepend-icon" name="logo-google"></ion-icon>
    Logging in
</uni-button>
<uni-button href="#" loading color="danger">Deleting...</uni-button>
<uni-button href="#" loading color="primary" button-style="border">Border</uni-button>
`;

export const Interactivity = () => {
  const button = document.createElement('uni-button');
  button.innerHTML = text('Text', 'Button Text!');
  button.onclick = action('onclick');

  return button;
};
