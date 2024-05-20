const buttonEl = document.getElementById('btn');

const birthdayEl = document.getElementById('birthday');

const resultEl = document.getElementById('result');

function calculateAge(){
    const birthValue = birthdayEl.value;

    if(birthValue === ""){
        alert("please enter your birthday");
    }else{
        const age = getAge(birthValue)
        resultEl.innerText = `Your age is ${age}  ${age > 1 ? "years" : "years"} old`
    }
}

function getAge(birthValue){
  const currentDate = new Date()
  const birthdayDate = new Date(birthValue);
  const age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if(month<0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
    age--
  }

  return age;
}

buttonEl.addEventListener("click", calculateAge)