function temHabilidade(skills) {
    // código aqui
    
    // if(skills.indexOf('Javascript') !== -1) {
    //     return 'true';
    // } else {
    //     return 'false';
    // }

    var verifica = skills.indexOf('Javascript') !== -1 ? 'true' : 'false';
    return verifica;
    
  }
  
  var skills = ['ReactJS', 'React Native', 'Javascript'];
 console.log(temHabilidade(skills));

