// tek bir nodu calistiracak fonksion
//App.js te impor tkısımlarına " import {engine_run} from './engine/engine'; " ekle
//App.js teki run fonksiyonuna " engine_run(nodes); "ekle
const cv = require("../assets/js/opencv");

//import cv from '../assets/js/opencv';
var nodeList;
export function engine_run(node_List, cv) {
  nodeList = node_List;
  console.log("nodeList");
  console.log(nodeList);
  for (var listId in nodeList) {
    if (nodeList[listId].type == "finish") {
      console.log("node is working = " + nodeList[listId].id);
      runNode(nodeList[listId], listId, cv);
    }
  }

  function runNode(node, listId, cv) {
    // node id si verilen nodu calistiracak
    // isExecuted degiskenini calistirdiktan sonra true yapacak

    console.log("ee hani calisti");
    if (node.isExecuted == false) {
      var i = nodeIndexBul(node.id);
      console.log("157 var i:" + i);
      if (node.type == "start") {
        var f = new Function(
          "node,node_id,cv",
          ' console.log("start ici node_id: "+node_id); \
                    let mat = cv.imread(node_id); \
                    node.data.returnValue = mat; \
                    node.isExecuted = true;'
        );
        f(nodeList[i], node.id, cv);
      } else if (node.type == "finish") {
        let refNodeName = isReferanceParam(
          node.data.parameters[0].currentValue
        );

        let i = nodeIndexBul(refNodeName);
        if (nodeList[i].isExecuted == false) {
          if (!runNode(nodeList[i], i, cv)) {
            console.log(refNodeName + " nodu calistirilamadi.");
            return false;
          }
        }
        console.log("168 var i:" + i + " refNodeName: " + refNodeName);
        var f = new Function(
          "node,cv,nodex",
          "\
                cv.imshow(node.id,nodex.data.returnValue); \
                node.data.returnValue = nodex.data.returnValue;\
                "
        );
        f(node, cv, nodeList[i]);
      } else {
        console.log("xxxxxynode.data :" + node + node.data);
        var fonctionString = createFunction(node.data);
        var f = new Function(
          "i,cv,nodeList",
          " var mat1 = new cv.Mat();\
                " +
            fonctionString +
            ' \
                console.log("sdsd "+name +"ar working now!" +"' +
            fonctionString +
            '");\
                console.log("f içi i: " + i);\
                nodeList[i].data.returnValue = mat1;\
                nodeList[i].isExecuted = true;\
                '
        );
        let a = f(nodeIndexBul(node.id), cv, nodeList);
        console.log("let a 188:" + a);
      }

      node.isExecuted = true;
    }
    return true;
  }

  //nodeCalistiMi alınan: nodeid ex. start_1, return 0 veya 1 veya 2..
  function nodeCalistiMi(nodeId) {
    // param: nodeId , calisip calismadigi kontorl edileck nodun listedeki idsi
    //retrun eger calistiysa cikti degeri yani return parameter
    //        ""   calismadiysa false

    for (var node in nodeList) {
      console.log("nodeCalistiMi logu nodlar=" + nodeList[node]);
      if (nodeList[node].id == nodeId) {
        try {
          if (nodeList[node].isExecuted == true) {
            return node;
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return false;
  }

  function nodeIndexBul(nodeId) {
    // param: nodeId , calisip calismadigi kontorl edileck nodun idsi
    //retrun eger calistiysa cikti degeri yani return parameter
    //        ""   calismadiysa false
    for (let i in nodeList) {
      if (nodeList[i].id == nodeId) {
        return i;
      }
    }
    return false;
  }

  function errorFunction(params) {
    console.log(params);
  }

  //verilen parametrenin refarans mi gösterdigini bulan fonk.
  function isReferanceParam(param) {
    let temp = "" + param;
    temp = temp.split(":");
    console.log("temo[0]:" + temp[0] + " temp[1]:" + temp[1]);
    if (temp[0] == "ref") {
      return temp[1];
    } else {
      return false;
    }
  }

  //node listesinden verlen tek bir nodun data kısmından
  //parametreler ve girilen degerler ile fonksiyonun olusturulmasi
  function createFunction(data) {
    console.log("data :" + data);
    let fString = "cv." + data.functionName + "(";
    console.log("createFunction 237 : " + fString);
    let length = data.parameters.length;
    data.parameters.forEach((element) => {
      //son parametre degilse currn valueyi al
      //current value ref: ise ref edilen nodun return degerini getir.
      //ref edilen node çaslimadiysa once o nodu calistir.
      if (element.name == "dst") {
        fString = fString + "mat1" + ",";
      } else {
        let currVal = element.currentValue;
        if (currVal == "" || currVal == null) {
          //parmetredeki deger null ise ve gerekli degilse default degeri ver
          if (element.required == true) {
            //gerekliyse hata ver
            errorFunction(
              nodeList[1].data.functionName +
                " fonksiyonunda " +
                element.name +
                " parametresi eksik!"
            );
            return 0;
          } else {
            fString = fString + element.default + ",";
          }

          //parametrenin degeri bir ref. gostergesi degilse fonksiyona direkt ver
        } else if (isReferanceParam(currVal) == false) {
          //eger isReference fonk. false dondururse bu demektirki girilen deger bir degisken
          fString = fString + currVal + ",";

          //referans node ise (henuz calismadiysa calistir ve   git o nodun donus degerini al
        } else {
          let referansNode = isReferanceParam(currVal);
          // assagisi duzenlenmeli, calismasi istenen node calisip calismadigini kontol et
          //calistiysa direkt cikti degerini al,
          //calismadiysa runNode() fonksiyonu ile calismasini sagla

          let isExecuted = nodeCalistiMi(referansNode);
          if (isExecuted == false) {
            console.log(
              "referansNode: " +
                referansNode +
                ", isExecuted: " +
                isExecuted +
                " ,nodeIndexBul otuput: " +
                nodeIndexBul(referansNode)
            );
            if (
              runNode(
                nodeList[nodeIndexBul(referansNode)],
                nodeIndexBul(referansNode),
                cv
              ) == 0
            ) {
              return 0;
            }
          }
          isExecuted = nodeCalistiMi(referansNode);
          console.log(
            " runNode sonrasi :referansNode: " +
              referansNode +
              ", isExecuted: " +
              isExecuted +
              " ,nodeIndexBul otuput: " +
              nodeIndexBul(referansNode)
          );

          fString =
            fString + "nodeList[" + isExecuted + "].data.returnValue" + ",";
        }
      }
    });
    fString = fString.slice(0, fString.length - 1) + ");";
    console.log("createFunction log before return: " + fString);
    return fString;
  }
}
