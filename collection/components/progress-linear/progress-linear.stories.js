export default {
    title: 'Progress Linear'
};
export const Default = () => {
    const el = document.createElement('uni-progress-linear');
    el.value = true;
    const el2 = el.cloneNode();
    el2.color = 'accent';
    const button = document.createElement('button');
    button.innerHTML = 'Toggle';
    button.addEventListener('click', () => el.value = !el.value);
    const div = document.createElement('div');
    div.append(el, el2, button);
    return div;
};
