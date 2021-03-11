import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LeagueDetail.css';
import malepic from './male.png';
import femalepic from './female.png'
import { Card, Button } from 'react-bootstrap';
import User from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFlag, faVenusMars, faMapPin, faFutbol } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebookF)

const LeagueDetail = (props) => {
    const { strTeam } = useParams();
    const [league, setLeague] = useState([]);
    const [picture, setPicture] = useState([]);
    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${strTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.teams[0]))
    },[strTeam])

    return (
        <>
            <div style={{
                backgroundImage: `url(${league.strStadiumThumb})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}>
                <img id="bannerImage" src={league.strTeamBadge} alt="" />
            </div>
            <div className="detail">
                <div className="col-md-7">
                    <h1>{league.strTeam}</h1><br />
                    <h5> <FontAwesomeIcon icon={faFlag} />Country: {league.strCountry}</h5><br />
                    <h5> <FontAwesomeIcon icon={faFutbol} /> Sport Type:{league.strSport}</h5><br />
                    <h5> <FontAwesomeIcon icon={faMapPin} /> Founded:{league.intFormedYear}</h5><br />
                    <h5>
                        <FontAwesomeIcon icon={faVenusMars} />Gender:
                        <Button style={{ margin: '4px' }} onClick={() => setPicture(!picture)} variant="dark" >Male</Button>
                        <Button onClick={() => setPicture(!picture)} variant="dark">FeMale</Button>
                    </h5>
                </div>
                <div className="col-md-5" >
                    {
                        picture ? <img className="image_pic" src={malepic} alt="" /> : <img className="image_pic" src={femalepic} alt="" />
                    }
                </div>
            </div>
            <div className="container">
                <h5>{league.strDescriptionEN}</h5><br />
                <p>{league.strStadiumDescription}</p>
            </div>
            <footer className="footer">
                <div> <a id="facebook" href={`https://${league.strFacebook}`} target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a> </div>
                <div>  <a href={`https://${league.strTwitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></div>
                <div> <a href={`https://${league.strYoutube}`} target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></div>
            </footer>

        </>
    );
};

export default LeagueDetail;