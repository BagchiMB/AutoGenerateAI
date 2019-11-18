function isColorInRange(expectedColor, givenColor) {
    const THRESHOLD = 40;
    for (var i = 0; i < 3; i++) {
        console.log("oh bhai");
        if (((expectedColor[i] - THRESHOLD) > givenColor[i]) 
         || ((expectedColor[i] + THRESHOLD) < givenColor[i])) {
            return false;
        }
    }
    return true;
}

function setVideoBgColor(vid, nativeColor) {
    if (vid) {
        var vidBg = vid.parentElement;
        if (vidBg) {
            // draw first pixel of video to a canvas
            // then get pixel color from that canvas
            var canvas = document.createElement("canvas");
            canvas.width = 8;
            canvas.height = 8;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(vid, 0, 0, 8, 8);

            var p = ctx.getImageData(0, 0, 8, 8).data;
            //console.log("rgb(" + p[0] + "," + p[1] + "," + p[2] + ")");
            if (isColorInRange(nativeColor, p)) {        
                vidBg.style.backgroundColor = "rgb(" + p[60] + "," + p[61] + "," + p[62] + ")";
            }
        }
    }
}

function setVideoBgColorDelayed(vid, nativeColor) {
    setTimeout(setVideoBgColor, 100, vid, nativeColor);
}