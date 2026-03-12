"use client";

import Link from "next/link";
import Image from "next/image";

function Games({ games }, any) {
  return (
     <ul>
      {games.map((game, any) => (
        <Link  key={game.id} href={`/game/${game.id}`}>
        <li className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
          onClick={() => alert(game.title)}
          <div>
            <h5 className="font-bold">{game.id}: {game.title} {game.genre}</h5>
            <p className="text-slate-950"> Desarrollador: {game.developer} </p>
            
          </div>
          <Image src={game.thumbnail} alt={game.title} width={100} height={100}  className="rounded-full w-20"/>
        </li>
        </Link>
      ))}
    </ul>
    
  )
}

export default Games