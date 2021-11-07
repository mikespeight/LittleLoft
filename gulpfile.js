/**
 * Created by Mike Speight on 05/02/2018.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
	return gulp.src('./sass/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
}

// tasks
exports.buildStyles = buildStyles;
exports.watch = function () {
	gulp.watch('./sass/*.scss', ['sass']);
};

// Default tasks


// For additional tasks please run gulp taskName at the command prompt i.e. gulp prefix
