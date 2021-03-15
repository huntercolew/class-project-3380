import { IonButton, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Destination</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Destination</IonTitle>
          </IonToolbar>
        </IonHeader>
	

	<IonCard color="medium">
          <IonCardHeader>
          
            
            <IonCardTitle>Connect to your Spotify account to save your personall playlist.
	    </IonCardTitle>
	</IonCardHeader>
       </IonCard>
<IonButton expand="full" size="large" color="success" href="https://accounts.spotify.com/en/login?continue=https"> Connect to Spotify</IonButton>

           
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
