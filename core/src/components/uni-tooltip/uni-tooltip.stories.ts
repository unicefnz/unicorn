export default {
  title: 'Tooltip',
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true,
      delay: 500
    }
  }
};

export const Default = () => `
<uni-tooltip text="Super duper long text to see how wrapping works!" position="right">
  <uni-button icon onClick="return true">
    <ion-icon name="add"></ion-icon>
  </uni-button>
</uni-tooltip>
<p>
    This text has a
    <uni-tooltip text="Tooltip text!">
      <span class="display-link">trigger</span>
    </uni-tooltip>
    inside it
</p>

<uni-tooltip>
  <p>Trigger</p>
  <div slot="content">
    <p>Longer tooltip content</p>
    <a class="uni-block-link" href="#">Learn more</a>
  </div>
</uni-tooltip>

<div style="margin-left: 100px">
  <uni-tooltip text="Super duper long text to see how wrapping works!" position="top">
    <uni-button icon onClick="return true">
      <ion-icon name="add"></ion-icon>
    </uni-button>
  </uni-tooltip>
  <uni-tooltip text="Super duper long text to see how wrapping works!" position="bottom">
    <uni-button icon>
      <ion-icon name="add"></ion-icon>
    </uni-button>
  </uni-tooltip>
  <uni-tooltip text="Super duper long text to see how wrapping works!" position="left">
    <uni-button icon>
      <ion-icon name="add"></ion-icon>
    </uni-button>
  </uni-tooltip>
  <uni-tooltip text="Super duper long text to see how wrapping works!" position="right">
    <uni-button icon>
      <ion-icon name="add"></ion-icon>
    </uni-button>
  </uni-tooltip>
</div>

`;

export const LayoutTest = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  <div style="display: flex; flex-direction: column; height: 100vh; justify-content: space-between">
      <div style="display: flex; justify-content: space-between">
          <div>
            <uni-tooltip text="Test content that will wrap!" position="right">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
            <uni-tooltip text="Test content that will wrap!" position="bottom">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
          </div>
          <div>
            <uni-tooltip text="Test content that will wrap!" position="left">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
            <uni-tooltip text="Test content that will wrap!" position="bottom">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
          </div>
      </div>
      <div style="display: flex; justify-content: space-between">
          <div>
            <uni-tooltip text="Test content that will wrap!" position="top">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
            <uni-tooltip text="Test content that will wrap!" position="right">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
          </div>
          <div>
            <uni-tooltip text="Test content that will wrap!" position="top">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
            <uni-tooltip text="Test content that will wrap!" position="left">
              <ion-icon name="rocket"></ion-icon>
            </uni-tooltip>
          </div>
      </div>
  </div>
  `;
  div.querySelectorAll<HTMLUniTooltipElement>('uni-tooltip').forEach((v) => { v.value = true; });
  return div;
};
