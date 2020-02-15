import React from 'react'
import getRecentlyPlayed from '../../services/appleMusic'

function MainPage(props) {
    return(
    <div>
        <script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
        <button id="apple-music-authorize">authorize</button>
    </div>
    )
}


export default MainPage