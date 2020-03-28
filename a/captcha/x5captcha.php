<?php
include("../res/x5engine.php");
$nameList = array("krv","zk4","tcx","ajt","kwx","m8r","s4l","5rw","c4k","w8r");
$charList = array("Z","7","M","R","E","7","A","D","X","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
