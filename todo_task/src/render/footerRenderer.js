export class FoterRenderer {
  renderFooter(rootNode, text) {
    rootNode.insertAdjacentHTML(
      'beforeend',
      `<div class="footer">
            ${text}
        </div>`
    );
    setTimeout(() => {
      document.querySelector('[class=footer]').remove();
    }, 2000);
  }
}
