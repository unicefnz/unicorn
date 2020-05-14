export default {
    title: 'Progress Linear'
};
export const Default = () => {
    const el = document.createElement('uni-progress-linear');
    el.value = true;
    const button = document.createElement('button');
    button.innerHTML = 'Toggle';
    button.addEventListener('click', () => el.value = !el.value);
    const div = document.createElement('div');
    div.append(el, button);
    return div;
};
