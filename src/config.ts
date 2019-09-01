import fs from 'fs-extra'
import os from 'os'
import path from 'path'
import pkg from '../package.json'

const installedDirname = 'installed'

const tryPaths = [
	path.join(os.homedir(), '.npxm', pkg.name, pkg.version, installedDirname),
	path.join(os.tmpdir(), 'npxm', pkg.name, pkg.version, installedDirname),
]

export let installedDir: string = ''

for (const installedDirPath of tryPaths) {
	if (!fs.existsSync(installedDirPath)) {
		try {
			fs.mkdirpSync(installedDirPath)
			installedDir = installedDirPath
			break
		} catch (e) {
			console.trace(e)
		}
	} else {
		installedDir = installedDirPath
		break
	}
}

if (!installedDir) {
	throw new Error('Cannot create cache dir')
} else {
	console.log(installedDir)
}
