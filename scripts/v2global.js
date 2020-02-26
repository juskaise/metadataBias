//an attempt without a local library


  
  function collect(){
      var itemListRelated = [];
      var itemListBroader = [];
      var itemListNarrower = [];
      var itemListAlt = [];
      //var itemListUse = []
      var n = event.target.innerText
      //collect "skos:prefLabel" term and "skos:exactMatch" terms
      if (homosaurus[n]){
        if (homosaurus[n]["skos:exactMatch"]){
          var newN = homosaurus[n]["skos:exactMatch"].replace(/ /g,'+')
          document.getElementById("preferred").innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + newN + '\">' + homosaurus[n]["skos:prefLabel"] + "</a>"
          document.getElementById("lcsh").innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + newN + '\">' + homosaurus[n]["skos:exactMatch"] + "</a>"
        }
        else{
          document.getElementById("preferred").innerHTML = homosaurus[n]["skos:prefLabel"]
          document.getElementById("lcsh").innerHTML = ""
        }
      }
      else {
        document.getElementById("preferred").innerHTML = ""
        document.getElementById("lcsh").innerHTML = ""
      }
      //collect "skos:related" terms
      if(homosaurus[n]["skos:related"]){
        if(homosaurus[n]["skos:related"].length > 1){
          for (i = 0; i < homosaurus[n]["skos:related"].length; i ++){
            var p = document.createElement('P')
            if (homosaurus[n]["skos:related"][i]["term"]){
              p.innerHTML = homosaurus[n]["skos:related"][i]["term"]
              p.addEventListener("onclick", collect)
              itemListRelated.push(p);
            }
            else {
              p.innerHTML = homosaurus[n]["skos:related"][i]["@id"]
              p.addEventListener("onclick", collect)
              itemListRelated.push(p);
            }
          }
        } else {var p = document.createElement('P')
            if (homosaurus[n]["skos:related"]["term"]){
              p.innerHTML = homosaurus[n]["skos:related"]["term"]
              p.addEventListener("onclick", collect)
              itemListRelated.push(p);}
            else {
              p.innerHTML = homosaurus[n]["skos:related"]["@id"]
              p.addEventListener("onclick", collect)
              itemListRelated.push(p);}
          }
        document.getElementById("related").innerHTML = ''
        itemListRelated.forEach((x)=>{
          document.getElementById("related").append(x)})
      } else {var p = document.createElement('P')
          p.innerHTML = ""
          while(itemListRelated.length){
            itemListRelated.pop();
          }
          itemListRelated.getElementById("related").innerHTML = "";
        }
  
      
      //collect "skos:broader" terms
      if(homosaurus[n]["skos:broader"]){
        if(homosaurus[n]["skos:broader"].length > 1){
          for (i = 0; i < homosaurus[n]["skos:broader"].length; i ++){
            var p = document.createElement('P')
            if (homosaurus[n]["skos:broader"][i]["term"]){
              p.innerHTML = homosaurus[n]["skos:broader"][i]["term"]
              p.addEventListener("onclick", collect)
              itemListBroader.push(p);}
            else {p.innerHTML = homosaurus[n]["skos:broader"][i]["@id"]
              p.addEventListener("onclick", collect)
              itemListBroader.push(p);}
            }
        } else {var p = document.createElement('P')
            if (homosaurus[n]["skos:broader"]["term"]){
              p.innerHTML = homosaurus[n]["skos:broader"]["term"]
              p.addEventListener("onclick", collect)
              itemListBroader.push(p);}
            else {
              p.innerHTML = homosaurus[n]["skos:broader"]["@id"]
              p.addEventListener("onclick", collect)
              itemListBroader.push(p);}
            } 
            document.getElementById("broader").innerHTML = ''
            itemListBroader.forEach((x)=>{
              document.getElementById("broader").append(x)
            })
      } else {var p = document.createElement('P')
          p.innerHTML = ""
          while(itemListBroader.length){
            itemListBroader.pop();
          }
          document.getElementById("broader").innerHTML = "";
        }
  
      //collect "skos:narrower" terms
      if(homosaurus[n]["skos:narrower"]){
        if(homosaurus[n]["skos:narrower"].length > 1){
          for (i = 0; i < homosaurus[n]["skos:narrower"].length; i ++){
            var p = document.createElement('P')
            if (homosaurus[n]["skos:narrower"][i]["term"]){
              p.innerHTML = homosaurus[n]["skos:narrower"][i]["term"]
              p.addEventListener("onclick", collect)
              itemListNarrower.push(p);
            }
            else {p.innerHTML = homosaurus[n]["skos:narrower"][i]["@id"]
              p.addEventListener("onclick", collect)
              itemListNarrower.push(p);
            }
          }
        } else {var p = document.createElement('P')
        if (homosaurus[n]["skos:narrower"]["term"]){
          p.innerHTML = homosaurus[n]["skos:narrower"]["term"]
          p.addEventListener("onclick", collect)
          itemListNarrower.push(p);}
        else {
          p.innerHTML = homosaurus[n]["skos:narrower"]["@id"]
          p.addEventListener("onclick", collect)
          itemListNarrower.push(p);}
        } 
        document.getElementById("narrower").innerHTML = ''
        itemListNarrower.forEach((x)=>{
          document.getElementById("narrower").append(x)
        })
      } else {var p = document.createElement('P')
          p.innerHTML = ""
          while(itemListNarrower.length){
            itemListNarrower.pop();
          }
          document.getElementById("narrower").innerHTML = ""
        }
      //collect "skos:altLabel" terms
      //if(homosaurus[n]){
      //  if(homosaurus[n]["skos:altLabel"].length > 1){
      //    for (i = 0; i < homosaurus[n]["skos:altLabel"].length; i ++){
      //      var p = document.createElement('P')
      //      if (homosaurus[n]["skos:altLabel"][i]["term"]){
      //        p.innerHTML = homosaurus[n]["skos:altLabel"][i]["term"]
      //        itemListAlt.push(p);
      //      }
      //      else {p.innerHTML = homosaurus[n]["skos:altLabel"][i]
      //        itemListAlt.push(p);
      //      }
      //    }
      //  } else {var p = document.createElement('P')
      //      if (homosaurus[n]["skos:altLabel"]["term"]){
      //        p.innerHTML = homosaurus[n]["skos:altLabel"]["term"]
      //        itemListAlt.push(p);}
      //      else {
      //        p.innerHTML = homosaurus[n]["skos:altLabel"]
      //        itemListAlt.push(p);}
      //      } 
      //} else {var p = document.createElement('P')
      //    p.innerHTML = ""
      //    itemListAlt.push(p);
      //  }
      //document.getElementById("alt").innerHTML = ''
      //itemListAlt.forEach((x)=>{
      //  document.getElementById("alt").append(x)
      //})
      if(homosaurus[n]){
        if(homosaurus[n]["skos:altLabel"]){
          homosaurus[n]["skos:altLabel"].forEach((x)=>{
            var p = document.createElement('P')
            p.innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + x + '\">' + x + "</a>"
            itemListAlt.push(p)
          })
          itemListAlt.forEach((x)=>{
            document.getElementById("alt").append(x)
          })
        }
        else {
          var p = document.createElement('P')
          p.innerHTML = ""
          itemListAlt.length = 0
          itemListAlt.push(p)
          }
          document.getElementById("alt").innerHTML = ''
          itemListAlt.forEach((x)=>{
            document.getElementById("alt").append(x)})
        }
        else{
          document.getElementById("alt").innerHTML = ""
        }
      
  }