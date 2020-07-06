<?php
include("../res/x5engine.php");
$nameList = array("56t","ngm","f43","je8","yfe","lfv","yy6","65w","jeh","6sw");
$charList = array("L","2","J","E","M","Z","S","S","M","6");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
