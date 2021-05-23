// yuzde 80i bitti son bir iki isi kaldi
export function convertJsToPython(queue) {
    var startNode="";
    var pyString=[];
    var codes="import cv2 as cv\n";
    console.log(queue);
    var localQueue=queue;
    var accessStack=[]
    for(var node=0;node<localQueue.length;node++){
        accessStack.push(true);
    }

    var lastItemFlag=false;
    if(localQueue[localQueue.length - 1].type=="custom"){
        lastItemFlag=true;
    }
   
    for(var node=0;node<localQueue.length;node++){
        if(localQueue[node].type == "finish"){
            createChain(node)  
        }  
    }
    
    if(lastItemFlag){
        pyString.push(startNode)
    }

    console.log("chaintocodable:");
    console.log(pyString);
    console.log("python kodu");
    console.log(codes);


    //####################################################
    function createChain(node){
        var chain=[]
        chain.push(localQueue[node]);//finish
        accessStack[node]=false;
        for(var i=0;i<localQueue.length;i++){
            if(accessStack[i]){
                console.log(localQueue[i].type);
                if(localQueue[i].type=="finish"){
                    chain.push(startNode);
                    break;
                }else if(localQueue[i].type=="start"){
                    startNode=localQueue[i];
                    chain.push(localQueue[i])
                    accessStack[i]=false;
                    break;
                }else if(localQueue[i].type=="custom"){
                    chain.push(localQueue[i]);
                    accessStack[i]=false;
                }  
            }     
        }
        
        createCodeFromChain(chain,lastItemFlag)
        

    }
   
    function createCodeFromChain(chain){
        //Gelen her bir zincir için python fonksiyonu yazılıp pyString'e eklenmesi gerekir.(üst üste eklenecek)
        var random=Math.floor(Math.random() * 100).toString().trim();
        chain=chain.reverse();
        for(var i in chain){
            if(chain[i].type=="start"){
                var kod="img"+random+" = cv2.imread(yourFilePath)\n";
                codes+=kod;
            }else if(chain[i].type=="finish"){
                var kod="cv2.imshow('image', img"+random+")\n";
                codes+=kod;
            }else if(chain[i].type=="custom"){
                var functionName=chain[i].data.functionName;
                var kod="img"+random+"=cv2."+functionName+"(";
                for(var a=0;a<chain[i].data.parameters.length;a++){
                    console.log(chain[i].data.parameters[a].currentValue);
                    if(a==chain[i].data.parameters.length-1){
                        
                        if(chain[i].data.parameters[a].name=="dst"){//output

                        }else{
                            var currValue=chain[i].data.parameters[a].currentValue;
                            
                            if (currValue == "" || currValue == null) {
                                kod = kod + chain[i].data.parameters[a].default;
                            }else if (isReferanceParam(currValue) == false) {
                                kod = kod + currValue; 
                            }else{
                                kod = kod + "img"+random;
                            }
                        }
                    }else{
                        
                        if(chain[i].data.parameters[a].name=="dst"){//output

                        }else{
                            currValue=chain[i].data.parameters[a].currentValue;
                           
                            if (currValue == "" || currValue == null) {
                                kod = kod + chain[i].data.parameters[a].default + ","; 
                            }else if (isReferanceParam(currValue) == false) {
                                kod = kod + currValue + ","; 
                            }else{
                                kod = kod + "img"+random+ ",";
                            }
                        }

                    }
                                   
                }
                kod=kod+")\n";
                codes+=kod;
            }


            pyString.push(chain[i]);
        }
    }

    
    function isReferanceParam(param) {
        let temp = "" + param;
        temp = temp.split(":");
        if (temp[0] == "ref") {
          return temp[1];
        } else {
          return false;
        }
      }
}