<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'contacts';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['firstname','lastname','email']; 

	/**
	 * append
	 */ 
	protected $appends = array('tagslist');

	/**
	 * Relationship to User
	 * A CatalogStoneDetails belongs to a Catalog table
	 */
	public function user()
    {
        return $this->belongsTo('\App\User', 'user_id');
    }	

    /**
     * @todo
     */ 
    public function getTagslistAttribute()
    {
       return implode(',', (array)json_decode($this->tags, true));
    }
}
