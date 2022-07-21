class Forca {

  constructor(resposta) {
    this.resposta = resposta.split('');
    this.palavra = this.resposta.map((x) => x = '_');
    this.letras = [];
    this.vidas = 6;
  }


  chutar(chute) {
    chute = chute.toLowerCase();
    if (chute.length > 1 || this.letras.includes(chute)) {
      return;
    }
    const letraVerificada = this.resposta.includes(chute);
    this.letras.push(chute);
    if (!letraVerificada) {
      this.vidas--;
    } else {
      for (let i = 0; i < this.resposta.length; i++) {
        if (this.resposta[i] === chute) {
          this.palavra.splice(i, 1, chute)
        }
      }
    }
  }

  buscarEstado() {
    if (this.vidas <= 0) {
      return "perdeu";
    }
    for (let i = 0; i < this.resposta.length; i++) {
      if (this.resposta[i] !== this.palavra[i]) {
        return "aguardando chute";
      }
    }
    return "ganhou";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    let letrasChutadas = this.letras;
    let palavra = this.palavra;
    let vidas = this.vidas;

    return {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
