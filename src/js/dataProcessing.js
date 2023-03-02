let request = new XMLHttpRequest();
request.open('GET', './src/data/works.json');
request.responseType = 'json';
request.send();
request.onload = function(){
  let works = request.response;
  printHome(works);
}


function printHome(json){
  json.forEach(el => {
    let blocs = document.querySelectorAll('.'+el['name']);
    // console.log(blocs);
    blocs.forEach(bloc => {
      bloc.setAttribute('style', 'background-image: url("./assets/img/'+el['name']+'.png");');
    });
  });
}