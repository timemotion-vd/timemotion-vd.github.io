<?php
include("../res/x5engine.php");
$nameList = array("mmt","zz6","lup","rsk","v5u","xyw","5sa","jjh","8v5","55z");
$charList = array("S","C","T","8","7","G","W","3","L","7");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
