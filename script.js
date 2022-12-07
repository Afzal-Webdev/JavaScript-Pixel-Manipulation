const canvas = document.getElementById("pixelated");
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 450;

const image1 = new Image;

image1.src = 'data:image/jpeg;base64,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'

image1.addEventListener('load',function(){

   ctx.drawImage(image1,0,0,canvas.width,canvas.height)
   const scannedImage = ctx.getImageData(0,0,canvas.width,canvas.height);
   const scannedData = scannedImage.data;

   for(let i=0; i < scannedData.length; i+=4){

       const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];

       const averageColorValue = total/3;

       scannedData[i] = averageColorValue;
       scannedData[i+1] = averageColorValue;
       scannedData[i+2] = averageColorValue;

   }

   scannedImage.data = scannedData;
   ctx.putImageData(scannedImage,0,0)
})