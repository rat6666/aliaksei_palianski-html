export class FoterRenderer {
  constructor() {
    this.taskPosition = {
      beforeEnd: 'beforeend',
    };
  }

  renderFooter(rootNode, text) {
    const markUp = `
    <div class="footer">${text}</div>
    `;
    rootNode.insertAdjacentHTML(this.taskPosition.beforeEnd, markUp);
    setTimeout(() => {
      document.querySelector('[class=footer]').remove();
    }, 2000);
  }
}
