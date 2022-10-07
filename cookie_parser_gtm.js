<script>


var cookie_parser = function() {

        var raw_cookies = {{CookieConsent}}; //get cookiebot 1st party cookie

        var cookiebot_value = raw_cookies.match("marketing+......"); //use regex to extract the section marketing=xx

        var cookiebot_value = raw_cookies.match("marketing+......")[0]; //select the index 0

        var split = cookiebot_value.split(":"); //split the string in key(marketing) and value(true or false)

        var value_of_consent = split[1]; //take the value of the key
        
        var value_of_consent_trim = value_of_consent.trim()
  
        console.log(value_of_consent_trim)
  
        var trimmed = value_of_consent.slice(0, -1)
        
        if(trimmed === "fals"){
          var value = "false"}else{
            var value = "true"}
        

        var expirationTime = 2592000 * 1000; // One month in seconds

        var date = new Date();

        var dateTimeNow = date.getTime(); //get the current date

        date.setTime(dateTimeNow + expirationTime); // Sets expiration time (Time now + one month)

        date = date.toUTCString(); // Converts milliseconds to UTC time string

        document.cookie = "marketing" + "=" + value + "; SameSite=None; Secure; expires=" + date + "; path=/; domain=." + location.hostname.replace("/^www\./i", ""); // Sets cookie for all subdomains
            console.log("success");

    }
    
    cookie_parser()
  
  </script>
