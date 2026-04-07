import Link from 'next/link';

<<<<<<< HEAD
export default function Home() {
  return (
    <nav className="container bg-slate-400 mb-4 flex justify-between items-center px-20 p-3">
      <div className="flex items-center gap-10">
        <Link href="/">
          <h1 className="text-2xl font-bold">Games Store</h1>
        </Link>
      </div>


      <div className="flex items-center gap-2">
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="/auth/sign-up">Sign up!</Link>
        <Link className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50" href="/auth/login">Login</Link>
      </div>
    </nav>

  
=======

import Image from "next/image";



async function fetchGames() {
  const res = await fetch("https://www.freetogame.com/api/games")
  const data = await res.json()

  return data;
}
export default async function Home() {

  const games = await fetchGames();

  return (<div className="grid grid-cols-4 gap-4">
    {games.map((game: any) => (
      <div key={game.id} className="bg-gray-800 rounded-lg p-4">
        <Image
          src={game.thumbnail}
          alt={game.title}
          width={400}
          height={200}
          className="rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{game.title}</h2>
        <p className="text-gray-400 mb-2">{game.short_description}</p>
        <p className="text-sm text-gray-500">Genre: {game.genre}</p>
      </div>
    ))}
  </div>
   
>>>>>>> parent of 37d4634 (Corrección del profesor)
  );
}