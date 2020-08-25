function TicketStub(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = this.calcPrice;
};

TicketStub.prototype.calcPrice = function() {
  let basePrice = 12;
  if(this.movie === "adultMovie") {
    basePrice += 2;
  } else if(this.movie === "childMovie") {
    basePrice -= 1;
  } else if(this.movie === "oldMovie") {
    basePrice -= 1;
  }
  if (this.time === "morningTime") {
    basePrice -= 1;
  } else if(this.time === "afternoonTime") {
    basePrice += 0;
  } else if(this.time === "eveningTime") {
    basePrice += 5;
  } 
  if (this.age === "movieAdult") {
    basePrice *= 10;
  } else if(this.age === "movieJunior") {
    basePrice *= 10;
  }else if(this.age === "movieDiscount") {
    basePrice *= 10;
  }
  console.log(basePrice)
  // return basePrice
}

$(document).ready(function() {
  $("#movieForm").submit(function(event) {
    event.preventDefault();

    const inputMovie = $("#movieGenre").val();
    const inputTime = $("#movieTime").val();
    const inputAge = $("#movieCategory").val();
    // console.log(inputMovie, inputTime, inputAge);
    $(".cardResult").text(inputMovie, inputTime, inputAge);
  });
});