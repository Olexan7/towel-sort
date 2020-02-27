
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)) return [];
  if(matrix.length == 0) return [];
  let matrixNew = [];
  let flag = 0;
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 ==0){
      for(let j = 0; j < matrix[i].length; j++){
        matrixNew[flag] = matrix[i][j];
        flag++;
      }
    }
    else{
      var checkArr = matrix[i].reverse();
      for(let j = 0; j < checkArr.length; j++){
        matrixNew[flag] = checkArr[j];
        flag++;
      }
    }
  }
  return matrixNew;
}
