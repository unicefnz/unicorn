# uni-text-field



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                                                                              | Type                            | Default     |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------- | ----------- |
| `autocomplete` | `autocomplete` | Hint to the user agent how this field should be autocompleted                                                            | `string \| undefined`           | `undefined` |
| `disabled`     | `disabled`     | Makes the field disabled and unselectable                                                                                | `boolean`                       | `false`     |
| `error`        | `error`        | Displays errors below the input, or puts field into error state                                                          | `boolean \| string \| string[]` | `''`        |
| `label`        | `label`        | Label text above the field                                                                                               | `string \| undefined`           | `undefined` |
| `labelSlot`    | `label-slot`   | Alternatively, use a slot inside the label to render custom contents.                                                    | `boolean`                       | `false`     |
| `max`          | `max`          | Maximum value when the input is in number mode                                                                           | `number \| undefined`           | `undefined` |
| `maxlength`    | `maxlength`    | Maximum string length                                                                                                    | `number \| undefined`           | `undefined` |
| `min`          | `min`          | Minimum value when the input is in number mode                                                                           | `number \| undefined`           | `undefined` |
| `minlength`    | `minlength`    | Minimum string length                                                                                                    | `number \| undefined`           | `undefined` |
| `name`         | `name`         | Name of the native input element                                                                                         | `string \| undefined`           | `undefined` |
| `optional`     | `optional`     | Displays a visual (optional) marker                                                                                      | `boolean`                       | `false`     |
| `placeholder`  | `placeholder`  | Placeholder displayed inside the field                                                                                   | `string \| undefined`           | `undefined` |
| `readonly`     | `readonly`     | Prevents editing the field, but allows selecting text                                                                    | `boolean`                       | `false`     |
| `required`     | `required`     | Marks the input as required                                                                                              | `boolean`                       | `false`     |
| `type`         | `type`         | Set the [type] property on the internal input element Alternatively, set to "textarea" to use a textarea element instead | `string \| undefined`           | `undefined` |
| `value`        | `value`        | Set the value of the field                                                                                               | `string \| undefined`           | `undefined` |


## Events

| Event       | Description                                              | Type                      |
| ----------- | -------------------------------------------------------- | ------------------------- |
| `uniBlur`   | Emitted when the native input is blurred / focus is lost | `CustomEvent<FocusEvent>` |
| `uniChange` | Emitted when form field value is committed               | `CustomEvent<string>`     |
| `uniFocus`  | Emitted when the native input is focused                 | `CustomEvent<FocusEvent>` |
| `uniInput`  | Emitted when the form field value changes                | `CustomEvent<string>`     |


## Methods

### `getInputElement() => Promise<HTMLInputElement | HTMLTextAreaElement>`

Get the underlying input DOM node

#### Returns

Type: `Promise<HTMLInputElement | HTMLTextAreaElement>`




## CSS Custom Properties

| Name                  | Description   |
| --------------------- | ------------- |
| `--uni-border-color`  | Border color  |
| `--uni-border-radius` | Border radius |
| `--uni-border-width`  | Border width  |


## Dependencies

### Depends on

- [uni-errors](../../uni-errors)

### Graph
```mermaid
graph TD;
  uni-text-field --> uni-errors
  style uni-text-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
