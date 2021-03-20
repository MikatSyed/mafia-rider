import React from 'react';
import'./Header.css';

const Header = () => {
    return (
        
            
     <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mafia Rider</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="navLink">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Destination</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" >Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" >Contract</a>
      </li>
 <button class="btn btn-danger">Login</button>
    </ul>
   
  </div>
</nav>


     </div>

        
    );
};

export default Header;