export default {
  title: 'Dialog',
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true,
      delay: 500
    }
  }
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
  const actionRoot = dialog.querySelector('uni-dialog-actions');
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
    <uni-dialog-title>Hello!</uni-dialog-title>
    <p>Are you sure?</p>
    <uni-dialog-actions></uni-dialog-actions>`;
  addDismissAction(normalDialog);

  const noDismissDialog = document.createElement('uni-dialog');
  noDismissDialog.backdropDismiss = false;
  noDismissDialog.innerHTML = `
    <uni-dialog-title>No background dismiss</uni-dialog-title>
    <p>You shouldn't be able to click the background or hit escape to close</p>
    <uni-dialog-actions></uni-dialog-actions>
  `;
  addDismissAction(noDismissDialog);

  const wrapper = document.createElement('div');
  wrapper.append(
    makeTrigger(normalDialog, 'Open Normal'),
    makeTrigger(noDismissDialog, 'Open backdropDismiss = false')
  );
  return wrapper;
};

export const LayoutValidation = () => `
<uni-dialog>
  <uni-dialog-title>Title text</uni-dialog-title>
  <p>This is a simple dialog to check using CI</p>
  <uni-dialog-actions>
    <p>Action</p>
  </uni-dialog-actions>
</uni-dialog>
`;
