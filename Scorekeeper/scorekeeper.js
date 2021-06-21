alert("connected");
p1score=0;
p2score=0;
isover = false;
winningscore = 5;
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var rest = document.getElementbyId("res");
var numinput = document.getElementbyId("input");
var winningscoreDisplay = document.querySelector("p span");
p1Button.addEventListener("click",function(){
	alert("inside p1");
	if(!isover)
	{
	p1score++;
	p1display.textContent = p1score;
	if(p1score === winningscore)
	{
		isover = true;
		p1display.classList.add("winner");
	}

}
});
p2Button.addEventListener("click",function(){
	if(!isover)
	{
	p2score++;
	p2display.textContent = p2score;
	if(p2score === winningscore)
	isover = true , p2display.classList.add("winner");
}
});
rest.addEventListener("click",function()
{
	reset();
}
);
function reset()
{
	isover = false;
	p1score=0,p2score=0;
	p1display.textcontent = 0,p2display.textcontent = 0;
}
numinput.addEventListener("change",function()
{
	winningscoreDisplay.textContent = numinput.value;
	winningscore = Number(numinput.value);
	reset();

});