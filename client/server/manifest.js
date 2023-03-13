const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-28594637.js","imports":["_app/immutable/start-28594637.js","_app/immutable/chunks/singletons-98c721b7.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-b4982f37.js'),
			() => import('./chunks/1-4bee7fba.js'),
			() => import('./chunks/2-01d5d0c8.js'),
			() => import('./chunks/3-aaa1ec60.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "blogs",
				pattern: /^\/blogs\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
