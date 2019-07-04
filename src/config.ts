import fs from 'fs-extra'
import os from 'os'
import path from 'path'
import pkg from '../package.json'

const installedDirname = 'installed'
const installedDirPath = path.join(os.tmpdir(), 'npxm', pkg.name, pkg.version, installedDirname)
if (!fs.existsSync(installedDirPath)) {
	fs.mkdirpSync(installedDirPath)
}
export const installedDir = fs.realpathSync(installedDirPath)
