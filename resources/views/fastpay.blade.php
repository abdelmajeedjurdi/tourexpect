<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>FastPay Payment Details</title>
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
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f7f7f7;
            font-weight: normal;
        }

        td {
            font-size: 16px;
        }
    </style>
</head>

<body>
    <h1>FastPay Payment Details</h1>
    <table>
        <tr>
            <th>Gateway Transaction ID:</th>
            <td>{{ $details['gw_transaction_id'] }}</td>
        </tr>
        <tr>
            <th>Merchant Order ID:</th>
            <td>{{ $details['merchant_order_id'] }}</td>
        </tr>
        <tr>
            <th>Received Amount:</th>
            <td>{{ $details['received_amount'] }}</td>
        </tr>
        <tr>
            <th>Currency:</th>
            <td>{{ $details['currency'] }}</td>
        </tr>
        <tr>
            <th>Customer Name:</th>
            <td>{{ $details['customer_name'] }}</td>
        </tr>
        <tr>
            <th>Customer Mobile Number:</th>
            <td>{{ $details['customer_mobile_number'] }}</td>
        </tr>
        <tr>
            <th>Transaction ID:</th>
            <td>{{ $details['transaction_id'] }}</td>
        </tr>
        <tr>
            <th>Order ID:</th>
            <td>{{ $details['order_id'] }}</td>
        </tr>
        <tr>
            <th>Customer Account No:</th>
            <td>{{ $details['customer_account_no'] }}</td>
        </tr>
        <tr>
            <th>Status:</th>
            <td>{{ $details['status'] }}</td>
        </tr>
        <tr>
            <th>Received At:</th>
            <td>{{ $details['received_at'] }}</td>
        </tr>
    </table>
</body>

</html>
