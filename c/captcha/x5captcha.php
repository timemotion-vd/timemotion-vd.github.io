<?php
include("../res/x5engine.php");
$nameList = array("cnt","dve","gse","kv6","ntw","2uy","amx","arh","n5k","tr5");
$charList = array("4","3","V","H","H","M","J","4","H","N");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
