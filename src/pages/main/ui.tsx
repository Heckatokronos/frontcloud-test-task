import { AboutMe, MainComponent } from "features";

import "./ui.scss"
import { Divider } from "shared";

function MainPage() {
  return (
    <div className="container">
      <AboutMe />
      <Divider />
      <MainComponent />
    </div>
  );
}

export default MainPage;
