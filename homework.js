//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"*/

//let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
//let dog_names = ["Max","HAS","PuRple","dog"]

// come back to

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(i=0;i<arr.length;i++){
        i % 2 == 0 ? arr.splice(i,1,"even index") : arr[i]
    }
    console.log(arr)
}
replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Question 1
//Write a function to print "hello_USERNAME!" USERNAME is the input of the function. The first line of the code has been defined as below.

    function hello_name(user_name){
        user_name = "_USERNAME"
        let hello = `hello${user_name}`
        return hello
    }
console.log(hello_name())
                
//Question 2
//Write a python function, first_odds that prints the odd numbers from 1-100 and returns nothing

    function first_odds(num){
        for (var i = 1; i <=100; i= i + 2){
            if (i % 2 == 1){
                console.log(i)
            }
        }
    }
    first_odds()
//Question 3
//Please write a Python function, max_num_in_list to return the max number of a given list. The first line of the code has been defined as below.

    function max_num_in_list(a_list){
        console.log(Math.max(...a_list))
    }
    let list1 = [100,200,3,4,5]
    let list2 = [100,9,20,300]
    max_num_in_list(list1)
    max_num_in_list(list2)

                
//Question 4
//Write a function to return if the given year is a leap year. A leap year is divisible by 4, but not divisible by 100, unless it is also divisible by 400. The return should be boolean Type (true/false).

    function is_leap_year(a_year){
        a_year % 4 == 0 && a_year % 100 != 0 ? console.log(true) : a_year % 4 == 0 && a_year % 400 == 0 && a_year % 100 == 0 ? console.log(true) : console.log(false)
    }
    is_leap_year(2016)
    is_leap_year(1997)
    is_leap_year(2000)
    is_leap_year(1900)
                
//Question 5
//Write a function to check to see if all numbers in list are consecutive numbers. For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5] are not consecutive numbers. The return should be boolean Type.

    //def is_consecutive(a_list):