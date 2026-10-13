// HTML document가 준비되면 안의 기능을 실행해라
$(document).ready(function () {
  console.log("js load complete");

  // ---------------------------------------------
  // 01. .css 메서드
  // class명이 box-css로 할당된 요소들의 css 속성을 적용해라.
  // ---------------------------------------------
  $(".box-css").css("width", "200px");
  $(".box-css").css("height", "200px");
  $(".box-css").css("background-color", "blue");
  $(".box-css").css("border-radius", "16px");
  $(".box-css").css("text-align", "center");
  $(".box-css").css("line-height", "200px");
  $(".box-css").css("color", "white");

  // ---------------------------------------------
  // 02. 클릭 이벤트 + toggleClass
  // ---------------------------------------------
  $(".button").on("click", function () {
    console.log("클릭!");
    // $(".button").addClass("active");
    $(".button").toggleClass("active");
  });

  // ---------------------------------------------
  // 03. click / mouseenter / mouseleave
  // ---------------------------------------------
  // 클릭 이벤트
  $(".box-btn").on("click", function () {
    $(".box-hover").css("background-color", "yellow");
    $(".box-hover").css("color", "black");
  });

  // 마우스 커서가 영역에 들어왔을 때 (hover)
  $(".box-hover").on("mouseenter", function () {
    $(".box-hover").css("border-radius", "24px");
  });
  // 마우스 커서가 영역을 벗어났을 때
  $(".box-hover").on("mouseleave", function () {
    $(".box-hover").css("border-radius", "8px");
  });

  // ---------------------------------------------
  // 04. 고양이 입 뻐끔 이미지 바꾸기
  // attr는 html의 속성을 바꿀 때, css는 스타일 속성을 바꿀 때 사용합니다.
  // ---------------------------------------------
  $(".cat_img").on("mouseenter", function () {
    $(".cat_img").attr("src", "assets/cat_mouseopen.svg");
    $(".cat_img").css("width", "400px");
  });
  $(".cat_img").on("mouseleave", function () {
    $(".cat_img").attr("src", "assets/cat_mouseclose.svg");
    $(".cat_img").css("width", "200px");
  });

  // ---------------------------------------------
  // 05. 변수 + if / else
  // button_clicked 그릇에 일단 false를 담아둔다
  // ---------------------------------------------
  let button_clicked = false;
  $(".button-1").on("click", function () {
    if (button_clicked == false) {
      $(".box-1").addClass("clicked");
      button_clicked = true;
    } else {
      $(".box-1").removeClass("clicked");
      button_clicked = false;
    }
  });

  // ---------------------------------------------
  // 06. 변수 + if / else if
  // 클릭할 때마다 button_status 값이 0 → 1 → 2 → 0
  // ---------------------------------------------
  let button_status = 0;
  $(".button-2").on("click", function () {
    if (button_status == 0) {
      $(".box-2").css("width", "500px");
      button_status = 1;
    } else if (button_status == 1) {
      $(".box-2").css("height", "500px");
      button_status = 2;
    } else if (button_status == 2) {
      $(".box-2").css("width", "200px");
      $(".box-2").css("height", "200px");
      button_status = 0;
    }
    // 현재 그릇에 담긴 값을 화면에 표시
    $(".status").text(button_status);
    console.log("button_status : " + button_status);
  });

  // ---------------------------------------------
  // 07. 다중 class : chip 클릭 시 active 토글
  // $(this)는 지금 클릭된 그 요소 하나만 가리킵니다.
  // ---------------------------------------------
  $(".chip").on("click", function () {
    $(this).toggleClass("active");
  });
});
