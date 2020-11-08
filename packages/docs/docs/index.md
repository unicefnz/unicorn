---
home: true
metaTitle: Unicorn Design System
heroImage: /../img/icon-med.png
actionText: Get Started →
actionLink: /setup/
footer: MIT Licensed | Powered by UNICEF New Zealand
---

UNICEF New Zealand's open source design system for web apps.
Embraces web standards and built with flexibility in mind, giving
you the freedom to make it your own. 
 
<code-group>
<code-block title="React">
```jsx
import React from 'react';
import { UniButton } from '@unicorndesign/react';

export default () => (
  <UniButton>Unicorns!</UniButton>
);
```
</code-block>

<code-block title="HTML">
```html
<script type="module" src="https://unpkg.com/@unicorndesign/core@^1.1.0/dist/unicorn/unicorn.esm.js"></script>

<uni-button>Unicorns!</uni-button>
```
</code-block>
</code-group>