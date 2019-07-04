import fs from 'fs-extra'
import path from 'path'

const installedDirname = 'installed'
const installedDirPath = path.join(__dirname, '..', installedDirname)
if (!fs.existsSync(installedDirPath)) {
	fs.mkdirpSync(installedDirPath)
}
export const installedDir = fs.realpathSync(installedDirPath)
