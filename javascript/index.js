fetch('./files.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    var userNames = data.members;
    // console.log(userNames)
    for(let i = 0; i < userNames.length; i++){
        var signBtn = document.querySelector(".login");
        console.log(userNames[i])
        signBtn.addEventListener("click", function(e){
            e.preventDefault();
            var dataName = userNames[i].name;
            var dataPassword = userNames[i].password;
            // console.log(dataName, dataPassword)
            var loginName = document.querySelector("#email").value;
            var loginPassword = document.querySelector("#password").value;
            if(loginName === dataName && loginPassword === dataPassword){
                alert("Sucessfully LoggedIn")
                return true;
            } else {
                console.log("something else happened")
            }
            // console.log(loginName,loginPassword)
        })
    }
  }).catch(err => {
    // Do something for an error here
  });