import profilePic from './451058.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile pic"></img>
            <h2 className='card-title'>OrioN_trpg</h2>
            <p className='card-text'>Programmer, like jrpg, fightings, lazy pixel artist</p>
        </div>
    );
}

export default Card