@extends('layouts.helloworld')
@section('content')
	<h1>Hello world</h1>
	<div>

        <div ng-controller="HelloWorldController">
            <h2>@{{ message }}</h2>
        </div>

    </div>    
@endsection