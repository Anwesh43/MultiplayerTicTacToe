var obj,ctx;
var x=new Array(9),y=new Array(9);
var x1=new Array(9),y1=new Array(9);
var j=0;
var cx=0,cy=0;
var crossx=new Array(5),crossy=new Array(5);
var circlex=new Array(4),circley=new Array(4);
//var eqecrx3=new Array(5),eqecry3=new Array(5);
//var eqecix3=new Array(5),eqeciy3=new Array(5);
var crx=new Array(new Array(0,1,2),new Array(3,4,5),new Array(6,7,8)),cry=new Array(new Array(0,3,6),new Array(1,4,7),new Array(2,5,8)), cma=new Array(0,4,8),cmb=Array(2,4,6);
var ccx=new Array(0,0,0),ccy=new Array(0,0,0),ccca=0,cccb=0;
var cix=new Array(0,0,0),ciy=new Array(0,0,0),cica=0,cicb=0;
//var ckx=new Array(5),cky=new Array(5),cty=new Array(5);
var used=new Array(9);
var uu=0;
var ok=0;
var reset=false;
window.onload=function()
{
obj=document.getElementById("tik");
ctx=obj.getContext("2d");
for(var i=0;i<9;i++)
{
x[i]=100+(i%3)*50;
y[i]=100+(Math.floor(i/3)*50);
}
pop();
};
window.onmousedown=function(event)
{
//alert('tik');
for(var i=0;i<9;i++)
{
if(event.pageX>x[i] && event.pageX<x[i]+50 && event.pageY>y[i] && event.pageY<y[i]+50)
{
//alert(i);
for(var l=0;l<uu;l++)
{
if(i==used[l])
{
ok=1;
break;
}
else
ok=0;
}
if(ok==0)
{
x1[j]=x[i]+25;
y1[j]=y[i]+25;


if(j%2==0)
{

crossx[cx]=i;
crossy[cx]=i;
cx++;
}
else
{
circlex[cy]=i;
circley[cy]=i;
cy++;
}
j++;
used[uu]=i;
uu++;
}
}
}
};
function toss()
{
}
function pop()
{
cix=new Array(0,0,0);ciy=new Array(0,0,0);cica=0;cicb=0;
ccx=new Array(0,0,0);ccy=new Array(0,0,0);ccca=0;cccb=0;
ctx.lineWeight=50;
ctx.clearRect(0,0,1000,600);
for(var i=0;i<2;i++)
{
ctx.save();
ctx.translate(150+i*50,100);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,150);
ctx.stroke();
ctx.restore();
}
for(var i=0;i<2;i++)
{
ctx.save();
ctx.translate(100,150+i*50);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(150,0);
ctx.stroke();
ctx.restore();
}
for(var i=0;i<j;i++)
{
ctx.save();
ctx.translate(x1[i],y1[i]);
if(i%2==0)
cross();
else
circle();
ctx.restore();
}
var nct=0,ect=0,rct=0,ncx=0,rcx=0,ecx=0;
for(var i=0;i<circlex.length;i++)
{
for(var l=0;l<3;l++)
{
for(var n=0;n<3;n++)
{
if(circlex[i]==crx[l][n])
ccx[l]++;
}
}
for(var l=0;l<3;l++)
{
for(var n=0;n<3;n++)
{
if(circlex[i]==cry[l][n])
ccy[l]++;
}
}
for(var l=0;l<3;l++)
{
if(circlex[i]==cma[l])
ccca++;
}
for(var l=0;l<3;l++)
{
if(circlex[i]==cmb[l])
cccb++;
}
}


for(var i=0;i<crossx.length;i++)
{
for(var l=0;l<3;l++)
{
for(var n=0;n<3;n++)
{
if(crossx[i]==crx[l][n])
cix[l]++;
}
}
for(var l=0;l<3;l++)
{
for(var n=0;n<3;n++)
{
if(crossx[i]==cry[l][n])
ciy[l]++;
}
}
for(var l=0;l<3;l++)
{
if(crossx[i]==cma[l])
cica++;
}
for(var l=0;l<3;l++)
{
if(crossx[i]==cmb[l])
cicb++;
}
}
if(cicb==3 || cica==3 || cix[0]==3 || ciy[0]==3 ||  cix[1]==3 || ciy[1]==3 ||  cix[2]==3 || ciy[2]==3)
{
alert("Cross has won");
j=0;
circlex=new Array(4);
circley=new Array(4);
used=new Array(9);
crossx=new Array(5);crossy=new Array(5);
}
else if(cccb==3 || ccca==3 || ccx[0]==3 || ccy[0]==3 ||  ccx[1]==3 || ccy[1]==3 ||  ccx[2]==3 || ccy[2]==3)
{
alert("Circle has won");
j=0;
circlex=new Array(4);
circley=new Array(4);
used=new Array(9);
crossx=new Array(5);crossy=new Array(5);
}
else if(j==9)
{
	alert('Draw');
	j=0;
circlex=new Array(4);
circley=new Array(4);
used=new Array(9);
crossx=new Array(5);crossy=new Array(5);
}
setTimeout("pop()",100);
}
function cross()
{
for(var i=0;i<4;i++)
{
ctx.save();
ctx.rotate((i*90)*Math.PI/180);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(10,10);
ctx.stroke();
ctx.restore();
}
}
function circle()
{
ctx.save();
ctx.beginPath();
ctx.arc(0,0,10,0,2*Math.PI);
ctx.stroke();
ctx.restore();
}
function checkx(i)
{
return i%3;
}
function checky(i)
{
return Math.floor(i/3);
}