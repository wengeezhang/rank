function Rank(arr){//arr--page logic arr
  var self = this;
  /*var taskLen = arr.length;
  this.taskMap = {};

  arr.map(function(task,index){
    self.taskMap[task.name] = task;
    task.hasNext = (index+1 < taskLen)?true:false;
  });*/
  //this.tasks = [].concat(arr);
  this.tasks = [];
  arr.forEach(function(task){
    task.top = self;
    self.tasks.push(task);
  });
}
Rank.prototype={
  run:function(){
    var self = this;
    return new Promise(function(res,rej){
      var loop = function(lastYieldVal){
        var task = self.tasks.shift();
        if(task){
          var result = task.fun(lastYieldVal);
          if(typeof result === 'object' && typeof result.then ==='function'){
            result.then(function(yieldVal){
              if(yieldVal && yieldVal.errCode == -1){
                console.log("stopped by ",task.name,"error:",yieldVal.msg);
              }else{
                loop(yieldVal);
              }
            });
          }else{
            res("tasks finished");
          }

        }else{
          res("tasks finished");
        };
      }
      loop();
    });
  }
};
Rank.prototype.constructor = Rank;