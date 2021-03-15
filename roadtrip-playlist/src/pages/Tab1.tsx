import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonActionSheet, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router'; 
import { calendar, person, call , settings, personCircle, map, informationCircle, trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Roadtrip_Playlists: React.FC = () => {



  return (
    <IonPage>

	

      <IonHeader>
        <IonToolbar  color="primary">
	   
          <IonTitle >Roadtrip Playlists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Roadtrip Playlists</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard color="medium">
          <IonCardHeader>
            
            <IonCardTitle>Give us a destination and let us handle the rest!
	    </IonCardTitle>
          </IonCardHeader>

         
        </IonCard>

	<IonCard>
	<IonCardContent>

<IonButton expand="full" size="large" color="success" href="/tab3"> Connect to Spotify</IonButton>

<IonButton expand="full" size="large" color="secondary" href="/tab2"> Choose your destination</IonButton>

<IonButton expand="full" size="large" color="warning" href="/tab4">create your personal playlist</IonButton>


	</IonCardContent>
	</IonCard>



      </IonContent>
    </IonPage>
  );
};

export default Roadtrip_Playlists;
