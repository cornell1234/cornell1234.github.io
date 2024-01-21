<?php 
    $product_name=$_POST['product_name'];
    $price=$_POST['product_price'];
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];

    include 'gateway file path';
    //$api = new gateway('');

    try {
        $response = $api->paymentRequestCreate(array(
            "purpose" => $product_name,
            "amount" => $price,
            "send_email" => true,
            "email" => $email,
            "buyer_name"=> $name,
            "phone"=> $phone,
            "send_sms"=> true,
            "allow_repeated_payment"=> false,
            "redirect_url" => "https://localhost/perfumes/thankyou.php"
        ));
        // "webhook"=> 

    // print_r($response);

    $pay_url=$response['longurl'];
    header("location:$pay_url");
    }
    catch (Exception $e) {
        print('Error: ' . $e->getMessage());
    }
?>