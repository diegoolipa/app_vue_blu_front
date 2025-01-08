<template>
  <h1>Ingresar</h1>
  <div>
    <label for="">Ingresar Correo</label>
    <input type="text" v-model="usuario.email" /><br />

    <label for="">Contrasenq</label>
    <input type="password" v-model="usuario.password" /><br />
    {{ usuario }}
    <input type="submit" value="Ingresar" v-on:click="ingresar()" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import authService from '../../services/auth/auth.service';
import { useRouter } from 'vue-router';

const route = useRouter();

const loading = ref(false)
const usuario = ref({
  email: '',
  password: ''
})

const ingresar = async () => {
  loading.value = true
  try {
    const response = await authService.login(usuario.value)
	console.log(response);
	
    localStorage.setItem('access_token', response.data.data.access_token)
    route.push('/admin/perfil')
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
  } finally {
    loading.value = false
  }
}


// async function ingresar() {
//   const params = {
//     email: 'daniel@gmail.com',
//     password: '123123123',
//   };
//   const data = await authService.login(usuario.value);
//   route.push('/admin/perfil');
// }
</script>
