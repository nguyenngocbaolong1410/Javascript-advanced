  /* Display Block,none của Menu */
$(document).ready(function(){
  $("#slideUp").click(function(){
    if(document.getElementById("BlockMeII").style.display == "block"){
      document.getElementById("BlockMeII").style.display = "none";
      document.getElementById("BlockMe").style.display = "block";
    }if(document.getElementById("BlockMeIII").style.display == "block"){
      document.getElementById("BlockMeIII").style.display = "none";
      document.getElementById("BlockMe").style.display = "block";
    }else{
      document.getElementById("BlockMe").style.display = "block";
    }
  });
  $(".slideUpII").click(function(){
    document.getElementById("BlockMe").style.display = "none";
  });

  $("#slideUpContact").click(function(){
    if(document.getElementById("BlockMe").style.display == "block"){
      document.getElementById("BlockMe").style.display = "none";
      document.getElementById("BlockMeII").style.display = "block";
    }if(document.getElementById("BlockMeIII").style.display == "block"){
      document.getElementById("BlockMeIII").style.display = "none";
      document.getElementById("BlockMeII").style.display = "block";
    }else{
      document.getElementById("BlockMeII").style.display = "block";
    }
  });
  $(".slideUpContactII").click(function(){
    document.getElementById("BlockMeII").style.display = "none";
  });

  $("#slideUpProduct").click(function(){
    if(document.getElementById("BlockMe").style.display == "block"){
      document.getElementById("BlockMe").style.display = "none";
      document.getElementById("BlockMeIII").style.display = "block";
    }if(document.getElementById("BlockMeII").style.display == "block"){
      document.getElementById("BlockMeII").style.display = "none";
      document.getElementById("BlockMeIII").style.display = "block";
    }else{
      document.getElementById("BlockMeIII").style.display = "block";
    }
  });
  $(".slideUpProductII").click(function(){
    document.getElementById("BlockMeIII").style.display = "none";
  });

  /* Slidetoggle */
  $(".Accountreg").click(function(){
    $("#silde-toogg").slideToggle();
  });
  $(".box-cart-items").click(function(){
    $("#silde-mycart").slideToggle();
  });

  /* Support Login */
  $("#log-glow").focus(function(){
    $("#log-glow").val("").addClass('colorinputcontact');
  });
  $("#log-glow2").focus(function(){
    $("#log-glow2").val("").addClass('colorinputcontact');
  });
  /* Support Register */
  $(".log-glow3").focus(function(){
    $(".log-glow3").val("").addClass('colorinputcontact');
  });
  $(".log-glow4").focus(function(){
    $(".log-glow4").val("").addClass('colorinputcontact');
  });
  $(".log-glow5").focus(function(){
    $(".log-glow5").val("").addClass('colorinputcontact');
  });
  
  /* TEXT */
  $("#cleartext1").focus(function(){
    $("#cleartext1").val("").addClass('colorinputcontact');
  });
  $("#cleartext2").focus(function(){
    $("#cleartext2").val("").addClass('colorinputcontact');
  });
  $("#cleartext3").focus(function(){
    $("#cleartext3").val("").addClass('colorinputcontact');
  });
  $("#cleartext4").focus(function(){
    $("#cleartext4").val("").addClass('colorinputcontact');
  });
  $("#cleartext1").blur(function(){
    if($("#cleartext1").val()==""){
      $("#cleartext1").val("Please enter Your Name").addClass('warncolorinputcontact');
    }else{
      $("#cleartext1").removeClass('warncolorinputcontact');
    }
  });
  $("#cleartext2").blur(function(){
    if($("#cleartext2").val()==""){
      $("#cleartext2").val("Please enter Your Email").addClass('warncolorinputcontact');
    }else{
      $("#cleartext2").removeClass('warncolorinputcontact');
    }
  });
  $("#cleartext3").blur(function(){
    if($("#cleartext3").val()==""){
      $("#cleartext3").val("Please enter Your Subject").addClass('warncolorinputcontact');
    }else{
      $("#cleartext3").removeClass('warncolorinputcontact');
    }
  });
  $("#cleartext4").blur(function(){
    if($("#cleartext4").val()==""){
      $("#cleartext4").val("Please enter Your Message").addClass('warncolorinputcontact');
    }else{
      $("#cleartext4").removeClass('warncolorinputcontact');
    }
  });

});

  /* scrollTop */
  function scrollTopAnimated() { 
      $("html, body").animate( 
          { scrollTop: "1003" }, 1000); 
  }
  function scrollTopAnimatedContact() { 
    if (document.getElementById("BlockMe").style.display == "block") {
      $("html, body").animate( 
        { scrollTop: "1003" }, 1000); 
    }else{
      $("html, body").animate( 
        { scrollTop: "1003" }, 1000);
    }
  }
  function scrollTopAnimatedProduct(){
    if (document.getElementById("BlockMe").style.display == "block") {
      $("html, body").animate( 
        { scrollTop: "1003" }, 1000); 
    }else{
      $("html, body").animate( 
        { scrollTop: "1003" }, 1000);
    }
  }
  /* Back scrollTop */

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  function scrollTopOP() { 
    $("html, body").animate( 
        { scrollTop: "0" }, 500); 
  }

  function scrollTopAnimatedII(){
    if(document.getElementById("BlockMeIII").style.display == "block"){
      $("html, body").animate( 
        { scrollTop: "1003" }, 1);
      document.getElementById("BlockMeIII").style.display = "none";
      document.getElementById("BlockMe").style.display = "block";
    }else{
      $("html, body").animate( 
        { scrollTop: "1003" }, 1);
      document.getElementById("BlockMe").style.display = "block";
    }
  }
  function scrollTopAnimatedContactII(){
    if(document.getElementById("BlockMeIII").style.display == "block"){
      $("html, body").animate( 
        { scrollTop: "1003" }, 1);
      document.getElementById("BlockMeIII").style.display = "none";
      document.getElementById("BlockMeII").style.display = "block";
    }else{
      $("html, body").animate( 
        { scrollTop: "1003" }, 1);
      document.getElementById("BlockMeII").style.display = "block";
    }
  }
  function scrollTopAnimatedProductII(){
    if(document.getElementById("BlockMe").style.display == "block"){
      $("html, body").animate( 
        { scrollTop: "1003" }, 1);
      document.getElementById("BlockMe").style.display = "none"
      document.getElementById("BlockMeIII").style.display = "block";
    }if(document.getElementById("BlockMeII").style.display == "block"){
      $("html, body").animate( 
        { scrollTop: "1003" }, 1);
      document.getElementById("BlockMeII").style.display = "none";
      document.getElementById("BlockMeIII").style.display = "block";
    }else{
      $("html, body").animate( 
        { scrollTop: "1003" }, 1);
      document.getElementById("BlockMeIII").style.display = "block";
    }
  }
  /* Slidetoggle ScollTop Account */
  function scrollTopAnimatedAccount(){
    $("html, body").animate( 
      { scrollTop: "0" });
  }

