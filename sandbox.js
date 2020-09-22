const input = 'valar morghulis';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee');
      } else if (input[i] === 'u') {
        resultArray.push('uu');
      } else {
        resultArray.push(input[i]);
      };
    };
  };
};

console.log(resultArray.join('').toUpperCase());





const input = 'A whale of a deal';

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log('i is '+ i);
  
  for (let vowel = 0; vowel < vowels.length; vowel++) {
    // console.log('x is '+ x);
    if (input[inputIndex] === vowels[vowel]) {
      
      if (input[inputIndex] === 'e') {
        resultArray.push('ee');
      } 
      if (input[inputIndex] === 'u') {
        resultArray.push('uu');
    } 
    else {
       resultArray.push(input[inputIndex])
    }

  }
}
}
console.log(resultArray.join('').toUpperCase());

{/* <nav class="navbar navbar-expand-xl navbar-dark">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
  aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<a class="navbar-brand" href="#">
  <img src="images/shield2.png" width="100" height="90" alt="">
</a>

<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Shop</a>
      <div class="dropdown-menu" id="penis" role="menu" aria-labelledby="dLabel">
        <div class="container-fluid" id="menu-drop">
          <div class="row">


            <div class="col-lg-3">
              <div class="link-header">
                <a class="header-click" href="#">
                  <p class="dropdown-header">Bikes</p>
                </a>
              </div>
              <ul class="shop-categories">
                <li><a class="dropdown-item" href="#">Commuter/Urban</a></li>
                <li><a class="dropdown-item" href="#">Hybrid</a></li>
                <li><a class="dropdown-item" href="#">Mountain</a></li>
                <li><a class="dropdown-item" href="#">Childrens</a></li>
                <li><a class="dropdown-item" href="#">E-bikes</a></li>
                <li><a class="dropdown-item" href="#">Clearance</a></li>
              </ul>
            </div>
            <!-- <div class="col-lg-1"></div> -->
            <div class="col-lg-3">
              <div class="link-header">
                <p class="dropdown-header">Accessories</p>
              </div>
              <ul class="shop-categories">
                <li><a class="dropdown-item" href="#">Child carriers</a></li>
                <li><a class="dropdown-item" href="#">Safety</a></li>
                <li><a class="dropdown-item" href="#">Clothing</a></li>
                <li><a class="dropdown-item" href="#">Electronics</a></li>
                <li><a class="dropdown-item" href="#">Lights</a></li>
                <li><a class="dropdown-item" href="#">Locks/Security</a></li>
                <li><a class="dropdown-item" href="#">Pumps/Inflation</a></li>
                <li><a class="dropdown-item" href="#">Tools</a></li>
              </ul>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-3">
              <div class="link-header">
                <p class="dropdown-header">Parts and Components</p>
              </div>
              <ul class="shop-categories">
                <li><a class="dropdown-item" href="#">Tubes and Tires</a></li>
                <li><a class="dropdown-item" href="#">Seats and Sanddles</a></li>
                <li><a class="dropdown-item" href="#">Brakes</a></li>
                <li><a class="dropdown-item" href="#">Shifters</a></li>
                <li><a class="dropdown-item" href="#">Cables</a></li>
                <li><a class="dropdown-item" href="#">Suspension</a></li>
                <li><a class="dropdown-item" href="#">Other</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>



    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Repairs</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Classes</a>
    </li>
  </ul>
</div>
</nav> */}