// 引入gulp
const gulp = require("gulp");

// html
gulp.task("copy-html", () => {
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

// images 拷贝图片
gulp.task("images", () => {
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

// gulp 遵从commonJS规范（同步）
/*
	将scss文件转成css
	生成两部分	.min.css	.css
	压缩scss文件：	gulp-minify-css
					gulp-sass-china(免翻墙国情版)
					gulp-cssnano
	重命名：    rename
*/
const scss = require("gulp-scss"),	 
	  minify = require("gulp-minify-css"),
	  rename = require("gulp-rename");
//scss-index
gulp.task("scss-index", () => {
	return gulp.src("scss/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(rename({"suffix": ".min"}))
	.pipe(minify())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//scss-list
gulp.task("scss-list", () => {
	return gulp.src("scss/list.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(rename({"suffix": ".min"}))
	.pipe(minify())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//js
gulp.task("scripts", () => {
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//拷贝data文件  整理数据源
gulp.task("data", () => {
	return gulp.src("data/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//上述5个操作都是整理文件的，作为整体，建立项目的整体，让他们一起执行。
gulp.task("build", ["copy-html", "images", "scss-index", "scripts", "data"], () => {
	console.log("编译成功");
})

// gulp的监听
gulp.task("watch", () => {
	gulp.watch("html/*.html", ["copy-html"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("data/*.json", ["data"]);
	gulp.watch("scss/index.scss", ["scss-index"]);
	gulp.watch("scss/list.scss", ["scss-list"]);
})

// 启动服务器 gulp-connect
const connect = require("gulp-connect");
gulp.task("server", () => {
	connect.server({
		root:"dist",
		port: 8888,
		livereload: true
	})
})

gulp.task("default", ["watch", "server"]);