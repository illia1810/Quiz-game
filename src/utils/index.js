const formatTime = time => {
    if(time < 60){
        return time < 10 ? `0${time}s` : `${time}s`
    } else {
        return Math.floor(time / 60) + 'min' + (time % 60) + 's';
    }
}

export { formatTime }