<?php
// Include WordPress core files to access functions
require_once('../../../wp-load.php');

// Prevent direct file access
if (!defined('ABSPATH')) exit;


// Retrieve the client token from the database
$client_token = get_option('addresswise_settings_input_field');

// Output the client token as a JSON response
echo wp_json_encode(array('client_token' => esc_html($client_token)));

