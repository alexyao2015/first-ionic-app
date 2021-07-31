import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Page2.scss";
import ScrollingBox from "../components/ScrollingBox";

const Page2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Page 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer pageName="Page2" />
        <ScrollingBox color="green" />
      </IonContent>
    </IonPage>
  );
};

export default Page2;
