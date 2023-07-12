import Button from "./Button";
import Display from "./Display";

export default function Calculadora() {
    const teclas = ["1", "2", "3", "MC", "MR", "+", "4", "5", "6", "M+", "M-", "-", "7", "8", "9", "*", "/", "DEL", ".", "0", "_", "_", "%", "="]
    return (
        <div className="w-screen h-screen bg-black">
            <Display valor="10" />
            <div className="h-3/4">
                {teclas.map((tecla) => <Button key={tecla} valor={tecla} />)}
            </div>
        </div>
    )
}