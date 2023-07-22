export default class Section {
  constructor({ items, renderer }, container) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = container;
  }

  addItem(element) {
    const deleteTrashButton = element.querySelector(".element__trash");
    deleteTrashButton.remove();
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    console.log(this._renderedItems);
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
