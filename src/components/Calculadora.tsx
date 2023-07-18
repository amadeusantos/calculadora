import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

export default function Calculadora() {
  const teclas = [
    "1",
    "2",
    "3",
    "MC",
    "MR",
    "+",
    "4",
    "5",
    "6",
    "M+",
    "M-",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    "DEL",
    ".",
    "0",
    "_",
    "DEL/C",
    "%",
    "=",
  ];
  const operators = ["/", "+", "-", "%", "*"];
  const Ms = ["M+", "M-", "MR", "MC"];
  const [expressao, setExpressao] = useState("");
  const [memoria, setMemoria] = useState(0);

  function calcular(entrada: string) {
    if (entrada == "DEL") {
      if (expressao != "") {
        setExpressao(expressao.slice(0, expressao.length - 1));
      }
    } else if (entrada == "DEL/C") {
      setExpressao("");
    } else if (
      entrada == "0" &&
      (operators.includes(expressao.charAt(expressao.length - 1)) ||
        expressao == "")
    ) {
    } else if (entrada == "_") {
    } else if (
      operators.includes(entrada) &&
      operators.includes(expressao.charAt(expressao.length - 1))
    ) {
      setExpressao(expressao.slice(0, expressao.length - 1) + entrada);
    } else if (
      entrada == "=" &&
      !operators.includes(expressao.charAt(expressao.length - 1)) &&
      !(expressao == "")
    ) {
      setExpressao(`${eval(expressao)}`);
    } else if (
      entrada == "M+" &&
      !operators.includes(expressao.charAt(expressao.length - 1)) &&
      !(expressao == "")
    ) {
      setMemoria(memoria + eval(expressao));
    } else if (
      entrada == "M-" &&
      !operators.includes(expressao.charAt(expressao.length - 1)) &&
      !(expressao == "")
    ) {
      setMemoria(memoria - eval(expressao));
    } else if (
      entrada == "MR" &&
      !operators.includes(expressao.charAt(expressao.length - 1))
    ) {
      setExpressao(`${memoria}`);
    } else if (
      entrada == "MC" &&
      !operators.includes(expressao.charAt(expressao.length - 1))
    ) {
      setMemoria(0);
    } else if (
      entrada == "=" ||
      entrada == "M+" ||
      entrada == "M-" ||
      entrada == "MR" ||
      entrada == "MC"
    ) {
      console.log("error");
    } else {
      setExpressao(expressao + entrada);
    }
  }

  return (
    <div className="w-screen h-screen bg-black">
      <Display valor={expressao} memoria={`${memoria}`} />
      <div className="h-2/3">
        {teclas.map((tecla) => (
          <Button key={tecla} valor={tecla} setExpressao={calcular} />
        ))}
      </div>
    </div>
  );
}
