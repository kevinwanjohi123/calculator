  function submitFunction(event){
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["AKosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const CC = parseInt(document.getElementById)("century").value
    const YY = parseInt(document.getElementById)("year").value
    const MM = parseInt(document.getElementById)("month").value
    const DD = parseInt(document.getElementById)("day").value


    if(DD > 31 || DD < 1){
      alert("invalid day")
    } else if (MM > 12 || MM < 1){
      alert("invalid month")
    }

    const dayofTheWeek = Math.round(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1) + DD) % 7);
    console.log(dayofTHeWeek)



    let akanName;

    if (gender == "male"){
      akanName = maleNames[dayofTheWeek]

    } else if(gender == "female"){
      akanName = femaleNames[dayofTheWeek]
    }
      else {
      akanName = "invalid gender";
    }

    document.getElementById("output").innerHTML = "Your akan name is: " + akanName
    event.preventDefault()
  };
