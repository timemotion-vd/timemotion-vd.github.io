<?php
include("../res/x5engine.php");
$nameList = array("w8h","z4h","kpy","ntn","att","5l2","lnt","8uw","7ua","5rw");
$charList = array("6","D","8","4","V","R","H","R","8","G");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
