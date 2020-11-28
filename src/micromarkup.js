module.exports = function micromarkupParse (
  inputText,
  options = {}
) {
  // options:
  const opts = {
    links: true,
    newTab: true,
    bold: true,
    italics: true,
    highlights: false,
    supSub: false,
    ...options
  }

  let mm = inputText
  // BASE

  opts.links && (mm = mm.replace(
    /[[]{1}([^\]]+)[\]]{1}[(]{1}([^)"]+)[)]{1}/g,
    `<a href="$2"${opts.newTab ? ' target="_blank" rel="noopener noreferrer"' : ''}>$1</a>`
  ))
  // bold
  opts.bold && (mm = mm.replace(/[*_]{2}([^*_]+)[*_]{2}/g, '<b>$1</b>'))
  // italics
  opts.italics && (mm = mm.replace(/[*_]{1}([^*_]+)[*_]{1}/g, '<i>$1</i>'))

  // OPTIONAL
  // optional support for highlights
  // syntax: `::highlighed::``

  opts.highlights && (mm = mm.replace(/[:]{2}([^:]+)[:]{2}/g, '<mark>$1</mark>'))

  // optional custom superscript and subscript syntax:

  // subscripts: `ˇsubscriptˇ` (option + shift + T on macos)
  opts.supSub && (mm = mm.replace(/[ˇ]{1}([^ˇ]+)[ˇ]{1}/g, '<sub>$1</sub>'))
  // superscripts:`ˆSuperˆ` (option + shift + I on macos)
  opts.supSub && (mm = mm.replace(/[ˆ]{1}([^ˆ]+)[ˆ]{1}/g, '<sup>$1</sup>'))

  return mm
}
