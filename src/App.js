import './App.css';
import pic from "../src/Images/2.jpg";
import pic1 from "../src/Images/new.jpg";
import pic2 from "../src/Images/Stark_Industries_SNWH.jpeg"
import Armors from './pages/Guns';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/EFootball">About</a></li>
                    <li><a href="https://www.konami.com/efootball/en/page/2023/season2">Play</a></li>
                    <li><a href="#header4">Learn more</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>PRO EVOLUTION SOCCER</h1><br/>
    <p>
         World's Largest playing platform
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >VISIT US TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                  TEAM NAMES FOR NEXT MATCH
                </h2><br/>
                <div class="img2">
                    <img src={pic1} alt="" /><img src={pic1} alt="" /><br/><br/>
                    <img src={pic2} alt=""/> <img src={pic2 } alt=""/>
                </div>
                <h6>Here you know about what are the players available
                and buy them for playing<br/>      
                </h6><br/>
          <h6> <i>NOTE : same teams cannot be chosen by both mates</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">CHOOSE PLAYERS NOW </a>
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    
    </div>
  );
}

export default App;
