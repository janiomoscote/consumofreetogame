import Link from "next/link";

async function getGames(id) {
    const res =  await fetch(`https://www.freetogame.com/api/games/${id}`)
    const data= await res.json()
    return data
}

async function Juegos({params}: any) {
    const juego = await getGames(params.id)
    return (
        <div className="bg-slate-200 p-10 rounded-md">
            <Link src={juego.thumbnail} alt={juego.title} className="m-auto my-4"/>
            <h3 className="text-3xl font-bold">{juego.id} {juego.title}</h3>
            <p> genero: {juego.genre} </p>
        </div>
);
}

export default Juegos