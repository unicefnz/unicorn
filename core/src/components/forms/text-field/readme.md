# uni-text-field



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                             | Type                 | Default     |
| ------------- | -------------- | ----------------------------------------------------------------------- | -------------------- | ----------- |
| `disabled`    | `disabled`     | Makes the field disabled and unselectable                               | `boolean`            | `undefined` |
| `errors`      | `errors`       | Displays errors below the input                                         | `string \| string[]` | `''`        |
| `label`       | `label`        | Label text above the field                                              | `string`             | `undefined` |
| `optional`    | `optional`     | Marks the field as optional                                             | `boolean`            | `false`     |
| `placeholder` | `placeholder`  | Placeholder displayed inside the field                                  | `string`             | `undefined` |
| `prependIcon` | `prepend-icon` | Optionally prepend an icon to the inside of the field, eg a search icon | `string`             | `undefined` |
| `prependText` | `prepend-text` | Optionally prepend some text inside the field, eg a $ prefix            | `string`             | `undefined` |
| `readonly`    | `readonly`     | Prevents editing the field, but allows selecting text                   | `boolean`            | `undefined` |
| `value`       | `value`        | Set the value of the field                                              | `string`             | `undefined` |


## Events

| Event       | Description                                | Type                  |
| ----------- | ------------------------------------------ | --------------------- |
| `uniChange` | Emitted when form field value is committed | `CustomEvent<string>` |
| `uniInput`  | Emitted when the form field value changes  | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
