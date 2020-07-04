<?php
include("../res/x5engine.php");
$nameList = array("ma3","4vt","mtl","ltx","vjm","c7c","m6r","a3d","3e4","c48");
$charList = array("M","U","X","G","E","N","H","T","C","Y");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
