raw_cookies = document.cookie
'CookieConsent={stamp:%27/bfG6FaSuq5HY6gx/QXQtd81LLLjd7Uu3SdA3DIoQMP3l4lKyqB/zg==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1665000360098%2Cregion:%27it%27}; _gcl_au=1.1.1642825164.1665000360; _ga=GA1.1.399680653.1665000360; reevoo_sp_ses.7c4f=*; reevoo_sp_id.7c4f=1075b8ae-6c92-48d6-b527-8450703fe8f9.1665088132.1.1665088132.1665088132.cf32e422-7e67-4313-a2b0-67cae6014420; _ga_BK37NBR420=GS1.1.1665088131.2.0.1665088131.0.0.0; form_key=PfqWDpIgxyQ5oxbx; mage-banners-cache-storage=%7B%7D; mage-cache-storage=%7B%7D; mage-cache-storage-section-invalidation=%7B%7D; mage-messages=; recently_viewed_product=%7B%7D; recently_viewed_product_previous=%7B%7D; recently_compared_product=%7B%7D; recently_compared_product_previous=%7B%7D; product_data_storage=%7B%7D; form_key=PfqWDpIgxyQ5oxbx; section_data_ids=%7B%22customer%22%3A1665088132%2C%22gtm-customer%22%3A1665088132%2C%22cart%22%3A1665088132%7D; username=null'
cookiebot_value = raw_cookies.match("marketing+.....")
['marketing:true', index: 140, input: 'CookieConsent={stamp:%27/bfG6FaSuq5HY6gx/QXQtd81LL…88132%2C%22cart%22%3A1665088132%7D; username=null', groups: undefined]
cookiebot_value = raw_cookies.match("marketing+.....")[0]
'marketing:true'
split = cookiebot_value.split(":")
(2) ['marketing', 'true']0: "marketing"1: "true"length: 2[[Prototype]]: Array(0)
value_of_consent = split[1]
'true'
if (value_of_consent = true){
    document.cookie = "marketing=true"
console.log("success")}
    
VM4246:3 success
undefined
if (value_of_consent = true){
    document.cookie = "marketing=true"
console.log("success")} else{
    document.cookie = "marketing=false"
    console.log("problem")
}
VM4472:3 success
undefined
document.cookie = "marketing=false"
'marketing=false'
if (value_of_consent = true){
    document.cookie = "marketing=true"
console.log("success")} else{
    document.cookie = "marketing=false"
    console.log("problem")
}
VM5612:3 success
undefined
document.cookie ="marketing=pull"
'marketing=pull'
document.cookie ="marketing=false"
'marketing=false'
