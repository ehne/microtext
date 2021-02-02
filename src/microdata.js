export default function microdata (inputText) {
  /*
    How data is stored in a microdata file:
    ```
    [hello]
    world
    ```
    returns {
      hello: "world"
    }
  */
  const splitText = inputText.replace(/(\r\n|\n|\r)/gm, '').split(/[\[\]]/g).slice(1)
  const data = {}
  for (let index = 0; index < splitText.length; index += 2) {
    const key = splitText[index]
    data[key] = splitText[index + 1]
  }
  return data
}
