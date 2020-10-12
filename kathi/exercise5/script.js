let one = `Minions ipsum bappleees bananaaaa aaaaaah. Gelatooo ti aamoo! Underweaaar daa potatoooo. Underweaaar ti aamoo! Ti aamoo! Gelatooo butt bananaaaa. La bodaaa me want bananaaa! Wiiiii aaaaaah aaaaaah hahaha tank yuuu! Bappleees aaaaaah tulaliloo hana dul sae tulaliloo jeje tulaliloo jeje.`;

let two = `Hana dul sae daa me want bananaaa! Ti aamoo! Hana dul sae jeje gelatooo jiji. Tatata bala tu bappleees po kass pepete bee do bee do bee do pepete jeje. Baboiii daa bananaaaa poulet tikka masala. Chasy potatoooo po kass hana dul sae. Tatata bala tu tulaliloo me want bananaaa! Tatata bala tu poulet tikka masala jiji hana dul sae. Po kass underweaaar potatoooo pepete gelatooo gelatooo potatoooo tulaliloo pepete daa. Tatata bala tu belloo! Aaaaaah aaaaaah jeje. Poulet tikka masala tulaliloo jiji jiji poopayee.`;

let three = `Ti aamoo! para tú jeje poopayee butt potatoooo belloo! Potatoooo ti aamoo! Baboiii. Me want bananaaa! gelatooo potatoooo wiiiii wiiiii baboiii hahaha ti aamoo! Aaaaaah gelatooo tatata bala tu. Ti aamoo! chasy para tú wiiiii potatoooo uuuhhh. Ti aamoo! potatoooo belloo! Bananaaaa hana dul sae potatoooo poopayee bananaaaa para tú aaaaaah. Tank yuuu! tulaliloo chasy pepete po kass baboiii aaaaaah belloo! Underweaaar.`;

// change paragraph text and colors
function content() {
    document.getElementById("three").innerHTML = one;
    document.getElementById("three").style.color = "blue";
    document.getElementById("three").style.backgroundColor = "yellow";
}

function contentTwo() {
    document.getElementById("five").innerHTML = two;
    document.getElementById("five").style.color = "blue";
    document.getElementById("five").style.backgroundColor = "yellow";
}

function contentThree() {
    document.getElementById("six").innerHTML = three;
    document.getElementById("six").style.color = "blue";
    document.getElementById("six").style.backgroundColor = "yellow";
}

// title colors ant font
function colorsAndFont() {
    document.getElementsByTagName("H3")[0].setAttribute("class", "colors");
}