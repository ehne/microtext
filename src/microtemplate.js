export default function microtemplate (inputString, variables, delim = 'λ') {
  let mt = inputString
  for (const [key, value] of Object.entries(variables)) {
    mt = mt.split(`${delim}${key}${delim}`).join(value)
  }
  return mt
}
