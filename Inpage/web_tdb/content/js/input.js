// JavaScript Document
var aInp=document.getElementsByTagName('input');
var i=0;
var sArray=[];
for(i=0; i<aInp.length; i++)
{
aInp[i].index=i;
sArray.push(aInp[i].value);
aInp[i].onfocus=function()
{
if(sArray[this.index]==aInp[this.index].value)
{
aInp[this.index].value='';
}
aInp[this.index].className='inputblack';
};
aInp[i].onblur=function()
{
if(aInp[this.index].value=='')
{
/*aInp[this.index].value=sArray[this.index];*/
}
aInp[this.index].className='inputblack';
};
}


var taInp=document.getElementsByTagName('textarea');
var i=0;
var tsArray=[];
for(i=0; i<taInp.length; i++)
{
taInp[i].index=i;
tsArray.push(taInp[i].value);
taInp[i].onfocus=function()
{
if(tsArray[this.index]==taInp[this.index].value)
{
taInp[this.index].value='';
}
taInp[this.index].className='inputblack';
};
taInp[i].onblur=function()
{
if(taInp[this.index].value=='')
{
/*aInp[this.index].value=sArray[this.index];*/
}
taInp[this.index].className='inputblack';
};
}