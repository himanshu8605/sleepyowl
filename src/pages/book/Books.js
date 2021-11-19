


import React from "react";
import './books.scss';
import { Col, Row } from "reactstrap";
import Widget from "../../components/Widget/Widget";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FroalaEditor from "react-froala-editor";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import FroalaEditorComponent from 'react-froala-wysiwyg';

import Carousel from 'nuka-carousel';

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";



const Books = () => {
  const str = "<p>React Froala Editor</p>";
  return (
    <div>
      


     
















     <div className="slide-container">
     <Carousel
     
     swipeable={false}
  draggable={false}
  showDots={true}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
     
     >
        
        
     {/* <HScrollGrid gridWidth={1000} gridHeight={700} cardWidth={500} backgroundColor="antiquewhite"> */}
  <div className="wrapper">
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" />
      </div>
      <div className="clash-card__level clash-card__level--barbarian">Level 4</div>
      <div className="clash-card__unit-name">The Barbarian</div>
      <div className="clash-card__unit-description">
        The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-third">
          <div className="stat">20<sup>S</sup></div>
          <div className="stat-value">Training</div>
        </div>

        <div className="one-third">
          <div className="stat">16</div>
          <div className="stat-value">Speed</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">150</div>
          <div className="stat-value">Cost</div>
        </div>

      </div>

    </div> 
  </div> 
  
  <div className="wrapper">
    <div className="clash-card archer">
      <div className="clash-card__image clash-card__image--archer">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png" alt="archer" />
      </div>
      <div className="clash-card__level clash-card__level--archer">Level 5</div>
      <div className="clash-card__unit-name">The Archer</div>
      <div className="clash-card__unit-description">
        The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
        <div className="one-third">
          <div className="stat">25<sup>S</sup></div>
          <div className="stat-value">Training</div>
        </div>

        <div className="one-third">
          <div className="stat">24</div>
          <div className="stat-value">Speed</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">300</div>
          <div className="stat-value">Cost</div>
        </div>

      </div>

    </div> 
  </div> 
  
  <div className="wrapper">
    <div className="clash-card giant">
      <div className="clash-card__image clash-card__image--giant">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png" alt="giant" />
      </div>
      <div className="clash-card__level clash-card__level--giant">Level 5</div>
      <div className="clash-card__unit-name">The Giant</div>
      <div className="clash-card__unit-description">
        Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you'll see their fury unleashed!
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--giant clearfix">
        <div className="one-third">
          <div className="stat">2<sup>M</sup></div>
          <div className="stat-value">Training</div>
        </div>

        <div className="one-third">
          <div className="stat">12</div>
          <div className="stat-value">Speed</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">2250</div>
          <div className="stat-value">Cost</div>
        </div>

      </div>

    </div> 
  </div> 
  
   <div className="wrapper">
    <div className="clash-card goblin">
      <div className="clash-card__image clash-card__image--goblin">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png" alt="goblin" />
      </div>
      <div className="clash-card__level clash-card__level--goblin">Level 5</div>
      <div className="clash-card__unit-name">The Goblin</div>
      <div className="clash-card__unit-description">
        These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
        <div className="one-third">
          <div className="stat">30<sup>S</sup></div>
          <div className="stat-value">Training</div>
        </div>

        <div className="one-third">
          <div className="stat">32</div>
          <div className="stat-value">Speed</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">100</div>
          <div className="stat-value">Cost</div>
        </div>

      </div>

    </div> 
  </div> 
  
  <div className="wrapper">
    <div className="clash-card wizard">
      <div className="clash-card__image clash-card__image--wizard">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png" alt="wizard" />
      </div>
      <div className="clash-card__level clash-card__level--wizard">Level 6</div>
      <div className="clash-card__unit-name">The Wizard</div>
      <div className="clash-card__unit-description">
        The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--wizard clearfix">
        <div className="one-third">
          <div className="stat">5<sup>M</sup></div>
          <div className="stat-value">Training</div>
        </div>

        <div className="one-third">
          <div className="stat">16</div>
          <div className="stat-value">Speed</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">4000</div>
          <div className="stat-value">Cost</div>
        </div>

      </div>

    </div> 
  </div> 
  
  </Carousel>
    {/* </HScrollGrid>   */}
   </div> 
   
   </div>
  );
};

export default Books;








