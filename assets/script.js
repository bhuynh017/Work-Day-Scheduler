var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    }
    )


function trackTime() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var stopTime = parseInt($(this).attr("id").split("hour")[1]);

        if (stopTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
                }
        else if (stopTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

$("#eight.description").val(localStorage.getItem("eight"));
$("#nine.description").val(localStorage.getItem("nine"));
$("#ten.description").val(localStorage.getItem("ten"));
$("#eleven.description").val(localStorage.getItem("eleven"));
$("#twelve.description").val(localStorage.getItem("twelve"));
$("#one.description").val(localStorage.getItem("one"));
$("#two.description").val(localStorage.getItem("two"));
$("#three.description").val(localStorage.getItem("three"));
$("#four.description").val(localStorage.getItem("four"));
$("#five.description").val(localStorage.getItem("five"));

trackTime();

})