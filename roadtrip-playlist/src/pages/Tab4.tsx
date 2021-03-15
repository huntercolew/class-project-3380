import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Playlist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Playlist</IonTitle>
          </IonToolbar>
        </IonHeader>
	<IonCard color="medium">
          <IonCardHeader>
	<IonCardTitle>Download your new playlist to your Spotify account.
	    </IonCardTitle>
	</IonCardHeader>
       </IonCard>

<IonButton expand="full" size="large" color="warning" > Download Playlist</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
