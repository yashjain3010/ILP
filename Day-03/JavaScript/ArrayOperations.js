//map :- 
const number = [1,2,3,4,5,6];

const ans = number.map(number => number*3);

console.log(ans);

//filter :-

const arr = [1,2,3,4,5,6,7,8];

const filterarr = arr.filter(arr => arr % 2 === 0);

console.log(filterarr);

//find :- 

const nums = [1,2,3,4,5,6,7];

const findfirstEven = nums.find(nums => nums % 2 === 0);

console.log(findfirstEven);

const nums1 = [1,3, 5, 7];

const findfirstEven1 = nums1.find((nums) => nums % 2 === 0);

console.log(findfirstEven1);
