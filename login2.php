<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
.loginfail p{
    font-family:tex;
    font-size: 16pt;
    color: rgb(202, 92, 80);
    padding: 30px;
    font-weight: bold;
    transition: 0.3s;
}
.loginfail p:hover {
    color: rgb(255, 238, 142);
}
.accountlogin:hover p{
    color: rgb(157, 219, 255);
}
.accountlogin:hover span{
    color:  rgb(247, 56, 97);
}
.accountlogin p{
    font-family:tex;
    color: rgb(255, 195, 56);
    padding: 5px;
    font-weight: bold;
    transition: 0.3s;
    padding-left: 20px;
}
.accountlogin p span{
    color: rgb(202, 92, 80);
    padding-left: 20px;
    padding-right: 20px;
}
.Loginsa{
    padding-left: 0px !important;
    padding-right: 0px !important;
}
</style>
<body>
    
<?php

    $user=$_POST['user'];
    $pass=$_POST['pass'];

    if (($user=="1")&&($pass=="1")){
        echo "
        <a href='#' class='accountlogin'><p>Your Account: <span>".$user."</span></p></a>
        <a href='#' class='accountlogin'><p>My cart: <span>???</span>Check It?</p></a>
        <a href='' class='accountlogin'><p><span class= 'Loginsa'>Log Out</span></p></a>
        ";
    }else{
        echo "<a href='' class='loginfail'><p>Wrong password please click me to enter it again</p></a>";
    }
?>

</body>
</html>