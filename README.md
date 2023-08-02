# OneTrust Cookie Parser

This repository contains a JavaScript script for parsing and creating a cookie using OneTrust's privacy solution. The script is designed for deployment on Google Tag Manager (GTM).

<img src="https://github.com/cevaboyz/Cookie-Parser/assets/74262186/c09422af-954b-49a9-a02e-af7b7139220e=" width="200">

## Overview

The script uses regular expressions to parse a specific key-value pair (`C0004:1`) from a OneTrust cookie string. Depending on the value associated with this key, it then sets a new cookie with the name "marketing". If the original value is "0", the new cookie's value is set to "false"; otherwise, it's set to "true". The new cookie is set to expire one month from the current date and time, and applies to all subdomains of the current domain, excluding "www".

## Installation

To deploy this script with Google Tag Manager:

1. Copy the script from the `cookie_parser.js` file in this repository.
2. In Google Tag Manager, create a new Custom HTML Tag.
3. Paste the copied script into the HTML container.
4. Trigger the tag where necessary on your site.

Please ensure that you test this thoroughly before deploying to a live environment.

## Contributing

Contributions are welcome! Please create an issue to discuss your proposed changes, or open a pull request directly.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
