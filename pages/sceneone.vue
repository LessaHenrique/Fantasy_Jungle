<template>
    <div class="container">
    <div id="text">Você acordou na floresta tonto e com uma grande dor de cabeça, sem nenhuma
memória de como foi parar ali. Um barulho cada vez mais intenso foi o que
despertou você desse apagão. Após abrir os olhos e levantar-se, você observa uma
manada de búfalos vindo em sua direção, a pouquíssimos metros de distância. O que você faz ?</div>
    <div class="container">
        <div id="option-buttons" class="btn-grid">
        <div class="links">
          <a
            href="sceneoneout1"
            class="button"
          >
          <button class="btn">A - Corre o mais rapido possível</button>
          </a>
        </div>
        <a
          href="sceneoneout2"
          class="button"
        >
        <button class="btn">B - Sobe na árvore</button>
        </a>
        <a
          href="sceneoneout3"
          class="button"
        >
        <button class="btn">C - Se finge de morto</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.btn {
  background-color: rgb(47, 79, 58);
  border: 20px;
  border-radius: 25px;
  box-shadow: 0 0 10px 4px;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  width: 450px;
  font-size: 25px;
  color: #95db79;
}

.btn:hover {
  border-color: rgb(241, 206, 5);
}

.btn-grid {
  align-content: flex-start;
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 25px;
  margin-top: 10px;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
}
</style>
