#!/usr/bin/env node
require('../dist')
	.default.cli(process.argv.slice(2))
	.catch((err) => {
		console.trace(err)
		process.exit(1)
	})
