import { taskPosition, selector } from "../config/config.js";

export class FoterRenderer {
  renderFooter(rootNode, text) {
    const markUp = `
    <div class="footer">${text}</div>
    `;
    rootNode.insertAdjacentHTML(taskPosition.beforeEnd, markUp);
    setTimeout(() => {
      document.querySelector(selector.footer).remove();
    }, 2000);
  }
}
