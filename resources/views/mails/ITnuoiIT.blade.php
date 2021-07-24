

<!DOCTYPE html>
<html lang="en">

<head>
    <title>ITNUoiIT</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>

    <div class="container p-3 my-3 border">
        <h3>{{$data['dear']}}</h3>
    </div>

    <div class="container p-3 my-3 bg-dark text-white">
        <p>{{$data['request']}}</p>
    </div>

    <div class="container p-3 my-3 bg-primary text-white">
        <p>{{$data['task1']}}</p><br>
        <p>{{$data['mess']}}</p><br>
        <p>{{$data['infor']}}</p>
        <p>{{$data['brand']}}</p>
        <p>{{$data['name']}}</p>
        <p>{{$data['account_number']}}</p>
        <p>{{$data['syntax']}}</p>
        <p>{{$data['syntax']}}</p>
        <br>
        <p>{{$data['questions']}}</p>
        <br><br>
        <p>{{$data['signature']}}</p>
    </div>

</body>

</html>