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

gulp.task('scripts', function() {
    var tsResult = gulp.src([
            'resources/assets/js/*.ts',
            'resources/assets/js/**/*.ts'
        ])
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated 
        .pipe(ts({
            sortOutput: true,
            out: 'app.js'
        }))
        .pipe(gulp.dest('resources/assets/js'));

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

gulp.task('build', ['styles', 'scripts']);

gulp.task('default', ['build']);