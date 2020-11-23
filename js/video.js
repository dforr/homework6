var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume *100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("The new speed is " + video.playbackRate);
	
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
	console.log("The new speed is " + video.playbackRate);
	
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5){
		video.currentTime = video.currentTime + 5;
	}
	console.log("Current Time: " + video.currentTime)
	console.log(video.duration)
	video.play()
});

document.getElementById('mute').addEventListener('click', mute);
mute.onclick = function(){
	if(video.muted){
		video.muted = false;
		mute.innerHTML = 'Mute';
	}
	else{
		video.muted = true;
		mute.innerHTML = 'Unmute';
	}
};

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	console.log(video.volume);
	
});


document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	
});