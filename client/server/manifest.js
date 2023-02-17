const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-6394f6e9.js","imports":["_app/immutable/start-6394f6e9.js","_app/immutable/chunks/singletons-c5ff82eb.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-b5fc12f2.js'),
			() => import('./chunks/1-48883b83.js'),
			() => import('./chunks/2-f27289a3.js'),
			() => import('./chunks/3-6cb4e627.js')
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
