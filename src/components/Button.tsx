interface ButtonsProps {
    valor: string;
    setExpressao: (exp:string) => void;
}

export default function Button({valor, setExpressao}: ButtonsProps) {
    return (
        <button className="w-1/6 h-1/5 text-5xl border bg-slate-900 border-slate-600" onClick={() => setExpressao(valor)}>
            {valor}
        </button>
    )
}