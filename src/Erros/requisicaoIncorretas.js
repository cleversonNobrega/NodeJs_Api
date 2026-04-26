import ErroBase from "./erroBase.js";

class requisicaoIncorreta extends ErroBase {
  constructor(messagem = "Um ou mais dados fornecidos estão incorretos") {
    super(messagem, 400);
  }
}

export default requisicaoIncorreta;
