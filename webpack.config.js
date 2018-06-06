module.exports = {
	entry: "./src/react/index.tsx",
	output: {
		filename:"bundle.js",
		path: __dirname + "/dist",
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			//Reprocess js files with source-map-loader
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	/*
	//Avoid bundling dependencies so browsers can cache libraries between builds
	//When a module path matches one of the following, assume a corresponding global variable exists
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
	}*/
}
