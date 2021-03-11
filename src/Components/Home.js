import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import League from './League';
import './Home.css'

const Home = () => {
    const [leagues, setLeague] = useState([]);
    useEffect(() => {

        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setLeague(data.teams))
    }, [])
    return (
        <>
            <div id="firstImage">
                <h1 className="d-flex justify-content-center align-items-center p-5 mx-auto" id="text">English Premier League</h1>
            </div>
            <div style={{ backgroundColor: 'white' }} className="container">
                <div className="row row-cols-3">
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;