"use strict";
$(function () {
  $("#open").on("click", function () {
    $("body").addClass("active");
  })
  $("#close").on("click", function () {
    $("body").removeClass("active");
  })
  $("#mask").on("click", function () {
    $("body").removeClass("active");
  })
});