export const getHMinFromSeconds = (seconds) => {
    // return HH:MM from seconds (stopWatchSeconds)
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}