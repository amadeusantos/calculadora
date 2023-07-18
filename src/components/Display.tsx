import { useEffect } from "react"

export default function Display({valor, memoria}: DisplayProps) {
    useEffect(() => {}, [valor, memoria])

    return (
        <div className="flex justify-between items-center w-screen h-1/4 p-12 text-9xl bg-white text-cyan-600">
            <h1>{memoria!="0"? "M": ""}</h1>
            {valor}
        </div>
    )
}