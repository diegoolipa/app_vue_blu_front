<template>
  <h1>Mi Perfil</h1>
  <div v-if="perfil">
    <h4>Nombre: {{ perfil.name }}</h4>
    <h4>Email: {{ perfil.email }}</h4>
    <h4>Id: {{ perfil.id }}</h4>
  </div>
  <div>
    {{ perfil }}
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import authService from '../../../services/auth/auth.service';

const loading = ref(false);
const perfil = ref();

onMounted(()=>{
    getPerfil();
    console.log('');
    
})

const getPerfil = async () => {
  loading.value = true;
  try {
    const response = await authService.profile();
    perfil.value = response.data.data;
    console.log(response);
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  } finally {
    loading.value = false;
  }
};
</script>