/* Tabs */
$( function() {
  $( "#tabs" ).tabs();
} );

/* Đăng Kí */
$( function() {
  var dialog, form,
    // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $( "#name" ),
    email = $( "#email" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( email ).add( password ),
    tips = $( ".validateTips" );

  function updateTips( t ) {
    tips
      .text( t )
      .addClass( "ui-state-highlight" );
    setTimeout(function() {
      tips.removeClass( "ui-state-highlight", 1500 );
    }, 500 );
  }

  function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      o.addClass( "ui-state-error" );
      updateTips( "Length of " + n + " must be between " +
        min + " and " + max + "." );
      return false;
    } else {
      return true;
    }
  }
  function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
      o.addClass( "ui-state-error" );
      updateTips( n );
      return false;
    } else {
      return true;
    }
  }

  function addUser() {
    var valid = true;
    allFields.removeClass( "ui-state-error" );

    valid = valid && checkLength( name, "username", 3, 16 );
    valid = valid && checkLength( email, "email", 6, 80 );
    valid = valid && checkLength( password, "password", 5, 16 );

    valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
    valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
    valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

    if ( valid ) {
      $( "#users tbody" ).append( "<tr>" +
        "<td>" + name.val() + "</td>" +
        "<td>" + email.val() + "</td>" +
        "<td>" + password.val() + "</td>" +
      "</tr>" );
      dialog.dialog( "close" );
    }
    return valid;
  }

  dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Create an account": addUser,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
      allFields.removeClass( "ui-state-error" );
    }
  });

  form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    addUser();
  });

  $( "#create-user" ).button().on( "click", function() {
    dialog.dialog( "open" );
  });
} );

/* Ngày tháng */
$( function() {
  $( "#datepicker" ).datepicker();
} );

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
  function delcountsp(){
    $("#countsp").children("p").text(mycart.length) - 1;
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
    delcountsp();
  });
});
/* Phân trang theo số AJAX */
$(document).ready(function(){

  $(".slidetrang").on("click", ".box-slide-trang", function () {
    $(this).siblings().removeClass("slide-trang-colorII");
    $(this).addClass("slide-trang-colorII");
    var cout = $(this).text();
    $.post("product.php", {

      },
      function (data, textStatus, jqXHR) {
        $("#box-product-Show").html(data);
      },
    );
  });

});
/* LoGIN AJAX TT */
$(function () {
  $("#LoginAcces").click(function(e) { 
    e.preventDefault();
    var u = $("#log-glow").val();
    var p = $("#log-glow2").val();

    $.post("login2.php", {
      user: u,
      pass: p
    },
      function (data, textStatus, jqXHR) {
        $("#LoginNow").html(data);
      }
    );
  });
});

/* PINGS */
$(document).ready(function(){
  $(".addcartZolo").click(function(){
    $("#countsp").children("p").addClass("pingme");
    $("#countsp").addClass("pingmeBox");
    $("#pingnewpros").show().addClass("pingnewpros");
    document.getElementById("myP2").style.color = "#FFFFFF";
  });
  $(".box-cart-items").click(function(){ 
    $("#countsp").children("p").removeClass("pingme");
    $("#countsp").removeClass("pingmeBox");
    $("#pingnewpros").hide();
    document.getElementById("myP2").style.color = "#757575";
  });
});
/* SlideShow */
