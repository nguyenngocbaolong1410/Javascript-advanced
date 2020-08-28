/* Thêm sản phẩm vào giỏ hàng */
var mycart = new Array();
$(document).ready(function(){
  $("#box-product-list").on("click", ".buyitproduct", function(){
    var sp = $(this).parent();
    var tensp = sp.children("h3").text();
    var giasp = sp.children("p").children("span").text();
    var soluong = 1;
    for (let i = 0; i < mycart.length; i++) {
      if (mycart[i][0]==tensp) {
        soluong=mycart[i][2] + 1;
        mycart[i][2] = soluong;
        break;
      }
    }
    if (soluong==1) {
      var item = new Array(tensp, giasp, soluong);
      mycart.push(item);
    }
    countsp();
    showcart();
  });
 /* cộng Dồn sản phẩm */
  function countsp(){
    $("#countsp").children("p").text(mycart.length);
  }
 /* Xuất Thông tin vào Giỏ hàng */
  function showcart(){
    var kq = "";
    var total = 0;
    for (let i = 0; i < mycart.length; i++) {
      total += mycart[i][1] * mycart[i][2];
      kq += "<tr><td>"+ mycart[i][0] +"</td>" +
            "<td>"+ mycart[i][2] +"</td>" +
            "<td>"+ mycart[i][1] +"</td>" +
            "<td><img src='images/delete.png' class='delcart' alt=''></td></tr>";
    }
    $("#Cartcart").html(kq);
    $("#total").children("span").text(total);
  }
 /* Xóa Sản phẩm + Số tiền */
  $("#Cartcart").on("click", ".delcart", function(){
    $(this).parent().parent().remove();
    var tensp = $(this).parent().parent().children("td").eq(0).text();
    for (let i = 0; i < mycart.length; i++) {
      if(mycart[i][0] == tensp){
        mycart.splice(i, 1);
      break;
      }
    }
    showcart();
  });
});