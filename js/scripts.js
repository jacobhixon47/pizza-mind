// Business Logic

function Pizza(size, price) {
  this.toppings = [];
  this.size = size;
  this.price = price;
};

Pizza.prototype.cost = function() {
  return "$" + this.price;
};

// User Interface Logic //
$(document).ready(function() {
  $("#nav-list").fadeIn(1500);
  $(".row").fadeIn(1500);
  $(".order-button").click(function(event) {
    event.preventDefault();

    $(".row").slideUp(500, function() {
      $("#order-row").slideDown();
    });
  });

  $(".quench-button").click(function() {
    $('html, body').animate( {
      scrollTop: ($('#row-2').offset().top)
    },1000);
  });

  $(".wings-button").click(function() {
    $('html, body').animate( {
      scrollTop: ($('#row-3').offset().top)
    },1000);
  });

  $("#order-form").submit(function(event) {
    event.preventDefault();

    pizzaCost = 0;
    $(".wings-div").empty();
    var newPizza = new Pizza("", 0);

    if ($("option[value='small']").is(":selected") === true) {
      newPizza.size = "Small";
      pizzaCost += 7;
    }
    else if ($("option[value='medium']").is(":selected") === true) {
      newPizza.size = "Medium";
      pizzaCost += 14;
    }
    else if ($("option[value='large']").is(":selected") === true) {
      newPizza.size = "Large";
      pizzaCost += 21;
    }
    if ($("input[value='Wings']").is(":checked") === true) {
      $(".wings-div").append("<h2>" + "Wings:" + "</h2><br><h4>" + "10pc Boneless Wings" + "</h4>")
    }
    $("input[name='1']:checked").each(function() {
      newPizza.toppings.push($(this).val());
      pizzaCost += 1;
    });
    newPizza.price = pizzaCost;
    $("span#size").empty();
    $("span#size").append(newPizza.size);
    $("span#toppings").empty();
    newPizza.toppings.forEach(function(topping) {
      $("span#toppings").append(topping + "<br>")
    });
    $("span#total").empty();
    $("span#total").append(newPizza.cost());

    $("#order-row").slideUp();
    $("#confirmation-row").slideDown();
  });
});
