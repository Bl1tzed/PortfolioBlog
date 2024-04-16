import { Button } from "@shared/ui/button";
import { LinkButton } from "@shared/ui/linkButton";

import style from "./styles/App.module.scss";

function App() {
  return (
    <div>
      <div className={style.text}>Text Текст посложнее где больше буков</div>
      <Button>Contact Us</Button>
      <LinkButton />
    </div>
  );
}

export default App;
