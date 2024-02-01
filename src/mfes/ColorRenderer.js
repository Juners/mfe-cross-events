class ColorRenderer extends HTMLElement {
  shadowDom;
  listenerRef;

  connectedCallback() {
    if (!this.shadowDom) {
      this.shadowDom = this.attachShadow({ mode: "open" });
    }

    const node = document.createElement("div");
    node.id = "main";
    node.style.height = "100%";
    node.style.width = "100%";
    node.style.boxSizing = "border-box";
    node.style.border = "1px solid black";
    node.style.backgroundColor = "lightgray";
    this.shadowDom.appendChild(node);

    if (!this.listenerRef) {
      // Using a lambda function so the "this" context is preserved to the CustomElement
      this.listenerRef = (ev) => this.onColorChangedCallback(ev);
      document.addEventListener("colorchanged", this.listenerRef);
    }
  }

  disconnectedCallback() {
    if (this.shadowDom) {
      this.shadowDom.getElementById("main").remove();
      document.removeEventListener("colorchanged", this.listenerRef);
    }
  }

  onColorChangedCallback(event) {
    const newColor = event.detail;
    this.shadowDom.getElementById("main").style.backgroundColor = newColor;
  }
}

customElements.define("color-renderer", ColorRenderer);
