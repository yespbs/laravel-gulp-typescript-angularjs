// Include gulp
var gulp = require('gulp');

// Include Our Plugins
/*var jshint = require('gulp-jshint');
var less   = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');*/
var concat = require('gulp-concat');
/*var uglify = require('gulp-uglify');
var rename = require('gulp-rename');*/
var sourcemaps = require('gulp-sourcemaps');
/*var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var reload      = browserSync.reload;
var minifyHTML = require('gulp-minify-html');
var merge = require('merge-stream');*/

var ts = require('gulp-typescript');

gulp.task('scripts', function() {
    return gulp.src([
        
        //angular material
        'resources/assets/bower_components/angular/angular.js',
        'resources/assets/bower_components/angular-route/angular-route.js',
        'resources/assets/bower_components/bootstrap/dist/bootstrap.js',
        'resources/assets/bower_components/jquery/dist/jquery.js'
     ])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/build/js'));
});

gulp.task('build', [/*'less', 'html.modals',*/ 'scripts']);

gulp.task('default', ['build']);