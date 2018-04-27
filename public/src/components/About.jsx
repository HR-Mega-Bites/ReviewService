import React from 'react';

const About = (props) => (
  <div className="about">
    <h3 className='blueApron'>About Blue Apron</h3>
    <div className="aboutTexts">
      <img className="aboutImg" src="https://media.blueapron.com/assets/recipe-proto/ba-hero-e3e53456f4e7c275194e637656f22e5ab19e469194c2712fc7c1fc5164566fd9.jpg" alt="Ba Hero"></img>
    </div>
    <p>
      Blue Apron delivers original, step-by-step recipes and fresh ingredients to customers nationwide. Our menus change every week,
      so with each delivery you learn to cook inventive new dishes with seasonal ingredients. By letting us source these hard-to-find
      ingredients for you, you'll get food that is fresher and cheaper than you can get at your local supermarket, and there's no waste
      because we only send you what you need for each recipe.
    </p>
    <p>
      We named our company “Blue Apron” because chefs around the world wear blue aprons when they're learning to cook, and it has
      become a symbol of lifelong learning in cooking. We believe you're never done learning in the kitchen, so we design our menus
      to ensure you're always learning new cooking techniques, trying new cuisines, and using unique ingredients.
    </p>
    <p className='guest-only'>
      Blue Apron is a weekly subscription service with no commitment - you can skip a week or cancel at any time with a week's notice.
      We can't wait to cook with you!
    </p>
  </div>
)

export default About; 

