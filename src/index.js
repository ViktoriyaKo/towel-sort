
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined || matrix.length === 0) {
        return []
    } else {
        let result = matrix.reduce((prev, item, index) => {
            return prev.concat( (index % 2 !== 0) ? item.reverse() : item )
        })
        return result;
    }    
}
   
  