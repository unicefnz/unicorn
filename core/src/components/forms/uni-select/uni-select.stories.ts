export default {
  title: 'Forms/Select'
};

export const Default = () => `
<uni-select label="Hello">
  <select>
    <option>Opt 1</option>
    <option>Opt 2</option>
    <option>Opt 3</option>
    <option>Opt 4</option>
  </select>
</uni-select>

<uni-select label="Errored state" error="Error!">
  <select>
    <option>Opt 1</option>
    <option>Opt 2</option>
    <option>Opt 3</option>
    <option>Opt 4</option>
  </select>
</uni-select>
`;
