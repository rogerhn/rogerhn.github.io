let seeds = [
  "0x00B418F6E8261075",
  "0x00CE9B1303F1C7C6",
  "0x00DD287C15B4C09D",
  "0x00EF0B7C40F9418A",
  "0x00F27025EAED5F73",
  "0x0A0C4C30C21C9E38",
  "0x0A129BE9C2141B84",
  "0x0A1674B66F227459",
  "0x0A1F98F526D8F6C3",
  "0x0A23FF7A67E8DCCC",
  "0x0A278330AD332AD5",
  "0x0A56A4598981BC4A",
  "0x0A57B8A9AFD6CCA0",
  "0x0A5A330A4493FA4F",
  "0x0A7B96A87202B77D",
  "0x0A7C76C96E1C8CC2",
  "0x0A9448FEE6BCC622",
  "0x0AA3DD9407ECBAFD",
  "0x0ACEABF6224AB359",
  "0x0AD844414598130F",
  "0x0AE4A2F4341CF570",
  "0x0AEF9C4DD2B618F3",
  "0x0AF1570839203672",
  "0x0AF34D3D9BAE05DA",
  "0x0B0DDFD7D5C27E32",
  "0x0B2B7C63B33A0683",
  "0x0B3025A77C58524D",
  "0x0B5C6080E48D289B",
  "0x0B6046B723193D76",
  "0x0B9AC377EAC99012",
  "0x0B9FA61EB6F84871",
  "0x0BA90FC738039DE4",
  "0x0BB84E43E89F3537",
  "0x0BFAA25FE6B34024",
  "0x0C0B92E9E7F73811",
]
let seedsLength = seeds.length;
let imglink = "seeds/";


for (let i = 0; i < seedsLength; i++) {
  let html = "";
  let img = imglink + seeds[i] + ".jpg";
  let seedcode = seeds[i];
  
  html += `
        <div class="seed" id="seed_${seedcode}">
          <img class="shipimage" src="${img}" />
          <span class="seedcode">Seed: ${seedcode}</span>
          </div>
          `;
    $('.output').append(html);
    checkColors(img,seedcode)
}

function checkColors(img,seedcode){
  let swatcheshtml = `<div class="shipcolors">`;
  var canvasimage = document.createElement('img');
  canvasimage.crossOrigin = "Anonymous";
  canvasimage.setAttribute('src', img)
  canvasimage.addEventListener('load', function () {
    var vibrant = new Vibrant(canvasimage);
    var swatches = vibrant.swatches();
    for (var swatch in swatches) {
      if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
        let colorhex = swatches[swatch].getHex();
        swatcheshtml += `<p class="colorblock">
        <span class="colorname">${swatch}</span>
        <span class="colorsqr" style="background-color: ${colorhex}";></span>
        </p>`;
        //console.log(swatch, swatches[swatch].getHex())
      }
      
    }
    swatcheshtml += `</div>`
    $('#seed_'+seedcode).append(swatcheshtml); 
  });
}


function getColors(image) {
  var img = document.createElement('img');
  img.crossOrigin = "Anonymous";
  img.setAttribute('src', image)

  img.addEventListener('load', function () {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()
    for (var swatch in swatches) {
      if (swatches.hasOwnProperty(swatch) && swatches[swatch])
        console.log(swatch, swatches[swatch].getHex())
    }


    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
  });
}