import classNames from "classnames";
import {formatCurrency} from './utils';

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render({type, price}) 
  {
    const template = `
<div class="notification type-${type} ${classNames({
  "is-danger" : type === Notification.types.HAWAIIAN,
})}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
  }

  empty(){}

  static closeNotification(){
    document.querySelector('.notifications').addEventListener('click', (e) => {
      if(e.target.parentElement.parentElement.className === ('notification-container')){
        e.target.parentElement.parentElement.remove();
      }
    })
  }

}
