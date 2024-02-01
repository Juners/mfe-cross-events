import "./style.css";
import "./mfes/ColorRenderer";
import "./mfes/ColorPicker";

function createMfes() {
  const colorPickerCe = customElements.get("color-picker");
  const colorPickerNode = new colorPickerCe();
  app.appendChild(colorPickerNode);

  const colorRendererCe = customElements.get("color-renderer");
  const colorRendererNode = new colorRendererCe();
  app.appendChild(colorRendererNode);
}

const app = document.getElementById("app");
createMfes();
