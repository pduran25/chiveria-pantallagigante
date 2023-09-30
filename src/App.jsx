import styled from 'styled-components';
import sound from './assets/chiverito.mp3';
import  {useEffect, useState} from 'react';
import axios from 'axios';


import './App.css'


function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('mascota');
  console.log("mascota numero: "+codigo);
  //var valtipo = params.get('prueba');
  var code = 0;
  var source = "";
  var source2 = "";
  const [sourcea, setSourcea] = useState("./assets/chiverito/chiveritopant.glb"); //codigo adicional
  const [source2a, setSource2a] = useState("./assets/chiverito/chiveritopant.usdz"); //codigo adicional
  //var imagen = "";
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  var contador = 0;
  const [inicio, setInicio] = useState(0);


  //valtipo = (valtipo === null || valtipo === undefined)?0:valtipo;
  
  if(codigo != null){
    if(codigo == 'num1'){
      code = 3;
    }else if(codigo == 'num2'){
      code = 0;
    }else if(codigo == 'num3'){
      code = 2;
    }
    contador = 59;
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

/*
useEffect(()=>{
  try{
    if(code == 0){
      setSourcea("./assets/chiverito/chiveritopant.glb"); 
      setSource2a("./assets/chiverito/chiveritopant.usdz");
      console.log("Muestra Chiverito"); 
    } else if(code == 1){
      setSourcea("./assets/golden/goldenn6.glb"); 
      setSource2a("./assets/golden/goldenn6.usdz"); 
      console.log("Muestra Golden"); 
    } else if(code == 2){
      setSourcea("./assets/batman/batmanandroid1.glb"); 
      setSource2a("./assets/batman/batmanios1.usdz");
      console.log("Muestra Batman"); 
    } else if(code == 3){
      setSourcea("./assets/perro/perros2.glb"); 
      setSource2a("./assets/perro/perros1.usdz"); 
      console.log("Muestra Perros"); 

    }
   
  } catch (error) {
    console.error("Error en el efecto:", error);
}
},[code])*/




useEffect(() => {
  console.log("cuantas veces ingresa 1");
  if(inicio == 0){
    intervalo();
    setInicio(1);
  }
},[inicio]);


function intervalo(){
  const intervalo = setInterval(() => {
    contador++;
    console.log(contador);
    if(contador == 60){
      contador = 0;
    //  clearInterval(intervalo);
      if(code == 0){
        code = 1;
        console.log("registro 1");
        setSourcea("./assets/golden/goldenpant.glb"); 
      setSource2a("./assets/golden/goldenpant.usdz"); 
      console.log("Muestra Golden"); 
        
      }
         
      else if(code == 1){
        code = 2;
        console.log("registro 2");
        setSourcea("./assets/perro/perrospant.glb"); 
      setSource2a("./assets/perro/perrospant.usdz"); 
      console.log("Muestra Perros"); 
      }
         
      else if(code == 2){
        code = 3;
        console.log("registro 3");
        
      setSourcea("./assets/gato/gatopant.glb"); 
      setSource2a("./assets/gato/gatopant.usdz");
      console.log("Muestra Batman"); 
      }
          
      else if(code == 3){
        code = 0;
        console.log("registro 3");
        setSourcea("./assets/chiverito/chiveritopant.glb"); 
      setSource2a("./assets/chiverito/chiveritopant.usdz");
      console.log("Muestra Chiverito"); 
      }
         
    }
   
 }, 1000);
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
<model-viewer src={sourcea} ios-src={source2a} autoplay ar ar-modes="webxr scene-viewer quick-look" camera-controls touch-action="pan-y" camera-orbit="0deg 70deg 200m" camera-target="0 0 0" ar-placement="floor">

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
