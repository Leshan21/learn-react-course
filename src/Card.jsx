import pic from './assets/react.svg'

function Card(){
    return(
        <div className="card">
            <img src={pic} alt="profile pic" className='img'></img>
            <h2>Leshan</h2>
            <p>
                i make youtube video 
            </p>
        </div>
    );
}

export default Card