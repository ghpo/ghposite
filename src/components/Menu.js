import '../css/Menu.css'

import React from 'react'

function Menu() {
  return (
    
    <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Home</a></li>
			<li><a class="menu__item" href="#">About</a></li>
			<li><a class="menu__item" href="#">Team</a></li>
			<li><a class="menu__item" href="#">Contact</a></li>
			<li><a class="menu__item" href="#">Instagram</a></li>
    </ul>
  </div>

  )
}

export default Menu