const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-38b0eb35.js","imports":["_app/immutable/start-38b0eb35.js","_app/immutable/chunks/singletons-bbc70141.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-4c919d35.js'),
			() => import('./chunks/1-db891bdf.js'),
			() => import('./chunks/2-703371b7.js'),
			() => import('./chunks/3-15d2ad09.js')
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
