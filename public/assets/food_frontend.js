// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-this").on("click", function(event) {
        alert("I am being devoured!");
      var id = $(this).data("id");

      var nowDevoured = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/food/" + id, {
        type: "PUT",
        data: nowDevoured
      }).then(
        function() {
          alert("I bet it was yummy!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFood = {
        food_name: $("#ca").val().trim(),

      };
  
      // Send the POST request.
      $.ajax("/api/food", {
        type: "POST",
        data: newFood
      }).then(
        function() {
          alert("You have a new food on your list!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  