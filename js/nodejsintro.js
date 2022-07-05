Array.prototype.even = function(){
    return this.filter(i=>i%2==0);
};

Array.prototype.odd = function(){
    return this.filter(i=>i%2==1);
};

// [1,2,3,4,5,6,7,8].even(); //[2,4,6,8]
// [1,2,3,4,5,6,7,8].odd();  //[1,3,5,7]