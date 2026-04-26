import mongoose from "mongoose";
import ErroBase from "../Erros/erroBase.js";
import requisicaoIncorreta from "../Erros/requisicaoIncorretas.js";
import ErroValidacao from "../Erros/erroValidacao.js";

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new requisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;
