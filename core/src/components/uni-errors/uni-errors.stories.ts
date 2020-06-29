export default {
  title: 'Errors'
};

export const Default = () => {
  const e1 = document.createElement('uni-errors');
  const e2 = document.createElement('uni-errors');
  const e3 = document.createElement('uni-errors');

  e2.error = 'Error text';
  e3.errors = ['Error One', 'Error Two'];

  const wrapper = document.createElement('div');
  wrapper.append(e1, e2, e3);

  return wrapper;
};
