// Ezequiel Pérez
// 2019-7883



<template>
  <ion-page>
    <ion-header>
      <ion-card>
        <ion-item>
          <ion-label>Numero: </ion-label>
          <ion-input type="number" v-model.number="numero"></ion-input>
        </ion-item>
      </ion-card>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item-group>
          <ion-item v-for="_, i in Array(15)" :key="i">
            <ion-label>{{numero || 0}} × {{i}} = {{numero * i}}</ion-label>
          </ion-item>
        </ion-item-group>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonContent, IonHeader, IonInput, IonLabel, IonCard, IonItem, IonItemGroup } from '@ionic/vue';
  import { ref } from 'vue';

  export default  {
    name: 'Tab2',
    components: { IonContent, IonPage, IonHeader, IonInput, IonLabel, IonCard, IonItem, IonItemGroup },
    setup() {
      const numero = ref(0);

      return { numero };
    }
  }
</script>
