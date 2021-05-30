<template>
    <div class="container">
    <figure>
      <img
        class="w-auto rounded-lg mx-auto p-2"
        src="~/assets/vivi_siting.png" />
    </figure>
    <div>
      <h1 class="title">
        Jungle Fantasy
      </h1>
      <div class="subtitle">
        <a
          href="sceneone"
          class="button"
        >
          > START GAME
        </a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
body {
  background-color: rgb(243, 246, 246);
}

.container {
  width: 98vw;
  height: 95vh;
  padding: 15px;
  margin: 0 auto;
  border-radius: 25px;
  border-style: double;
  box-shadow: 0 0 15px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  border-color: #e47e0a;
  font-style: italic;
  font-size: 36px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #e47e0a;
  background-color: rgb(7, 85, 39);
}

.title {
  display: block;
  font-weight: 150;
  font-size: 120px;
  font-family: fantasy;
  font-style: italic;
  color: #e47e0a;
  letter-spacing: 1px;
}

.subtitle {
  font-family: fantasy;
  font-weight: 300;
  font-size: 60px;
  color: #95db79;
  word-spacing: 9px;
  padding-bottom: 15px;
}

.links {
  align-content: center;
  text-align: center;
  font-size: 25px;
  color: rgb(2, 70, 2);
  font-weight: 400;
  box-sizing: border-box;
}

.w-auto {
  align-items: center;
}
</style>
