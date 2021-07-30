import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home2">
            <Home />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home2" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="page2" href="/page2">
            <IonIcon icon={triangle} />
            <IonLabel>Page2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home2">
            <IonIcon icon={square} />
            <IonLabel>Home2</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
