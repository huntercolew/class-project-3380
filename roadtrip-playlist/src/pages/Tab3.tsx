import { IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {

 const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Spotify</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

	<IonCard>
       <IonCardHeader color="medium">
	 <IonCardTitle>Choose your destination to map out your musical adventure.
	    </IonCardTitle>
	</IonCardHeader>
       </IonCard>
<IonCard color="secondary">
	
	<IonItem>
            <IonInput  value={text} placeholder="Enter Destination" onIonChange={e => setText(e.detail.value!)}></IonInput>
	</IonItem>

	</IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
