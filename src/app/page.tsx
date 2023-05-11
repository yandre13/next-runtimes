import Button1 from '@/components/button-1'
import Button2 from '@/components/button-2'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold text-center text-gray-200">
        Hello World
      </h1>
      <hr className="w-full my-12" />

      <h3 className="text-6xl font-bold text-center text-green-200 mb-8">
        Call to Action 1
      </h3>
      <Button1 />

      <hr className="w-full my-12" />
      <h3 className="text-6xl font-bold text-center text-blue-200 mb-8">
        Call to Action 2
      </h3>
      <Button2 />
    </main>
  )
}
