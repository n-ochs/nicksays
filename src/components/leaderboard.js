import React from 'react'

function Leaderboard({ leaderboard }) {

    const sortedLeaderboard = leaderboard.sort((b, a) => a.highScore - b.highScore);
    
    return (
        <div className="m-4">
            <h1 className="text-4xl text-center">Leaderboard</h1>
            <table className="table-fixed border-collapse border border-black m-auto mt-3">

                {/* table head */}
                <thead>
                    <tr>
                        <th className="w-1/4 border border-black">Rank</th>
                        <th className="w-1/4 border border-black">Name</th>
                        <th className="w-1/4 border border-black">Score</th>
                    </tr>
                </thead>

                {/* table body */}
                <tbody>
                    {sortedLeaderboard.map((people, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center border border-black">{index + 1}</td>
                                <td className="text-center border border-black">{people.name}</td>
                                <td className="text-center border border-black">{people.highScore}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

};

export default Leaderboard;