document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('jaiVideo');
        if(video.playing) {
        } else {
            video.play();
        }
    }
    // Initialize
    var cl = cloudinary.Cloudinary.new({  cloud_name: '<Cloud Name>' });
    // Call
    cl.responsive(); 
});