<script>
    var cookie_parser = function() {
        var raw_cookies = "OneTrustCookieParser"; //get cookiebot 1st party cookie

        var cookiebot_value = raw_cookies.match(/C0004:\d/); //use regex to extract the section marketing=xx

        if(cookiebot_value !== null && cookiebot_value.length > 0) {
            var split = cookiebot_value[0].split(":"); //split the string in key(marketing) and value(true or false)

            var value_of_consent = split[1]; //take the value of the key

            console.log(value_of_consent)

            var value_of_consent_trim = value_of_consent.trim() //remove whitespace

            if (value_of_consent_trim === "0") {
                var value = "false"
            } else {
                var value = "true"
            }

            console.log(value)

            var expirationTime = 2592000 * 1000; // One month in seconds

            console.log(expirationTime)

            var date = new Date(); //initialise the date var

            console.log(date)

            var dateTimeNow = date.getTime(); //get the current date

            console.log(dateTimeNow)

            date.setTime(dateTimeNow + expirationTime); // Sets expiration time (Time now + one month)

            date = date.toUTCString(); // Converts milliseconds to UTC time string

            console.log(date)

            document.cookie = "marketing" + "=" + value + "; SameSite=None; Secure; expires=" + date + "; path=/; domain=." + location.hostname.replace(/^www\./i, ""); // Sets cookie for all subdomains

            console.log("success"); //write the cookie
        } else {
            console.log('No match found for the regex "C0004:\d"');
        }
    }

    cookie_parser() // call the function
</script>
