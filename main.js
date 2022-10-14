function startClassification()
    {
navigator.mediaDevices.getUSerMedia({audio: true});
classifer -ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/modal.json',modelReady)
    }

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error) {
        console.error(error);
}else {
    console.log(results)
    random_number_r =Math.floor(Math.random()*255)+1;
    random_number_g =Math.floor(Math.random()*255)+1;
    random_number_b =Math.floor(Math.random()*255)+1;
}
}

document.getElementById("results_label").innerHTML='Detected voice is of  -'+ results[0].label;

document.getElementById("results_confidence").innerHTML='Detected Dog - '+ dog + 'Detected Cat - '+ cat ;


document.getElementById("results_label").style.color="rbg("+random_number_r+","+random_number_g+","+random_number_r+")";

document.getElementById("results_confidence").style.color="rbg("
random_number_r+","+random_number_g+","+random_number_r+")";


img = document.getElementById();
