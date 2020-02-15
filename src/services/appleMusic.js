const recentUrl='https://api.music.apple.com/v1/me/recent/played'
export function getRecentlyPlayed() {
    fetch(recentUrl, {mode: 'cors'}).then(res => res.json)
}