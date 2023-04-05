import React from 'react'
import img1 from "../Images/m16.jpg";
import img2 from "../Images/ar15.jpg";
import img3 from "../Images/pistol.jpeg"
import img4 from "../Images/shotgun.jpg";
import img5 from "../Images/ak47.jpg"
import img6 from "../Images/mk46.jpg"
import img7 from "../Images/sr1911.jpg"
import img8  from "../Images/famas.png"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>NEYMAR JR</h2>
        <h2>Price : $1000</h2>
        <h2>EBILITY: TACKLE</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>MESSI</h2>
        <h2>Price : $200</h2>
        <h2>EBILITY: LF STRONG </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>RONALDO</h2>
        <h2>Price : $500</h2>
        <h2>EBILITY:SHOOT POWER</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>HALAND</h2>
        <h2>Price : $250</h2>
        <h2>EBILITY: STABLE</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>MBAPPE</h2>
        <h2>Price : $500</h2>
        <h2>EBILITY: SPRINT</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>LEWENDOWSKI</h2>
        <h2>Price : $200</h2>
        <h2>EBILITY: SHOOT </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>RAMOS</h2>
        <h2>Price : $250</h2>
        <h2>EBILITY: WALL</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>POGBA</h2>
        <h2>Price : $350</h2>
        <h2>EBILITY : HEADER</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
