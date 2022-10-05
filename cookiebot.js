CookieConsent = "{stamp:%27/bfG6FaSuq5HY6gx/QXQtd81LLLjd7Uu3SdA3DIoQMP3l4lKyqB/zg==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1665000360098%2Cregion:%27it%27}"

console.log(CookieConsent)




if (typeof CookieConsent !== 'undefined') {
    error = "No Problemo";
  } else {
    error = "Error";
  }

console.log(error)


cookie_value = CookieConsent.match("marketing+.....")

console.log(cookie_value[0])


split = cookie_value[0].split(":")
console.log(split)

marketing = split[0]
value = split[1]

console.log(marketing)
console.log(value)


//let x = document.cookie

//document.cookie = marketing=value

console.log(marketing + "=" + value)
