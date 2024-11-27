import emailjs from "emailjs-com";

const SERVICE_ID = "service_9uszkld";
const TEMPLATE_ID = "template_cxiaxgc";
const USER_ID = "Vw13NEgzQkcxli8Vk";

function sendMessage(data) {
  return emailjs.sendForm(
    SERVICE_ID,         
    TEMPLATE_ID,
    data,
    USER_ID         
  )
}

export { sendMessage };
