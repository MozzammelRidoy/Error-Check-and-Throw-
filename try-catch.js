function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value ;
    const erroTag = document.getElementById('error');
    try{
        // console.log(bBaria);
        const age = parseInt(ageText);

        if(isNaN(age)){
            // console.log('Age not Found', age, ageText);
            throw "Please Enter a Number";
        }
        else if(age < 18){
            throw "Bacchara Allow Na";
        }

        else if(age > 30){
            throw "Murubbira Ekhane Aisenna";
        }
        erroTag.innerHTML = '';

    }
    catch(err){
        // console.log('ERROR:', err)
        erroTag.innerHTML = 'Error: ' + err;
        
    }
    finally{
        // console.log('ALL Done Finally Try Catch');
    }
    // console.log(11111);
}