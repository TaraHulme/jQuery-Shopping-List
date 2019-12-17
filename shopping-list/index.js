//enter items by entering text and hitting return or clicking the "add item" button
$ (function() {
    $("#js-shopping-list-form").submit(e => {
    e.preventDefault();
    const newItem =
    $("#shopping-list-entry").val();
    $("#shopping-list-entry").val(" ");
    $(".shopping-list").append($(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  <li>`).append(newItem));
});

})


// $("shoppping-list").css("color", "red");





//check and uncheck items by clicking the check button

//permanently remove items from the list

//Hint: you may find it helpful to read up on 
//and use the following jQuery methods: .
//submit(), preventDefault(), toggleClass(), and closest().



$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
  $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
  $(this).closest("li").remove();
});