<?php
/**
 *
 * Plugin Name: AddressWise
 * Plugin URI: https://example.com/plugin-info
 * Description: Woocommerce plugin for autocompleting addresses in New Zealand and Australia.
 * Version: 1.0.0
 * Requires at least: 5.2
 * Requires PHP: 7.4 or later
 * Author: Kunal Goyal
 * License: GPL v3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 */

// Check if ABSPATH is not defined
if ( !defined('ABSPATH') ) {
    die(); // Exit the script if ABSPATH is not defined to prevent direct access
}

// Enqueue the JavaScript file for the  address finder functionality
function addresswise_enqueue_scripts()
{
    if ( is_checkout() && !is_wc_endpoint_url() ) {
            wp_enqueue_script('addresswise',
            plugin_dir_url(__FILE__) . 'autosuggest.js',
            array('jquery'),
            '1.0.0',
            true);
        wp_enqueue_style('addresswise',
            plugin_dir_url(__FILE__) . 'autosuggest.css',
            array(),
            '1.0.0',
            'all');
    }
}

add_action('wp_enqueue_scripts', 'addresswise_enqueue_scripts');
require_once plugin_dir_path(__FILE__) . 'settings/settings.php';
// Enqueue the JavaScript file for address autofill on the checkout page

