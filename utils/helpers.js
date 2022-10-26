

module.exports = { 
    ifLess : (hp) => {
       if(hp <= 0){
           return true;
       } 
       else
       return false;
    },

    ifEqual : (string, value) => {
        if (string === value) {
            return true;
        }
        else
        return false;
    }
 }