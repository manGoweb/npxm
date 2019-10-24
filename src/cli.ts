import lib from './lib'

export default async function run(args: string[]) {
	const forceUpdate = args.indexOf('--force-update') > -1 || args.indexOf('--f') > -1

	switch (args[0] || '--help') {
		case '--install':
		case '--use':
		case '--add':
			return lib.add(args[1], forceUpdate)
			break
		case '--link':
			return lib.link(args[1], forceUpdate)
			break
		case '--run':
			return lib.run(args[1], args[2], args.slice(3))
			break
		case '--cleanup':
			return lib.cleanup()
			break
		case '--help':
			const manifest = require('../package.json')
			console.log(`This is ${manifest.name}@${manifest.version}.`)
			break
		default:
			const packageName = (args[0] || '').split('@')[0]
			if (packageName && packageName.substr(0, 1) !== '-') {
				return lib.run(args[0], args[1], args.slice(2))
			}
			console.error('Unknown command. Try to run `npxm --help` for more info.')
	}
}
