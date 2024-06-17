function shortcut(s1, s2) {
    let ans="";
    if(s1.trim()=="" || s2.trim()==" "){
        return "";
    }
    ans=s1.trim().charAt(0)+s2.trim().charAt(0);
    return ans;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
