interface ButtonsProps {
    valor: string
}

export default function Button({valor}: ButtonsProps) {
    return (
        <button className="w-1/6 h-1/5 text-5xl border bg-slate-900 border-slate-600">
            {valor}
        </button>
    )
}