<?php
include("../res/x5engine.php");
$nameList = array("vk6","2mk","ltm","sja","tkw","c8w","up7","32x","6gc","wpg");
$charList = array("C","T","8","K","Z","V","D","2","J","H");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
