const COLORS = ["indianred", "lightblue", "lightgreen", "lightyellow"];

class ColorPicker extends HTMLElement {
  shadowDom;

  connectedCallback() {
    if (!this.shadowDom) {
      this.shadowDom = this.attachShadow({ mode: "open" });
    }

    const node = document.createElement("div");
    node.id = "main";
    node.style.width = "100%";
    node.style.boxSizing = "border-box";
    node.style.display = "flex";
    node.style.flexWrap = "wrap";
    node.style.padding = "25px"
    node.style.gap = "25px";

    COLORS.forEach((color) => {
      const div = document.createElement("div");
      div.style.backgroundColor = color;
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.boxSizing = "border-box";
      div.style.border = "1px solid black";
      div.style.cursor = "pointer"
      div.style.display = "flex"
      div.style.justifyContent = "center"
      div.style.alignItems = "center"
      div.textContent = color

      div.onclick = function colorClicked() {
        document.dispatchEvent(
          new CustomEvent("colorchanged", { detail: color })
        );
      };

      node.appendChild(div);
    });

    this.shadowDom.appendChild(node);
  }

  disconnectedCallback() {
    if (this.shadowDom) {
      this.shadowDom.getElementById("main").remove();
    }
  }
}

customElements.define("color-picker", ColorPicker);
