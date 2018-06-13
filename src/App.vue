<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    /*font-family: Courier;*/
  }
  body,html{
    width: 100%;

    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  ul li ,ol li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .lh{
    display: inline-block;
  }
  .image{
    background:url('/static/img/image.png');
  }
  .icon{
    background:url('/static/img/icon.png');
    
  }
</style>
