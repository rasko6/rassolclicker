    let count1 = 0;
    let boughtup1 = false;
    let boughtup2 = false;
    let boughtup3 = false;
    function updatebuttons() {
    const up1button = document.getElementById("buyup1button");
    const up2button = document.getElementById("buyup2button");
    const up3button = document.getElementById("buyup3button");
    
    up1button.disabled = (count1 < 10 || boughtup1);
    up2button.disabled = (count1 < 50 || boughtup2);
    up3button.disabled = (count1 < 500 || boughtup3);
}
updatebuttons();
    function updatecount(){
        const abcd = document.getElementById("counting");
        abcd.textContent = ("your count: " + count1);
    }
    function clicked(){
        const img = document.getElementById("imag");
        img.src = "rassopress.png";
        setTimeout(() => {
        img.src = "rassolhover.png";
        }, 100);
        if (boughtup1 && boughtup2 && boughtup3) {
            count1 = count1 + 50;
        } else if (boughtup1 && boughtup2) {
            count1 = count1 + 10;
        } else if (boughtup1){
            count1 = count1 + 2;
        } else {
            count1 = count1 + 1;
        }
        updatebuttons();
        updatecount();
    }
    function buy1(){
        if (count1 >= 10){
        count1 = count1 - 10;
        boughtup1 = true;
        const up1button = document.getElementById("buyup1button");
        up1button.disabled = true;
        }
        updatebuttons();
        updatecount();
    }
    function buy2(){
        if (count1 >= 50){
        count1 = count1 - 50;
        boughtup2 = true;
        const up2button = document.getElementById("buyup2button");
        up2button.disabled = true;
        }
        updatebuttons();
        updatecount();
    }
    function buy3(){
        if (count1 >= 500){
        count1 = count1 - 500;
        boughtup3 = true;
        const up3button = document.getElementById("buyup3button");
        up3button.disabled = true;
        }
        updatebuttons();
        updatecount();
    }
    document.getElementById("imag").onmouseover = function() {
        this.src = "rassolhover.png";
    }
    document.getElementById("imag").onmouseleave = function() {
        this.src = "rasso.png";
    };
