<?php
include("../res/x5engine.php");
$nameList = array("as7","2x5","rge","6zd","2wg","wvc","wgm","4sw","cyx","nfz");
$charList = array("S","M","D","K","6","4","3","N","U","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
