const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-16588e76.js","imports":["_app/immutable/start-16588e76.js","_app/immutable/chunks/singletons-6a88241b.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-0bba258a.js'),
			() => import('./chunks/1-12106b8c.js'),
			() => import('./chunks/2-8fe06694.js'),
			() => import('./chunks/3-9ad3e73e.js')
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
