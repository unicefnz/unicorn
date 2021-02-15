(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{398:function(t,s,a){"use strict";a.r(s);var e=a(24),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"setup-using-react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-using-react"}},[t._v("#")]),t._v(" Setup using React")]),t._v(" "),a("p",[t._v("Because React "),a("a",{attrs:{href:"https://custom-elements-everywhere.com/#react",target:"_blank",rel:"noopener noreferrer"}},[t._v("doesn't play nice"),a("OutboundLink")],1),t._v(" with Custom\nElements, we provide a thin abstraction layer to patch any issues.")]),t._v(" "),a("p",[t._v("Each React component is relatively simple, and is only responsible for ensuring the element\nis defined, and passing props correctly.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Heads up")]),t._v(" "),a("p",[t._v("If you're using Next.js, you'll need to follow some "),a("RouterLink",{attrs:{to:"/setup/next.html"}},[t._v("extra steps")])],1)]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#step-1-install"}},[t._v("Step 1: Install")])]),a("li",[a("a",{attrs:{href:"#step-2-load-theme"}},[t._v("Step 2: Load theme")])]),a("li",[a("a",{attrs:{href:"#step-3-polyfills"}},[t._v("Step 3: Polyfills")])]),a("li",[a("a",{attrs:{href:"#step-4-profit"}},[t._v("Step 4: Profit")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"step-1-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-install"}},[t._v("#")]),t._v(" Step 1: Install")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @unicorndesign/core @unicorndesign/react\n")])])]),a("h2",{attrs:{id:"step-2-load-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-load-theme"}},[t._v("#")]),t._v(" Step 2: Load theme")]),t._v(" "),a("p",[t._v("Unicorn requires a global stylesheet to be loaded (for global typography and color vars,) see "),a("RouterLink",{attrs:{to:"/theming.html"}},[t._v("Theming")]),t._v("\nfor more info.")],1),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@unicorndesign/core/theming/prebuilt/default.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OR")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@unicorndesign/core@latest/theming/prebuilt/default.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")])])])]),a("h2",{attrs:{id:"step-3-polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-polyfills"}},[t._v("#")]),t._v(" Step 3: Polyfills")]),t._v(" "),a("p",[t._v("Polyfills are not included by default, however "),a("code",[t._v("@unicorndesign/core/loader")]),t._v(" exposes an applyPolyfills method:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" applyPolyfills "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@unicorndesign/core/loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyPolyfills")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"step-4-profit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-profit"}},[t._v("#")]),t._v(" Step 4: Profit")]),t._v(" "),a("p",[t._v("Done! You're ready to use Unicorn.")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" UniButton "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@unicorndesign/react/UniButton'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UniButton")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("🦄")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UniButton")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);