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

    @php
        $i = 0;
    @endphp
    @while ($i < $details['count'])
        <div class="container">
            <h3 style="color: blue">{{ 'Person ' . ($i + 1) }}</h3>
            <div class="filed"><strong>Name: </strong> {{ $details['name_' . $i] }}</div>
            <div class="filed"><strong>Surname: </strong> {{ $details['surname_' . $i] }}</div>
            <div class="filed"><strong>Email: </strong> {{ $details['email_' . $i] }}</div>
            <div class="filed"><strong>Phone: </strong> {{ $details['phone_' . $i] }}</div>
            <div class="filed"><strong>Passport No: </strong> {{ $details['passport_no_' . $i] }}</div>
            <div class="filed"><strong>Travel Date: </strong> {{ $details['travel_on_' . $i] }}</div>
            <div class="filed"><strong>Country: </strong> {{ $details['country_' . $i] }}</div>
            <div class="filed"><strong>Nationaity: </strong> {{ $details['nationality_' . $i] }}</div>
            <div class="filed"><strong>Visa Type: </strong> {{ $details['visa_type_' . $i] }}</div>
        </div>
        @php
            $i++;
        @endphp
    @endwhile
</body>

</html>
