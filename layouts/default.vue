<template>
  <div>
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" />
</head>

>
    <Header />
    <body class="home">

    </body>
    
    <nuxt/>
    <footer class="app-footer">Design by Slawomir </footer>
                     
  </div>
  
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>


<style>
.home { 
    background: url('../static/bg.jpg'); 
    background-size: cover; 
}
.app-footer { 
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: rgb(207, 191, 191);
  position: absolute; 
  bottom: 15px; 
  right: 15px; 
  opacity: .5; 
}
</style>
