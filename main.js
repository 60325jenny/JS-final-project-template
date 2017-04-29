// 創造 img HTML 元素，並放入變數中
var bgImg = document.createElement("img");

// 設定這個元素的要顯示的圖片
bgImg.src = "images/map.png";

// 找出網頁中的 canvas 元素
var canvas = document.getElementById("game-canvas");

// 取得 2D繪圖用的物件
var ctx = canvas.getContext("2d");


