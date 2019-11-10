$(() => {

  $('.burgers').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.burgers .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container">
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Hamburger <span>$3.99</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Cheeseburger <span>$4.29</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Double Burger <span>$5.69</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Double Cheeseburger <span>$5.99</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Triple Burger <span>$7.99</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Triple Cheeseburger <span>$8.59</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Bacon Cheeseburger <span>$4.89</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Chili Cheeseburger <span>$4.79</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Egg Burger <span>$4.99</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Egg Cheeseburger <span>$5.29</span></div>
          <img class="card-img-top" src="img/hamburger.jpg" alt="Hamburger">
        </div>
      </div>
    `);
  })

  $('.sandwiches').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.sandwiches .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container">
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">BLT Sandwich <span>$3.19</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Egg & ChSpecialseese Sandwich <span>$2.99</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Double Egg & Cheese Sandwich <span>$3.89</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Grilled Cheese <span>$2.29</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Steak Sandwhich <span>$5.29</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Pork Sandwich <span>$4.99</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Chicken Sandwich <span>$4.29</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Tuna Sandwich <span>$3.09</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Pizza Burger <span>$4.29</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Fried Blogna Sandwich <span>$3.29</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Philly Cheesesteak Sandwich <span>$6.99</span></div>
          <img class="card-img-top" src="img/sandwich.jpg" alt="Sandwich">
        </div>
      </div>
    `);
  })

  $('.dinner-meals').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.dinner-meals .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container">
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">2 Piece - Chicken Strips <span>$4.99</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">3 Piece - Chicken Strips <span>$6.29</span></span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">4 Piece - Chicken Strips <span>$7.49</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">5 Piece - Chicken Strips <span>$8.99</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">2 Piece - Chicken Strips Salad <span>$5.69</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">3 Piece - Chicken Strips Salad <span>$6.99</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">2 Piece - Fish Fillets <span>$5.99</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">3 Piece - Fish Fillets <span>$7.99</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">21 Piece Shrimp Dinner <span>$6.99</span></div>
          <img class="card-img-top" src="img/dinner-meals.jpg" alt="dinner-meals">
        </div>
      </div>
    `);
  })

  $('.kids-meals').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.kids-meals .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container"> 
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Entree - Corn Dog</div>
          <img class="card-img-top" src="img/kids-meals.jpg" alt="kids-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Entree - Hot Dog</div>
          <img class="card-img-top" src="img/kids-meals.jpg" alt="kids-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Entree - Grilled Cheese</div>
          <img class="card-img-top" src="img/kids-meals.jpg" alt="kids-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Entree - Nuggets</div>
          <img class="card-img-top" src="img/kids-meals.jpg" alt="kids-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Side - French Fries</div>
          <img class="card-img-top" src="img/kids-meals.jpg" alt="kids-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Side - Tater Tots</div>
          <img class="card-img-top" src="img/kids-meals.jpg" alt="kids-meals">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Drink - Fountain (Pepsi Products) or Milk</div>
          <img class="card-img-top" src="img/kids-meals.jpg" alt="kids-meals">
        </div>
      </div>
    `)
  })

  $('.soup').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.soup .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container"> 
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Dine In - mdall <span>$2.99</span></div>
          <img class="card-img-top" src="img/soup.jpg" alt="soup">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Dine In - Medium <span>$3.69</span></div>
          <img class="card-img-top" src="img/soup.jpg" alt="soup">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Dine In - Large <span>$3.99</span></div>
          <img class="card-img-top" src="img/soup.jpg" alt="soup">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">To Go - Single <span>$3.49</span></div>
          <img class="card-img-top" src="img/soup.jpg" alt="soup">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">To Go - Quart <span>$8.99</span></div>
          <img class="card-img-top" src="img/soup.jpg" alt="soup">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Frito Chili Pie <span>$4.29</span></div>
          <img class="card-img-top" src="img/soup.jpg" alt="soup">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Cinnamon Roll <span>$1.99</span></div>
          <img class="card-img-top" src="img/soup.jpg" alt="soup">
        </div>
      </div>
    `)
  })

  $('.side-orders').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.side-orders .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container"> 
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">French Fries <span>$1.79</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Tater Tots <span>$1.79</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Onion Rings <span>$2.39</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Coleslaw <span>$1.29</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Side Salad <span>$2.49</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">3 Piece - Fried Pickle Spears <span>$2.99</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">5 Piece - Fried Pickle Spears <span>$4.89</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">3 Piece - Mozzarella Sticks <span>$3.39</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">5 Piece - Mozzarella Sticks <span>$5.39</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Corn Nuggets <span>$3.99</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">5 Piece - Chicken Nuggets <span>$1.99</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Hot Dog <span>$2.49</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Corn Dog <span>$1.69</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Chili Dog <span>$2.99</span></div>
          <img class="card-img-top" src="img/side-orders.jpg" alt="side-orders">
        </div>
      </div>
    `)
  })


  $('.additions').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.additions .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container"> 
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Lettuce <span>$0.30</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Tomato <span>$0.30</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Bacon <span>$0.60</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Egg <span>$1.00</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Chili <span>$0.50</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">BBQ <span>$0.50</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Jalapenos <span>$0.50</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Mushrooms <span>$0.50</span></div>
          <img class="card-img-top" src="img/additions.jpg" alt="additions">
        </div>
      </div>
    `)
  })

  $('.drinks').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.drinks .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container"> 
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Dr. Pepper</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Diet Dr. Pepper</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Mug Root Beer</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Sierra Mist</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Mountain Dew</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Lemonade</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Pepsi</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Diet Pepsi</div>
          <img class="card-img-top" src="img/drinks.jpg" alt="drinks">
        </div>
      </div>
    `)
  })

  $('.shakes').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.shakes .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container">
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Chocolate</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Vanilla</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Strawberry</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Banana</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Pineapple</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Peach</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">RootBeer</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>  
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Dr. Pepper</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Pepsi</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">PeanutButter</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Butterscotch</div>
          <img class="card-img-top" src="img/shakes.jpg" alt="shakes">
        </div>
      </div>
    `)
  })

  $('.desserts').on('click', e => {
    e.preventDefault()
    $('.nav-link').removeClass('active');
    $('.desserts .nav-link').addClass('active');

    $('.menu-container').html(`
      <div class="d-flex p-2 align-content-center flex-wrap card-container">
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Chocolate Meringue <span>$2.99</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Lemon Meringue Pie <span>$2.99</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Coconut Meringue Pie <span>$2.99</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Pumpkin Pie (w/ topping) <span>$2.99</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Ice Cream Dish <span>$1.29</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Ice Cream Cone <span>$1.29</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Ice Cream Sundae <span>$1.99</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>  
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center">Milkshakes <span>$2.99/5.89</span></div>
          <img class="card-img-top" src="img/desserts.jpg" alt="desserts">
        </div>
      </div>
    `)
  })
})