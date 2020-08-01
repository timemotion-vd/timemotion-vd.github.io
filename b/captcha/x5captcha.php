<?php
include("../res/x5engine.php");
$nameList = array("gnu","try","55c","mdp","wln","smw","ggs","lua","lva","7aj");
$charList = array("S","V","L","P","C","M","7","6","X","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
