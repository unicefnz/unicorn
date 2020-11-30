# uni-expandable-field



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                               | Type                 | Default     |
| ------------- | -------------- | ----------------------------------------- | -------------------- | ----------- |
| `disabled`    | `disabled`     | Makes the field disabled and unselectable | `boolean`            | `undefined` |
| `displayText` | `display-text` | Display text inside the trigger           | `string`             | `undefined` |
| `error`       | `error`        | Displays error(s) below the input         | `string \| string[]` | `''`        |
| `label`       | `label`        | Label text above the field                | `string`             | `undefined` |
| `optional`    | `optional`     | Displays a visual (optional) marker       | `boolean`            | `false`     |


## CSS Custom Properties

| Name                  | Description                         |
| --------------------- | ----------------------------------- |
| `--uni-border-color`  | Border color                        |
| `--uni-border-radius` | Border radius                       |
| `--uni-error-color`   | Border color when in an error state |


## Dependencies

### Depends on

- [uni-errors](../../uni-errors)
- [uni-outside-click](../../util/uni-outside-click)

### Graph
```mermaid
graph TD;
  uni-expandable-field --> uni-errors
  uni-expandable-field --> uni-outside-click
  style uni-expandable-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
