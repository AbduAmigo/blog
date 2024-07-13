<x-mail::message>
# Notification detail

Hello Billing,

<br>

{{ $body['title'] }} | {{ $body['service_name'] }} is expired on {{ $body['service_date'] }}
<br>
<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
