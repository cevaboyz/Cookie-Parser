<script>
    // Define a function called cookie_parser.
    var cookie_parser = function() {
        
        // Assign the string "OneTrustCookieParser" to the variable raw_cookies.
        var raw_cookies = "OneTrustCookieParser"; 

        // Use a regular expression to search for the pattern "C0004:" followed by a digit in the raw_cookies string. 
        // The match method returns an array of results, or null if no match is found.
        var cookiebot_value = raw_cookies.match(/C0004:\d/); 

        // Check if the match method found a result.
        if(cookiebot_value !== null && cookiebot_value.length > 0) {
            
            // Split the first element of the cookiebot_value array into two parts, using ":" as the separator.
            var split = cookiebot_value[0].split(":"); 

            // Assign the second part of the split array (the value after the ":") to the variable value_of_consent.
            var value_of_consent = split[1]; 

            // Remove whitespace from the beginning and end of value_of_consent.
            var value_of_consent_trim = value_of_consent.trim() 

            // If value_of_consent_trim is "0", assign the string "false" to the variable value. Otherwise, assign the string "true".
            if (value_of_consent_trim === "0") {
                var value = "false"
            } else {
                var value = "true"
            }

            // Calculate the expiration time as one month from now, in milliseconds.
            var expirationTime = 2592000 * 1000; 

            // Get the current date and time.
            var date = new Date(); 

            // Get the current time in milliseconds since the Unix epoch (00:00:00 UTC on 1 January 1970).
            var dateTimeNow = date.getTime(); 

            // Set the date object to the current time plus the expiration time.
            date.setTime(dateTimeNow + expirationTime); 

            // Convert the date object to a string, using the UTC time zone.
            date = date.toUTCString(); 

            // Set a cookie with the name "marketing", the value determined earlier, and an expiration date one month from now.
            // The cookie is set to be secure, and applies to all subdomains of the current domain, excluding "www".
            document.cookie = "marketing" + "=" + value + "; SameSite=None; Secure; expires=" + date + "; path=/; domain=." + location.hostname.replace(/^www\./i, ""); 

            // Log the string "success" to the console.
            console.log("success"); 
        } else {
            // If the regular expression did not find a match in the raw_cookies string, log a message to the console.
            console.log('No match found for the regex "C0004:\d"');
        }
    }

    // Call the cookie_parser function.
    cookie_parser() 
</script>
