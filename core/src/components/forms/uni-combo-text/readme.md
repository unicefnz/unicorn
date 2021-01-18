# uni-combo-text



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                        | Type               | Default         |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------ | ------------------ | --------------- |
| `disabled` | `disabled`  | Marks this option as disabled                                                                                      | `boolean`          | `false`         |
| `selectOn` | `select-on` | Event to fire the select event on - focus: when the input is focused - uniInput: when the input's value is changed | `string`           | `'focusin'`     |
| `value`    | `value`     | Machine value for the option                                                                                       | `number \| string` | `this.uniqueId` |


## Events

| Event       | Description                                                                  | Type                |
| ----------- | ---------------------------------------------------------------------------- | ------------------- |
| `uniSelect` | Emitted when this option is selected (usually when clicked and not disabled) | `CustomEvent<void>` |


## CSS Custom Properties

| Name                  | Description                        |
| --------------------- | ---------------------------------- |
| `--uni-border-radius` | Border radius for underlying field |
| `--uni-border-width`  | Border width for underlying field  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
