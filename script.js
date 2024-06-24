let toggle = false;

        document.getElementById("moveButton").addEventListener("click", function() {
            const movableDiv = document.getElementById("floating-card");
            if (toggle) {
                // Set to initial position
                // movableDiv.style.top = "50px";
                movableDiv.style.left = "-300px";
            } else {
                // Set to new position
                // movableDiv.style.top = "200px";
                movableDiv.style.left = "0px";
            }
            // Toggle the state
            toggle = !toggle;
        });




$(document).ready(function(){
    $.getJSON("coupon.json",function(data){
        console.log(data);


    $('.parent .part2 h1').html(data.tasks[0].task_title);
    $('.parent .part2 p').html(data.tasks[0].task_description);
    $('.parent .part1 p').html(data.title);


    $('.parent .grid #card1 .head h1').html(data.tasks[0].assets[0].asset_title);
    $('.parent .grid #card2 .head h1').html(data.tasks[0].assets[1].asset_title);
    $('.parent .grid #card3 .head h1').html(data.tasks[0].assets[2].asset_title);
    $('.parent .grid #card4 .head h1').html(data.tasks[0].assets[3].asset_title);

    $('.parent .grid #card1 p').html(data.tasks[0].assets[0].asset_description);
    $('.parent .grid #card2 p').html(data.tasks[0].assets[1].asset_description);
    $('.parent .grid #card3 p').html(data.tasks[0].assets[2].asset_description);
    $('.parent .grid #card4 p').html(data.tasks[0].assets[3].asset_description);
    
    })
    .fail(function(){
        console.log("Check your code");
    })
})