function update(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let am_or_pm=document.getElementById('am-or-pm');
    if(h>=12)
    {
        am_or_pm.innerText="PM";
    }
    else{
        am_or_pm.innerText="AM";
    }
    if(h>12)
    {
        h=h-12;
    }
    document.getElementById('hours').innerText=h;
    document.getElementById('minutes').innerText=m;
    document.getElementById('seconds').innerText=s;
}
setInterval(update,1000);