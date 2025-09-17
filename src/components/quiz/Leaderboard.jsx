import { useEffect, useState } from "react";
import { MyLocalStorage } from "../../features/localStorage/storage.js";
const Leaderboard = ({ region = "" }) => {
    const [leaderboard, setLeaderboard] = useState();
    useEffect(() => {
        let board = MyLocalStorage.getLeaderboard(region);
        // if (board && board.players.length > 1) {
        // console.log(board);
        // board.players = MyLocalStorage.sortPlayers(board.players);
        setLeaderboard(board);
        console.log(leaderboard);
        // }
    }, [])
    return (
        <>
            <header>
                <h5>{region.charAt(0).toUpperCase() + region.slice(1)}</h5>
            </header>
            <ul>
                {leaderboard?.players && leaderboard.players.length > 0 ? leaderboard.players.map((player) => (
                    <li key={player.userName}>
                        <label>{player.userName}</label>
                        <label>Score {player.score} points</label>
                    </li>
                ))
                    : <li>Leaderboard is empty...</li>
                }
            </ul>
        </>
    )
}

export default Leaderboard