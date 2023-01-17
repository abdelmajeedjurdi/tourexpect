<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .filed {
            margin-top: 1rem;
        }

        .container {
            margin: 2rem;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="filed"><strong>Name: </strong> {{ $details['name'] }}</div>
        <div class="filed"><strong>Surname: </strong> {{ $details['surname'] }}</div>
        <div class="filed"><strong>Email: </strong> {{ $details['email'] }}</div>
        <div class="filed"><strong>Phone: </strong> {{ $details['phone'] }}</div>
        <div class="filed"><strong>Passport No: </strong> {{ $details['passport_no'] }}</div>
        <div class="filed"><strong>Travel Date: </strong> {{ $details['travel_on'] }}</div>
        <div class="filed"><strong>Country: </strong> {{ $details['country'] }}</div>
        <div class="filed"><strong>Nationaity: </strong> {{ $details['nationality'] }}</div>
        <div class="filed"><strong>Visa Type: </strong> {{ $details['visa_type'] }}</div>
    </div>
</body>

</html>
