

import Image from "next/image";
import Games from "../components/Games";



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

    <Games games={games}/>
  </div>
   
  );
}
