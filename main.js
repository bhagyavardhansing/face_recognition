Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
 
        camera = decoument.getElementById("camera")

        webcam.attach('# camera');

        function take_snapshot()
        {
          web.snap (function(data_uri) {           
        decoument.getElementById("result").innerHTML = <img id="captured_image" src="'+data_uri+ "/>;
          });
        }

        console.log('ml5 varison:', ml5.varison);

        calssifire = ml5.imageClassifire('https://teachablemachine.withgoogle.com/' ,modelLoaded);
        