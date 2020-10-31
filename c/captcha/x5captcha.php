<?php
include("../res/x5engine.php");
$nameList = array("2j2","yjh","vch","8rg","n2s","dnk","766","33d","2tv","hkg");
$charList = array("6","J","E","Z","2","U","N","W","M","6");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
