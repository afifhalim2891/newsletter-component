const emailForm = document.getElementById('form-email');
const input = document.getElementById('input-email');
const submitBtn = document.getElementById('submit-email');
const errMsg = document.getElementById('error-msg');
const contentContainer = document.getElementById('content-container');
const successMsgContainer = document.getElementById('success-message');
const dismissBtn = document.getElementById('dismiss-btn');


const setInputState = (state) => {

    if(state === 'error'){
        input.style.backgroundColor = '#fdefec';
        input.style.borderColor = '#ec5d42';
        input.style.color = '#ec5d42';
    } else {
        input.style.backgroundColor = '#fff';
        input.style.borderColor = '#9ca3af';
        input.style.color = '#000';
    }

}


const submitEmailHandler = (e) => {
    e.preventDefault();

   const isContainText = input.value !== "";
   const textHasSpace = input.value.includes(" ");
   const textHasAtSymbol = input.value.includes("@") && input.value.includes(".com");

   //input validation
   if(!isContainText || textHasSpace || !textHasAtSymbol){
    errMsg.textContent = 'Valid email required!';
    setInputState('error');
    return;
   }
   
    errMsg.textContent = '';
    setInputState();
    input.value = '';

   contentContainer.style.display = 'none';
   successMsgContainer.style.display= 'block'
  
}



emailForm.addEventListener('submit',submitEmailHandler);
dismissBtn.addEventListener('click', ()=>{
    successMsgContainer.style.display = 'none';
    contentContainer.style.display = 'flex';
})
