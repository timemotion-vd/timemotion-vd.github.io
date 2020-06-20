<?php
include("../res/x5engine.php");
$nameList = array("8nx","7ue","vnt","y3r","u3f","8tj","2e7","mkg","w55","32k");
$charList = array("3","3","H","V","8","J","4","K","7","F");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
