<?php
include("../res/x5engine.php");
$nameList = array("wvm","l7g","fzh","zpd","skj","vf7","arf","8tl","ath","t35");
$charList = array("J","Y","W","3","4","D","J","3","K","Z");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
