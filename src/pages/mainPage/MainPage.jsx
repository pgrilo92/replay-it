import React from 'react'
import getRecentlyPlayed from '../../services/appleMusicService'

function MainPage(props) {
    return(
    <div>
        <script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
        <button id="apple-music-authorize">authorize</button>

        <div className="card recently-played" >
            <img src="recent.attributes.artwork.url" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">recent.attributes.name</h5>
                <a href="/" className="btn btn-primary">Play</a>
            </div>
        </div>
    </div>
    )
}


export default MainPage