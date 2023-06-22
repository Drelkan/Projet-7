import React, { useState } from 'react'
// import arrow from '../assets/image/fleche2.png'


const Slider = ({images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gauche = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const droit = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

return (
  <div className='carrousel'>
    <div className='container' id='logements'>
      <div className='photo'>
        <img src={images[currentImageIndex]} alt="" />
      </div>
    </div>
    <img src="../assets/image/fleche2.png" className='bouton' id='gauche' alt="Gauche" onClick={gauche} />
    <img src="../assets/image/fleche2.png" className='bouton' id='droit' alt="Droit" onClick={droit}/>
  </div>
  )
}

export default Slider




        {/* <div className='photo'>
          <img src={images[0]} alt="" />
          <img src={images[1]} alt="" />
          <img src={images[2]} alt="" />
          <img src={images[3]} alt="" />
          <img src={images[4]} alt="" />
        </div>
      {/* <img src={arrow}  className='bouton' id='gauche'/>
      <img src='../assets/image/arrow.png'  className='bouton' id='droit'/> */}


      {/* <script>
  document.body.onload=function(){
    nbr=5,
    p=0,
    container=document.getElementById("logements"),
    gauche=document.getElementById("gauche"),
    droit=document.getElementById("droit"),
    container.style.witdth(800*nbr)+'px',
    for(i=1; i = nbr;i++){
      div=document.createElement("div"),
      div.className="photo",
      div.style.backgroundImage="{images[0]}",
      container.appenChild(div),
    }
    afficherMasquer();

  }
  gauche.onclick=function(){
    if(p>-nbr+1)
      p--;
      container.style.transform="translate("+p*800+"px)";
      container.style.transition="all 0.5s ease";
      afficherMasquer();
  }
    droit.onclick=function(){
    if(p<0)
      p++;
      container.style.transform="translate("+p*800+"px)";
      container.style.transition="all 0.5s ease";
      afficherMasquer();
  }
  function afficherMasquer(){
    if(p==-nbr+1)
      gauche.style.visibility="hidden";
    else
      gauche.style.visibility="visible";
    if(p==0)
      droit.style.visibility="hidden"
    else
      droit.style.visibility="visible";
  }
</script> */}
