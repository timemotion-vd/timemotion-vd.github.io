<?php
include("../res/x5engine.php");
$nameList = array("vf5","vud","aze","ggc","jgx","tzd","4fg","nky","x6n","ug3");
$charList = array("G","H","K","D","J","U","A","F","L","2");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
