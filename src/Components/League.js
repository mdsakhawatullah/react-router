import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './League.css'

import { faCheckSquare, faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const League = (props) => {
    const{idTeam,strTeamBadge,strTeam,strSport,strLeague} = props.league;

    
     
    return (
      <>  
      
        <div  className="col-md-3 my-3">
        <Card>
        <Card.Img className="p-5" variant="top" style ={{height:'250px'}} src={strTeamBadge} />
         <Card.Body>
        <div className="text-center">
      <Card.Title>{strTeam}</Card.Title>
             <Card.Text> 
          <h6>Sports Type:{strSport}</h6> 
                <p>{strLeague}</p>
           </Card.Text>
    <a style={{fontSize:'22px'}} href=""> <Link to={`/league/${strTeam}`}> Details <FontAwesomeIcon icon={faArrowRight}/></Link></a> 
                    
                </div>
            </Card.Body>
        </Card>
        </div>
    
       </> 
    );
};

export default League;