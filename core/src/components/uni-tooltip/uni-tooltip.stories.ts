export default {
  title: 'Tooltip'
};

export const Default = () => `
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
    <a class="block-link" href="#">Learn more</a>
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

<!--<uni-tooltip text="Short" position="top">-->
<!--  <uni-button icon>-->
<!--    <ion-icon name="add"></ion-icon>-->
<!--  </uni-button>-->
<!--</uni-tooltip>-->
<!--<uni-tooltip text="Short" position="bottom">-->
<!--  <uni-button icon>-->
<!--    <ion-icon name="add"></ion-icon>-->
<!--  </uni-button>-->
<!--</uni-tooltip>-->
<!--<uni-tooltip text="Short" position="left">-->
<!--  <uni-button icon>-->
<!--    <ion-icon name="add"></ion-icon>-->
<!--  </uni-button>-->
<!--</uni-tooltip>-->
<!--<uni-tooltip text="Short" position="right">-->
<!--  <uni-button icon>-->
<!--    <ion-icon name="add"></ion-icon>-->
<!--  </uni-button>-->
<!--</uni-tooltip>-->
`;
