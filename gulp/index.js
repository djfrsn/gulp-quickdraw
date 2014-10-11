var fs = require('fs');
	onlyScripts = require('./util/scriptFilter');
	tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

	sourced = {
		app: 'app/',
		html: 'app/*.html',
		css: 'app/paint.css'
	};
	dist = {
		css: 'dist/',
		dir: 'dist/'
	};

tasks.forEach(function(task) {
	require('./tasks/' + task);
});
