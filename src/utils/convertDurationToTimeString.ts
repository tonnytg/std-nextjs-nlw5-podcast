export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600) //arrendonda para baixo
    const minutos = Math.floor(duration % 3600 / 60) // pega o resto
    const seconds = duration % 60

    const timeString = [hours, minutos, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return timeString
}



