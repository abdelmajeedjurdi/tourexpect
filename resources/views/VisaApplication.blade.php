<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Visa Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
        }

        h1 {
            font-size: 20px;
            margin-bottom: 20px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        th,
        td {
            padding: 10px;
            text-align: left;
            vertical-align: top;
            border-bottom: 1px solid #00aeef;
        }

        th {
            background-color: #B4E3F5;
            color: #333;
            font-weight: normal;
        }

        td {
            font-size: 16px;
        }
    </style>
</head>

<body>

    <h1>{{ $details['method'] }} Payment Details</h1>
    @php
        $i = 0;
    @endphp
    @while ($i < $details['count'])
        <h3 style="color: blue; margin-bottom: .5rem; margin-top:1.5rem">{{ 'Person ' . ($i + 1) }}</h3>
        <table>
            <tr>
                <th>Name</th>
                <td>{{ $details['name_' . $i] }}</td>
            </tr>
            <tr>
                <th>Surname</th>
                <td>{{ $details['surname_' . $i] }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ $details['email_' . $i] }}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{{ $details['phone_' . $i] }}</td>
            </tr>
            <tr>
                <th>Passport No</th>
                <td>{{ $details['passport_no_' . $i] }}</td>
            </tr>
            <tr>
                <th>Travel Date</th>
                <td>{{ $details['travel_on_' . $i] }}</td>
            </tr>
            <tr>
                <th>Country</th>
                <td>{{ $details['country_' . $i] }}</td>
            </tr>
            <tr>
                <th>Visa Type</th>
                <td>{{ $details['visa_type_' . $i] }}</td>
            </tr>
        </table>
        @php
            $i++;
        @endphp
    @endwhile
</body>

</html>
