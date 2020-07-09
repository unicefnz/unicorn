export default {
  title: 'Dialog'
};

function makeTrigger(dialog: HTMLUniDialogElement, text: string) {
  const button = document.createElement('uni-button');
  button.innerHTML = text;
  button.addEventListener('click', () => {
    document.body.append(dialog);
    dialog.present();
  });
  return button;
}
function addDismissAction(dialog: HTMLUniDialogElement) {
  const actionRoot = dialog.querySelector('div[slot=actions]');
  if (!actionRoot) throw new Error('No actions slot');

  const button = document.createElement('uni-button');
  button.innerText = 'Dismiss';
  button.addEventListener('click', () => dialog.dismiss());

  actionRoot.append(button);

  return button;
}

export const Default = () => {
  const normalDialog = document.createElement('uni-dialog');
  normalDialog.innerHTML = `
    <span slot="title">Hello!</span>
    <p>Are you sure?</p>
    <div slot="actions"></div>`;
  addDismissAction(normalDialog);

  const noDismissDialog = document.createElement('uni-dialog');
  noDismissDialog.backdropDismiss = false;
  noDismissDialog.innerHTML = `
    <span slot="title">No background dismiss</span>
    <p>You shouldn't be able to click the background or hit escape to close</p>
    <div slot="actions"></div>
  `;
  addDismissAction(noDismissDialog);

  const wrapper = document.createElement('div');
  wrapper.append(
    makeTrigger(normalDialog, 'Open Normal'),
    makeTrigger(noDismissDialog, 'Open backdropDismiss = false'),
  );
  return wrapper;
};


export const LayoutValidation = () => `
<uni-dialog>
  <span slot="title">Title text</span>
  <p>This is a simple dialog to check using CI</p>
  <div slot="actions">
    <p>Action</p>
  </div>
</uni-dialog>
`
