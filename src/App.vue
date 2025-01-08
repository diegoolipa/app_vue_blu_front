<template>  
  <!-- <a href="/">Incio</a> |
  <a href="/auth/acerca">ACERCA</a> |
  <a href="/auth/register">INGRESAR</a> |
  <a href="/auth/login">LOGIN</a> | -->

  <RouterLink to="/">Incio</RouterLink> |
  <RouterLink to="/auth/acerca">ACERCA</RouterLink> |
  <RouterLink to="/auth/register">INGRESAR</RouterLink> |
  <RouterLink to="/auth/login">LOGIN</RouterLink> |

  <RouterView />
</template>

<script setup lang="ts"></script>

<style scoped></style>
