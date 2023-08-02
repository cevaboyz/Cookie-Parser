<script>

var cookie_parser = function() {

    // Obtain the CookieConsent cookie.
    var raw_cookies = {{CookieConsent}}; 

    // Use a regular expression to extract the "marketing=..." part of the cookie.
    var cookiebot_value = raw_cookies.match(/marketing=../); 

    // If there's a match, proceed.
    if (cookiebot_value && cookiebot_value.length > 0) {

        // Split the matched string at the '=' character.
        var split = cookiebot_value[0].split("=");

        // The second part of the split string (i.e., the value after '=') is the value of consent.
        var value_of_consent = split[1]; 

        // Remove whitespace from the consent value.
        var value_of_consent_trim = value_of_consent.trim(); 

        // Log the trimmed consent value.
        console.log(value_of_consent_trim);

        // Determine the value to set in the new cookie.
        if (value_of_consent_trim === "false") {
            var value = "false";
        } else {
            var value = "true";
        }

        // Set the expiration time to one month from now (in milliseconds).
        var expirationTime = 2592000 * 1000; 

        // Get the current date.
        var date = new Date(); 

        // Get the current time in milliseconds.
        var dateTimeNow = date.getTime(); 

        // Set the expiration time of the cookie.
        date.setTime(dateTimeNow + expirationTime); 

        // Convert the date to a UTC string.
        date = date.toUTCString(); 

        // Set the "marketing" cookie with the determined value, expiration date, and other attributes.
        // Remove "www." from the start of the hostname, if present.
        document.cookie = "marketing=" + value + "; SameSite=None; Secure; expires=" + date + "; path=/; domain=." + location.hostname.replace(/^www\./i, "");

        // Log a success message.
        console.log("success");

    } else {
        // If there's no match, log an error message.
        console.log('No match found for "marketing=.."');
    }
}

// Call the cookie parsing function.
cookie_parser();

</script>
