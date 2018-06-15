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
    /*font-family:  SimHei;*/
  }
  body,html{
    width: 100%;

    height: 100%;

  }
  ::-webkit-scrollbar{
display:none;
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
  .bb{
    border:1px solid red;
  }
  .ab{
    position: absolute;
  }

  .animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}
@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}


@keyframes rollOut2 {
  from {
    opacity: 0;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut2 {
  -webkit-animation-name: rollOut;
  animation-name: rollOut2;
}



</style>
