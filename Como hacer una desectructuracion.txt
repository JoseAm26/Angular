
interface AudioPlayer{
    audio: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    autor: string;
    year: number;     
}

const AudioPlayer: AudioPlayer = {
    audio: 100,
    songDuration: 360, 
    song: 'Hasta cuando',
    details: {
        autor: 'Fernando Costa',
        year: 2020 
    }
}

const song = 'Malamanera';

const { song:anotherSong, songDuration:duration, details:{autor} } = AudioPlayer;
// const { autor:Autor } = AudioPlayer.details;

// console.log('Song: ', anotherSong);
// console.log('Autor: ', autor);
// console.log('Autor: ', AudioPlayer.details.autor);
// console.log('Duration:', duration);

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Gohan'];

console.error('Personaje 3: ',  trunks);

export{};