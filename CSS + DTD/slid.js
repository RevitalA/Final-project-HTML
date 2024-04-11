function changePic(){
    let pc1 = document.getElementById("p1");
    let pc2 = document.getElementById("p2");
    let pc3 = document.getElementById("p3");
    let pc4 = document.getElementById("p4");
    let pc5 = document.getElementById("p5");

    if (pc1.checked)
    {
        document.getElementById("picslid").src ="/media/IMG-20210726-WA0001.jpg";
    }
    if (pc2.checked)
    {
        document.getElementById("picslid").src ="/media/gg.jpg";
    }
    if (pc3.checked)
    {
        document.getElementById("picslid").src ="/media/gi1.jpg";

    }
    if (pc4.checked)
    {
        document.getElementById("picslid").src ="/media/tab.jpg";

    }
    if (pc5.checked)
    {
        document.getElementById("picslid").src ="/media/bin.jpg";

    }
}

