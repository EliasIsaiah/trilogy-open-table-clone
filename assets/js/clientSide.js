console.log("successfully reached handlePost");

$("#reserveForm").submit(function() {
    event.preventDefault();
    let reserveData = $("#reserveForm").val().trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    let reservation = {
        customerName: $("#reserve-name").val().trim(),
        customerPhone: $("#reserve-phone").val().trim(),
        customerEmail: $("#reserve-email").val().trim(),
        customerID: $("#reserve-unique-id").val().trim(),
    }
    $.post("/api/reserve/", reservation, function(data) {

        console.log(data);
        checkSpace(data);
    });

});

const checkSpace = (where) => {
    switch (where) {
        case "reservation":
            console.log(where);
            $("div.modalBody").text("You made a Reservation, good job piggy");
            break;
        default:
            console.log(where);
            $("div.modalBody").text("No room for a Reservation. Check back later");
            break;
    }
}