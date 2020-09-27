<?php
include("../res/x5engine.php");
$nameList = array("hys","sw3","w8j","mrx","hp4","azm","pt3","p3z","tur","dh8");
$charList = array("N","C","H","E","F","X","N","3","W","E");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
