'use client'
export default function Button2() {
  const handleClick = async () => {
    console.log('Click 2 happened')
    const res = await fetch('/api/2')
    const data = await res.json()
    console.log(data)
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Call to Action 2 (nodejs)
    </button>
  )
}
