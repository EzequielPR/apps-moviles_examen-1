// Ezequiel Pérez
// 2019-7883



<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <ion-card>
        <ion-card-header>
          <ion-card-title>Ezequiel Pérez Rosario</ion-card-title>
          <ion-card-subtitle>2019-7883</ion-card-subtitle>
        </ion-card-header>
      </ion-card>

    </ion-content>
  </ion-page>
</template>



<script lang="ts">
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle }
}
</script>



<style scoped>
  ion-card {
    text-align: center;
  }
</style>
