<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  max-width: 720px;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  color: #999;
  font-size: 14px;
  background: url('~@/assets/img/bg.jpg') center repeat-y;
}

body,
img,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
form {
  margin: auto;
  padding: 0;
  border: 0;
  outline: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
img {
  vertical-align: middle;
  vertical-align: middle;
  max-width: 100%;
  border: none;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
img.fdimg {
  transition: 0.5s;
  transform: scale3d(1, 1, 1);
  -webkit-transition: 0.5s;
  -webkit-transform: scale3d(1, 1, 1);
  -o-transition: 0.5s;
  -o-transform: scale3d(1, 1, 1);
}
img.fdimg:hover {
  transform: scale3d(1.1, 1.1, 1);
  transition: 0.5s;
  -webkit-transform: scale3d(1.1, 1.1, 1);
  -webkit-transition: 0.5s;
  -o-transform: scale3d(1.1, 1.1, 1);
  -o-transition: 0.5s;
}

ul,
li {
  list-style-type: none;
}
a {
  color: #333;
  text-decoration: none;
}
a:hover {
  color: #103f99;
  text-decoration: none;
}
.w720 {
  margin: auto;
  max-width: 720px;
}
</style>
