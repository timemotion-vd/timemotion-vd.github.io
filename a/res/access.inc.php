<?php

// Users data
$imSettings['access']['users'] = array(
	'example@example.com' => array(
		'id' => '6ycc6l8h',
		'groups' => array('0l1ggk0h'),
		'email' => 'example@example.com',
		'firstname' => 'Admin',
		'lastname' => '',
		'password' => '$2a$11$yNFxqhTPzFbiak3lBHZK7.bbNgeb0QItwC01yL9JDOBrBBpoFtv3S',
		'crypt_encoding' => 'csharp_bcrypt',
		'page' => false
	)
);

// Admins list
$imSettings['access']['admins'] = array('6ycc6l8h');

// Page/Users permissions
$imSettings['access']['pages'] = array();

// PASSWORD CRYPT

$imSettings['access']['password_crypt'] = array(
	'encoding_id' => 'php_default',
	'encodings' => array(
		'no_crypt' => array(
			'encode' => function ($pwd) { return $pwd; },
			'check' => function ($input, $encoded) { return $input == $encoded; }
		),
		'php_default' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_DEFAULT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		),
		'csharp_bcrypt' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_BCRYPT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		)
	)
);

// End of file access.inc.php