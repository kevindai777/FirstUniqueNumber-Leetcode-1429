//Objective is to design a class with two methods:
//'showFirstUnique': shows the first unique value in the data structure
//'add': adds a value into the data structure


//Design that uses an array to hold the values and a hashmap to hold the frequencies
//showFirstUnique: O(n) solution to find the fvalue with a frequency of 1
//add: O(1) solution that adds a value to the array and hashmap

class FirstUnique {
    constructor(nums) {
        this.map = {}
        for (let i = 0; i < nums.length; i++) {
            if (this.map[nums[i]] == undefined) {
                this.map[nums[i]] = 1
            } else {
                this.map[nums[i]]++
            }
        }
        
        this.arr = nums
    }

    showFirstUnique() {
        for (let val of this.arr) {
            if (this.map[val] == 1) {
                return val
            }
        }
        
        return -1
    }

    add(value) {
        this.arr.push(value)
        if (this.map[value] == undefined) {
            this.map[value] = 1
        } else {
            this.map[value]++
        }
    }
}