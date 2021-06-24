// Ezequiel Pérez
// 2019-7883



<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <ion-card>
        <ion-item>
          <ion-label>1er numero: </ion-label>
          <ion-input type="number" v-model.number="numero1"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>2do numero: </ion-label>
          <ion-input type="number" v-model.number="numero2"></ion-input>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>{{mayor[0]}}</ion-card-title>
          <ion-card-subtitle>{{mayor[1]}}</ion-card-subtitle>
        </ion-card-header>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonContent, IonInput, IonLabel, IonCard, IonCardHeader, IonItem, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
  import { computed, ref } from 'vue';

  export default  {
    name: 'Tab3',
    components: { IonContent, IonPage, IonInput, IonLabel, IonCard, IonCardHeader, IonItem, IonCardTitle, IonCardSubtitle },
    setup() {
      const numero1 = ref(0);
      const numero2 = ref(0);

      const mayor = computed(() => {
        const n1 = numero1.value || 0;
        const n2 = numero2.value || 0;

        if (n1 === n2) return ["Ambos son iguales", `${n1} = ${n2}`];
        else if (n1 > n2) return ["El 1er numero es mayor: "+n1, `${n1} > ${n2}`];
        else return ["El 2do numero es mayor: "+n2, `${n1} < ${n2}`];
      });

      return { numero1, numero2, mayor };
    }
  }
</script>



<style scoped>
  ion-card {
    text-align: center;
  }
</style>
