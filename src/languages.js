
console.log(navigator.language, navigator.languages)

const default_lang = 'en'

export default function(obj) {
	console.log("début")
  let lang = navigator.languages
      console.log({lang})
  let key = default_lang
  for (let i = 0; i < lang.length; i++) {
  	console.log({l : lang[i]})
    if (obj[lang[i]]) {
      console.log({key})
      key = lang[i]
      console.log({key})
    }
    break
  }
	console.log("fin")
  return obj[key]
}
