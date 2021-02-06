const svgIcon = document.getElementById('svgIcon');

console.log(svgIcon);

function rotateIcon(){
	svgIcon.style.transform = 'rotate(45deg)';

	setTimeout(()=>{
	svgIcon.style.transform = 'rotate(90deg)';	
	},100)

	setTimeout(()=>{
	svgIcon.style.transform = 'rotate(45deg)';	
	},200)

	setTimeout(()=>{
	svgIcon.style.transform = 'rotate(90deg)';	
	},300)
}

// Call the function to run
rotateIcon();

setInterval(rotateIcon, 400);