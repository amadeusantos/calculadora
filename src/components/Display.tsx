interface DisplayProps {
    valor: string
}

export default function Display({valor}: DisplayProps) {
    return (
        <div className="flex justify-end items-center w-screen h-1/4 p-12 text-9xl bg-white text-cyan-600">
            {valor}
        </div>
    )
}