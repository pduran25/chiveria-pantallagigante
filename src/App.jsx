import styled from 'styled-components';
import sound from './assets/chiverito.mp3';
import  {useEffect, useState} from 'react';
import axios from 'axios';


import './App.css'


function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('mascota');
  //var valtipo = params.get('prueba');
  console.log("mascota numero: "+codigo);
  const [code, setCode] = useState(0);
  var source = "";
  var source2 = "";
  const [sourcea, setSourcea] = useState("./assets/chiverito/chivp3.glb"); //codigo adicional
  const [source2a, setSource2a] = useState("./assets/chiverito/chivp3.usdz"); //codigo adicional
  //var imagen = "";
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);


  //valtipo = (valtipo === null || valtipo === undefined)?0:valtipo;
  
  if(code == 0){
    source = "./assets/chiverito/chivp3.glb"
    source2 = "./assets/chiverito/chivp3.usdz"
  }

if(code == 1){
  source = "./assets/batman/batmanandroid1.glb"
  source2 = "./assets/batman/batmanios1.usdz"
}
  
if(codigo == "manolo"){
  source = "./assets/chiverito/chivp3.glb"
  source2 = "./assets/chiverito/chivp3.usdz"
}else if(codigo == "firulais"){
  source = "./assets/batman/batmanandroid1.glb"
  source2 = "./assets/batman/batmanios1.usdz"
}else if(codigo == "chiverito"){
  source = "./assets/golden/goldenn6.glb"
  source2 = "./assets/golden/goldenn6.usdz"
}else if(codigo == "marley"){
  source = "./assets/peluza/peluzan2.glb"
  source2 = "./assets/peluza/peluzan2.usdz"
}else if(codigo == "dulce"){
  source = "./assets/simba/simba.glb"
  source2 = "./assets/simba/simba.usdz"
}else if(codigo == "peluza"){
  source = "./assets/marley/Marley.glb"
  source2 = "./assets/marley/Marley.usdz"
}else if(codigo == "botas"){
  source = "./assets/dracula/dracula.glb"
  source2 = "./assets/dracula/dracula.usdz"
}else if(codigo == "simba"){
  source = "./assets/dulce/dulcen2.glb"
  source2 = "./assets/dulce/dulcen2.usdz"
}else if(codigo == "coco"){
  source = "./assets/dante/dante.glb"
  source2 = "./assets/dante/dante.usdz"
}else if(codigo == "lulu"){
  source = "./assets/barbie/barbien2.glb"
  source2 = "./assets/barbie/barbien2.usdz"
}else if(codigo == "kira"){
  source = "./assets/reina/reinan4.glb"
  source2 = "./assets/reina/reinan4.usdz"
}else if(codigo == "mila"){
  source = "./assets/nina/nina.glb"
  source2 = "./assets/nina/nina.usdz"
}else if(codigo == "nina"){
  source = "./assets/mila/mila_n2.glb"
  source2 = "./assets/mila/mila_n2.usdz"
}else if(codigo == "barbie"){
  source = "./assets/lulu/lulu.glb"
  source2 = "./assets/lulu/lulu.usdz"
}else if(codigo == "dante"){
  source = "./assets/coco/coco.glb"
  source2 = "./assets/coco/coco.usdz"
}else if(codigo == "batman"){
  source = "./assets/firulais/firulaisn2.glb"
  source2 = "./assets/firulais/firulaisn2.usdz"
}else if(codigo == "reina"){
  source = "./assets/kira/kiran2.glb"
  source2 = "./assets/kira/kiran2.usdz"
}else if(codigo == "manchas"){
  source = "./assets/bruno/bruno1.glb"
  source2 = "./assets/bruno/bruno1.usdz"
}else if(codigo == "bruno"){
  source = "./assets/manchas/manchasn4.glb"
  source2 = "./assets/manchas/manchasn4.usdz"
}else if(codigo == "dracula"){
  source = "./assets/botas/botas.glb"
  source2 = "./assets/botas/botas.usdz"
}

//imagen = "./assets/provisional.png"


const toggleAudio = () => {


  const audioElement = document.getElementById('myAudio');

  if (isAudioPlaying) {
    audioElement.pause();
  } else {
    audioElement.play();
  }

  setIsAudioPlaying(!isAudioPlaying);
};

useEffect(()=>{
  try{
    if(code == 1){
      setSourcea("./assets/batman/batmanandroid1.glb"); 
      setSource2a("./assets/batman/batmanios1.usdz"); 
      //source = "./assets/batman/batmanandroid1.glb"
      //source2 = "./assets/batman/batmanios1.usdz"
    }
   
  } catch (error) {
    console.error("Error en el efecto:", error);
}
},[code])



/*useEffect(() => {
  try{
  const timer = setTimeout(() => {
    // Cambiar la fuente del modelo 3D después de 30 segundos
    console.log("cambio el objeto");
    setCode(1);
  }, 10000); // 10000 milisegundos = 10 segundos

  return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
} catch (error) {
  console.error("Error en el efecto:", error);
}
}, []);*/

useEffect(() => {
  console.log("cuantas veces ingresa");
  
    intervalo();
  
},[]);

function intervalo(){
  const intervalo = setInterval(() => {
    console.log("cambio el objeto");
    setCode(1);
   
 }, 30000);
}


/*const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};*/




  return (<div className="App">
<model-viewer src={sourcea} ios-src={source2a} autoplay ar ar-modes="webxr scene-viewer" camera-controls touch-action="pan-y" camera-orbit="-40deg 70deg 200m" camera-target="0 0 0">

        <SoundButton
        src={isAudioPlaying ? './assets/audio.png' : './assets/sinaudio.png'}
        alt={isAudioPlaying ? 'Sonido inactivo' : 'Sonido activo'}
        onClick={toggleAudio}
/>

<audio id="myAudio" src={sound} loop/>


        <Boton slot="ar-button" >
          Click Aquí
        </Boton>
  </model-viewer>
    </div>
  )
}

const SoundButton = styled.img`
display: inline-block;
`;







const Boton = styled.button`

display: inline-block;
border: none;
border-radius: 4px;
background-color: #0088cc;
color: #fff;
padding: 12px 24px;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
transition: background-color 0.3s ease;
position: absolute; 
right: 100px; 
left: 100px;

bottom: 100px; 

&:hover {
  background-color: #006699;
}

&:focus {
  outline: none;
  background-color: #004466;
}
`;


export default App;
