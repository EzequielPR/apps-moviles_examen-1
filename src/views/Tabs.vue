<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="inicio" href="/inicio">
          <ion-icon :icon="personCircle" />
          <ion-label>Inicio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tabla-multiplicacion" href="/tabla-multiplicacion">
          <ion-icon :icon="calculator" />
          <ion-label>Tabla Multiplicacion</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="numero-mayor" href="/numero-mayor">
          <ion-icon :icon="code" />
          <ion-label>Numero Mayor</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { personCircle, calculator, code } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return { personCircle, calculator, code }
  }
}
</script>
