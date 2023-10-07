import Spanish from "../languages/spanish.json";
import Catalan from "../languages/catalan.json";
import English from "../languages/english.json";

function CheckLanguage() {
  let content = English;
  switch (localStorage.getItem("lang")) {
    case "esp":
      content = Spanish;
      break;
    case "cat":
      content = Catalan;
      break;
    default:
      content = English;
      break;
  }

  return content;
}

export default CheckLanguage;
