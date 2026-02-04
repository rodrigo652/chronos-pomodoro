import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitationalBeep)
  audio.load();

  return () => {
    audio.play().catch(error => console.log('Erro ao tocar áudio', error));
  }
}