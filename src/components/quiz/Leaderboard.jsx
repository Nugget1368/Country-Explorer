import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MyLocalStorage } from "../../features/localStorage/storage.js";
const Leaderboard = ({ region = "" }) => {
    const [leaderboard, setLeaderboard] = useState();
    const { userName } = useSelector(state => state.region);
    useEffect(() => {
        let board = MyLocalStorage.getSortedLeaderboard(region);
        setLeaderboard(board);
    }, [])
    return (
        <>
            <header>
                <h5>{region.charAt(0).toUpperCase() + region.slice(1)}</h5>
            </header>
            <ul>
                <li>
                    <label><strong>Name</strong></label>
                    <label><strong>Score (points)</strong></label>
                </li>
                {leaderboard?.players && leaderboard.players.length > 0 ? leaderboard.players.map((player, index) => (
                    <li className={player.userName === userName ? "high-score" : ""} key={player.userName}>
                        <label><strong>{index + 1}. </strong> {player.userName}</label>
                        <label>{player.score} points</label>
                    </li>
                ))
                    : <li>Leaderboard is empty...</li>
                }
            </ul>
        </>
    )
}

export default Leaderboard