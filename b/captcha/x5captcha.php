<?php
include("../res/x5engine.php");
$nameList = array("trx","45u","3yy","ned","mug","4vw","m4t","d5n","klp","ssh");
$charList = array("5","5","L","W","7","3","A","Z","6","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
