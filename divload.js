   window.addEventListener('load', function(){
               
               var alldivimages= document.getElementsByClassName("lazybg");
                       for (var i=0; i<alldivimages.length; i++) {
                           //console.log(allproimages[i]);
                           if (alldivimages[i].getAttribute('data-pic')) {

                                   var tt=alldivimages[i].getAttribute('data-pic');
                                   alldivimages[i].setAttribute('style',tt);
                                   //console.log(tt);

                                   }
                       }
           }, false)
