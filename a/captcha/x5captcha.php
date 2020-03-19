<?php
include("../res/x5engine.php");
$nameList = array("7th","t66","xd6","z45","ehp","7gl","jcf","dtr","epj","476");
$charList = array("F","3","2","E","H","H","6","D","Z","D");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
