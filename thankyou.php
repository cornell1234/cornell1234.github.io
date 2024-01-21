<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Cornell Chisao">
    <meta http-equiv="X-UA Compatible" Content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Thank you for Purchasing!</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

</head>

<body>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <!-- Brand -->
        <a class="navbar-brand" href="#">Elegant Perfumes</a>

        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" Id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Perfume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Categories</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <div class="row justify-content-center">
           <div class="col-md-8">
                <h1 class="text-center mt-4 mb-4">Thank you for Purchasing!</h1>
                <?php
                include 'gateway.php';
                //$api = new gateway('');

                $payid=$_GET['payment_request_id'];

                try{
                    $response = $api->paymentRequestStatus($payid);

                    ?>
                    <h2>Payment Details :</h2>
                    <table class="table table-bordered">
                        <tr>
                            <th>You have purchased :</th>
                            <td><?= $response['purpose']; ?></td>
                        </tr>
                        <tr>
                            <th>Payment ID :</th>
                            <td><?= $response['payments'][0]['payment_id']; ?></td>
                        </tr>
                        <tr>
                            <th>Payee Name :</th>
                            <td><?= $response['payments'][0]['buyer_name']; ?></td>
                        </tr>
                        <tr>
                            <th>Payee Email :</th>
                            <td><?= $response['payments'][0]['buyer_email']; ?></td>
                        </tr>
                        <tr>
                            <th>Payee Phone :</th>
                            <td><?= $response['payments'][0]['buyer_phone']; ?></td>
                        </tr>
                    </table>
                <?php
                }
                catch(Exception $e){
                    print("Error: ".$e->getmessage());
                }
                ?>
            </div>
        </div>
    </div>
</body>
</html>