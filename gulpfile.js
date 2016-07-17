var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// Include gulp
var gulp = require('gulp');

var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

gulp.task('styles', function () {
    gulp.src([       
        // core
        'resources/assets/bower_components/bootstrap/dist/css/bootstrap.css',
    ])
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/build/css'));
});

gulp.task('scripts.ts', function() {
    return gulp.src([
            'resources/assets/ts/*.ts',
            'resources/assets/ts/**/*.ts'
        ])
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated 
        .pipe(ts({
            sortOutput: true,
            out: 'app.js'
        }))
        .pipe(gulp.dest('resources/assets/js'));
});

gulp.task('scripts', function() {
    return gulp.src([
        
        // core
        'resources/assets/bower_components/angular/angular.js',
        'resources/assets/bower_components/angular-route/angular-route.js',
        'resources/assets/bower_components/jquery/dist/jquery.js',
        'resources/assets/bower_components/bootstrap/dist/js/bootstrap.js',
        
        // add ts app
        'resources/assets/js/app.js'
        
     ])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/build/js'));
});

gulp.task('minify', function() {
    gulp.src('assets/js/app.min.js').pipe(uglify()).pipe(gulp.dest('public/assets/build/js'));

    gulp.src('assets/css/app.min.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            remove: false
        }))
        .pipe(minifyCSS({compatibility: 'ie10'}))
        .pipe(gulp.dest('public/assets/build/css'));
});

//gulp.task('build', ['styles', 'scripts']);

//gulp.task('default', ['build']);

elixir(function(mix) {
    //mix.sass('app.scss');

    // gulp tasks
    mix.task('styles');
    mix.task('scripts.ts');
    mix.task('scripts');
    //mix.task('minify');

    // versioning
    // mix.version(['assets/css/app.min.css', 'assets/js/app.min.js']);

    // copy 
    // mix.copy('resources/assets/img', 'public/assets/img');

    // copy 
    mix.copy('resources/assets/html', 'public/assets/html');
});
