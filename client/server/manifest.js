const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-6ac8b66e.js","imports":["_app/immutable/start-6ac8b66e.js","_app/immutable/chunks/singletons-37b92d81.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-8bc37ce3.js'),
			() => import('./chunks/1-d1971b20.js'),
			() => import('./chunks/2-936c62f6.js'),
			() => import('./chunks/3-d6ad8de6.js')
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
