import fs from 'fs-extra'
import lib from './lib'

function run(args: string[]) {
	const forceUpdate = args.indexOf('--force-update') > -1 || args.indexOf('--f') > -1

	switch (args[0] || '--help') {
		case '--install':
		case '--use':
		case '--add':
			return lib.add(args[1], forceUpdate)
		case '--link':
			return lib.link(args[1], forceUpdate)
		case '--run':
			return lib.run(args[1], args[2], args.slice(3))
		case '--cleanup':
			return lib.cleanup()
		case '--help':
			const manifest = JSON.parse(
				fs.readFileSync(`${__dirname}/../package.json`, { encoding: 'UTF8' })
			)
			console.log(`This is ${manifest.name}@${manifest.version}.`)
			break
		default:
			const packageName = (args[0] || '').split('@')[0]
			if (packageName && packageName.substr(0, 1) !== '-') {
				return lib.run(args[0], args[1], args.slice(2))
			}
			console.error('Unknown command. Try to run `npxm --help` for more info.')
	}
	return
}

export default async (args: string[]) => run(args)
