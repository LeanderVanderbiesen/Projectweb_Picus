<?php

if($_POST['action'] == 'call_this') {
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.particle.io/v1/devices/300040001647373335333438/analogvalue?access_token=26f5ece9c3b848b36f9bbed29fb2b1578f744bab",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "cache-control: no-cache"
        ),
    ));

    $response = curl_exec($curl);
    $response = json_decode($response, true);
    $err = curl_error($curl);
    curl_close($curl);

    echo $response['result'];
}
