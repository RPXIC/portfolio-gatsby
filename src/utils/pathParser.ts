import { IPathParser } from '../interfaces/pathParser'

const pathParser = ({ pathName, headerTemplate }: IPathParser): string => {
  if (headerTemplate) {
    if (pathName === '/') return '<!-- Home -->'
    const removedFirstCharacter = pathName.substring(1)
    const res = removedFirstCharacter[0].toUpperCase() + removedFirstCharacter.slice(1) || ''
    return `<!-- ${res} -->`
  } else {
    if (pathName === '/') return 'Home'
    const removedFirstCharacter = pathName.substring(1)
    const res = removedFirstCharacter[0].toUpperCase() + removedFirstCharacter.slice(1) || ''
    return res
  }
}

export default pathParser
