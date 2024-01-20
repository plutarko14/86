Webcam.set({
    width: 400,
    height: 401,
    image_format: "png",
    png_quality: 90
    
});
camara = document.getElementById("camara");
Webcam.attach(camara);

function take_snapshot()
{
    Webcam.snap(function(data_uri) { document.getElementById("resultado").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; })
}


console.log("version de ml 5:", ml5.version );
modelo = ml5.imageClassifier("https://storage.googleapis.com/tm-model/xhan7pdEp/model.json",modelo_cargado);
function modelo_cargado() {
    console.log('Model Loaded!');
  }
function check ()
{
    img = document.getElementById("captured_image");
    modelo.classify(img,gotresult);
}


function gotresult(error, results)
{
if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}