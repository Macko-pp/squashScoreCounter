export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Player 1.png","Player 2.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-fc616036.js","imports":["_app/immutable/start-fc616036.js","_app/immutable/chunks/index-c49d13dd.js","_app/immutable/chunks/singletons-ed42d077.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
