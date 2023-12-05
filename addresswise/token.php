<?php
// Include WordPress core files to access functions
require_once('../../../wp-load.php');

// Retrieve the client token from the database
$client_token = get_option('addresswise_settings_input_field');

// Output the client token as a JSON response
echo json_encode(array('client_token' => $client_token));

