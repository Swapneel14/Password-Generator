const pB=document.getElementById("pw");


const length=Math.floor(Math.random()*20)+10;
const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const l="abcdefghijklmnopqrstuvwxyz";
const n="0123456789";
const s="!@$%^&*()_+=-;,/";
const all= u+l+n+s;
function create(){
    let password="";
    password+=u[Math.floor(Math.random()*26)];
    password+=l[Math.floor(Math.random()*26)];
    password+=n[Math.floor(Math.random()*n.length)];
    password+=s[Math.floor(Math.random()*s.length)];
    while(length>password.length){
        password+=all[Math.floor(Math.random()*all.length)]
    }
    pB.value=password;
    
    
}
function copy(){
    const a= "Password Copied!";
    pB.select();
    document.execCommand("copy");
    pB.value=a;
    pB.style.color='grey';
    pB.style.caretColor = 'transparent';


}