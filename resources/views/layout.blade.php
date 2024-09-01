<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="_token" content="{{csrf_token()}}" />
    <link rel="icon" type="image/png" href="{{ url('assets/img/logos/logo.ico') }}" />
    <title>
        Laravel
    </title>
    <!-- Font Awesome Icons -->
    <script src=" {{ url('assets/js/fontawesome.com/42d5adcbca.js') }}" crossorigin="anonymous"></script>
    <!-- CSS Files -->
    <link href="{{ url('assets/css/app.css') }}" rel="stylesheet" />
    <link href="{{ url('assets/css/swal_fire.css') }}" rel="stylesheet" />
    <link href="{{ url('assets/css/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ url('assets/css/dataTables.bootstrap5.min.css') }}" rel="stylesheet" />
    <link href="{{ url('assets/css/select2.css') }}" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <link href="{{ url('assets/css/jquery.dataTables.min.css') }}" rel="stylesheet" />

</head>

<body class="g-sidenav-show bg-ground">
    @auth
    @include('menu')
    @endauth
    @yield('conteudo')


</body>

</html>
