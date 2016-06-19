<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('contacts', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('firstname',100)->nullable();
            $table->string('lastname',100)->nullable();
            $table->string('email',100)->unique();
            $table->text('address')->nullable();
            $table->enum('gender',['male','female']);
            $table->string('phone_no',50)->nullable();
            $table->json('tags')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('contacts');
    }
}
