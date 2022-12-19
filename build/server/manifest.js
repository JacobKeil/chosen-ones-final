const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-38c677b8.js","imports":["_app/immutable/start-38c677b8.js","_app/immutable/chunks/singletons-f5ba5de6.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-61c699ca.js'),
			() => import('./chunks/1-3652dbb0.js'),
			() => import('./chunks/2-f014debd.js'),
			() => import('./chunks/3-c04e918a.js')
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
