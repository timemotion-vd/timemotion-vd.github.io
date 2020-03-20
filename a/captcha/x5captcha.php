<?php
include("../res/x5engine.php");
$nameList = array("pxg","pln","3zv","6ch","ygh","4hl","nh4","2e5","yc4","ygx");
$charList = array("U","8","L","G","A","8","5","8","J","6");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
