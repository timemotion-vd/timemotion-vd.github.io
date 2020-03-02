<?php
include("../res/x5engine.php");
$nameList = array("xl4","vyp","vfr","lvm","y74","fu7","mj5","c52","mrw","ldc");
$charList = array("V","W","8","V","A","A","5","V","F","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
