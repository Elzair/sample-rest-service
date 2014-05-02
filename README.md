# sample-rest-service

Service to query a CSV file

## Running

To run the program, first install the dependencies.

    npm install

Then start the program.

    npm start

This should start a server running on either port 3000 (in development) or port 80 (in production). Now, you can navigate to it with any HTTP client and interact with all the valid routes.

## Valid Routes

### /

This route prints out a list of all the items in the CSV file

### /search

This route returns a subset of the items based on certain parameters

* **first_name:** the user's first name
* **last_name:** the user's last name
* **birth_date_begin:** the earliest possible date of birth
* **birth_date_end:** the latest possible date of birth
* **favorite_color:** the user's favorite color
* **address:** the user's address
* **ignore_case:** whether or not to perform a case insensitive search

## Unit Tests

To run the tests, make sure [nodeunit](https://github.com/caolan/nodeunit) is installed and then run the tests with the following command: 

    npm test
