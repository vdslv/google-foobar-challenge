function elevatorMaitenance(arr) {
    let result = [...arr];
    return result.sort((a,b) => {
        let val1 = a.split('.');
        let val2 = b.split('.');
        let maxLength = val1.length > val2.length ? val1.length : val2.length;

        for(let i=0;i < maxLength;i++) {
        
            let vivod = helper(+val1[i],+val2[i]);
                if(vivod === 1) {
                return 1;
                break;
            } else if (vivod === -1) {
                return -1;
                break;
            }
        }
    })
}

let example = ["1.11", "2.0.0", "1.2", "2", "0.1", "1.2.1", "1.1.1", "2.0"];
  
function helper(el1,el2) {

        if(el1 > el2) {
        return 1;
        } else if (el2 > el1) {
        return -1
        } else if(!el1 && el2 >= 0) {
        return -1
        } else if(!el2 && el1 >= 0) {
        return 1
        } else {
        return 0
        }
}
