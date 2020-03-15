<?php
include("../res/x5engine.php");
$nameList = array("6c8","y26","p5y","r8n","2aa","h6e","2mt","56c","rse","43t");
$charList = array("8","J","7","W","M","C","G","S","2","Z");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
