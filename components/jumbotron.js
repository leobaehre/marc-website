import Image from 'next/image'

export default function Jumbotron() {
  return (
    <>
        <div className="relative z-10 container mx-auto my-2 p-2 flex flex-row flex-between bg-red-900 opacity-50 h-60">
            <div>
                <h1 className="text-white font-4xl font-bold">
                    <span className="">Marc<br/></span>
                    <span>De<br/></span>
                    <span>Krosse<br/></span>
                </h1>
            </div>
            <div></div>
        </div>
    </>
  )
}
