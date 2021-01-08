let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: ".min"}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 version']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        // 'node_modules/magnific-popup/dist/magnific-popup.css',
        // 'node_modules/rateyo/src/jquery.rateyo.css',
        // 'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
        // magnific-popup - всплывающие окна, rateyo - звезды рейтинга, rangeSlider - регулятор цены == плагины отключены, если надо - включить, новые подключаются по аналогии.
    ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});
gulp.task('script', function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        // 'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        // 'node_modules/mixitup/dist/mixitup.js',
        // 'node_modules/rateyo/src/jquery.rateyo.js',
        // 'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});
gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});
gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass')); // указываем, за кем следим. Если тот, за кем следим, меняется, то выполняется таск sass.
    gulp.watch('app/*.html', gulp.parallel('html'));   //
    gulp.watch('app/js/*.js', gulp.parallel('js'));  // чтобы за файлами хтмл и джс было слежение.
});

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'))
