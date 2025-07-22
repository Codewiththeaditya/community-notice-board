let createpostbtn = document.querySelector(".submit-btn");
let noticeContainer = document.querySelector(".notices");
let latestnotice = document.querySelector(".latest-notice");
let noticeTitlediv = document.querySelector(".notice-title");
// let noticeAuthordiv = document.querySelector(".notice-author");


createpostbtn.addEventListener("click",()=>{
    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#content").value.trim();
    const name = document.querySelector("#name").value.trim();
    const category = document.querySelector("#category").value;
    console.log("pressed",category);

    if(!title || !content || !name){
        console.log("Incomplete enteries");
        alert("Incomplete enteries !");
    }else{
        latestnotice.classList.add("old-notice");
        latestnotice.classList.remove("latest-notice");


        let newNotice = document.createElement("div");
        newNotice.classList.add("notice-card","latest-notice");


        let categoryName = document.createElement("div")
        categoryName.classList.add("category-name-div");

        let author = document.createElement("span");
        let noticeAuthordiv = document.createElement("div");

        
        //for heading/title of new notice
        let titlediv = document.createElement("div");
        let noClassDiv = document.createElement("div");
        let heading = document.createElement("h3");
        heading.innerText = title;
        titlediv.classList.add("notice-title");
        noClassDiv.prepend(heading);
        titlediv.prepend(noClassDiv);


        //for category :
        categoryName.innerText = category;
        titlediv.append(categoryName);
        categoryName.classList.add("category-name-div");
        
        //for author :
        author.innerText = "By " + name;
        noticeAuthordiv.classList.add("notice-author");
        noticeAuthordiv.prepend(author);
        noClassDiv.append(noticeAuthordiv);
        titlediv.prepend(noClassDiv);




        //for body of new notice
        let bodydiv = document.createElement("div");
        let body = document.createElement("p");
        body.innerText = content;
        bodydiv.classList.add("notice-body");
        bodydiv.prepend(body);

        //append body and title in newNotice div 
        newNotice.prepend(titlediv);
        newNotice.append(bodydiv);

        //added newNotice div in noticeContainer
        noticeContainer.prepend(newNotice);
    }

});




