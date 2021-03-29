///// 1 /////

function getCookingTime (eggsAmount) {
    let result;
    
    let a=Math.ceil(eggsAmount/5);
    result=a*5;
    
    return result;
    }
    

// console.log(getCookingTime(0)); //returns 0
// console.log(getCookingTime(5)); //returns 5
// console.log(getCookingTime(9)); //returns 10


///// 2 /////

function getNumber (array) {
    let result;
    
    let even=[]
    let odd=[]
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
            even.push(array[i])
        }
        else{
            odd.push(array[i])
        }
    }

    even.length > odd.length ? result=odd[0] : result=even[0]
    
    return result;
    }


// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])) //returns 4
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) //returns 13


///// 3 /////

// function findTitle(array, string) {
//     return [{title has this substring}]
//     }
    
    function findTitle (arr, str) {
        str= str.toLowerCase()
        let newArr=[]
        for(let i=0; i<arr.length; i++){
                if(arr[i].hasOwnProperty('title') && arr[i].title.toLowerCase().includes(str)){
                    newArr.push(arr[i])
                }
        }
        arr=newArr
        return arr
    }

    
    let arr = [
        {title: 'Some title1'}, 
        {title: 'I like JS'}, 
        {user: 'This obj doesn\’t have key title js'},
        {title: 'Js - is the best!'}
    ];

    // console.log(findTitle(arr, 'Js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
    

    ///// 4 /////

    function countCharacters(string) {
        let result={};
        string=string.toLowerCase()

        for(let i=0; i<string.length;i++){
            if(string[i].charCodeAt()>=97 && string[i].charCodeAt()<=122){
                result[string[i]] = result[string[i]] ? result[string[i]] + 1 : 1;
            }
        }
        return result;
    }


    // console.log(countCharacters('sparRow')) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
    // console.log(countCharacters('aabcddeffge')) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
    // console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}
    

///// 5 /////

function getNextPalindrome(number) {
    let result
    
    for(let i=number+1;;i++){
        if(isPolindr(i)){
            result=i
            break
        }
    }
    return result
}

        function isPolindr(num){
            num=num.toString()
            let res=''
            for(let i = num.length-1; i>-1;i--){
                res+=num[i]
            }
            if(Number(res)===Number(num) && res.length>1){
                return true
            }
            else return false
        }

// console.log(getNextPalindrome(7)) // returns 11
// console.log(getNextPalindrome(99)) //returns 101
// console.log(getNextPalindrome(132)) // returns 141
// console.log(getNextPalindrome(888)) // returns 898
// console.log(getNextPalindrome(999)) // returns 1001
    