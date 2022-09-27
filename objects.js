let obj={ '1': 102, '2': null, '3': 12, '4': 22, '5': 32, '6': null, '7': 152 }
let req=obj.filter((key,val)=>val!=null)
console.log(req)