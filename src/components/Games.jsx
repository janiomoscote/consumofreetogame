"use client";

import Link from "next/link";
import Image from "next/image";

function Games({ games }) {
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id} onClick={() => alert(game.title)} className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between hover:bg-slate-500 cursor-pointer">
          <Link href={`/game/${game.id}`} className="flex justify-between w-full items-center">
            <div>
              <h5 className="font-bold">{game.id}: {game.title} {game.genre}</h5>
              <p className="text-slate-950"> Desarrollador: {game.developer} </p>

            </div>
            <Image src={game.thumbnail} alt={game.title} width={100} height={100} className="rounded-full w-20" />
          </Link>
        </li>
      ))}
    </ul>

  )
}

export default Games