<?php
include("../res/x5engine.php");
$nameList = array("2sy","gkn","h5k","65k","2k8","cak","5pw","3ng","a76","kh5");
$charList = array("2","3","H","N","T","N","5","Y","3","W");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
