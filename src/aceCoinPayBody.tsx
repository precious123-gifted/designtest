import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Power2 } from 'gsap';
import { AceStyle } from './aceCoinPayBody.styled';
import radalBG from './assets/radal-stroke.png'
import aceCoinLogo from './assets/acecoinlogo.png'
import Pencil from './assets/pencil.png'
import masterCardIcon from './assets/mastercard.png'
import masterCardLogo from './assets/mastercardlogo.png'
import menuGrid from './assets/menu-grid.png'
import Tick from './assets/tick.png'
import chip from './assets/chip.png'
import wifi from './assets/wifi.png'
import appleIcon from './assets/apple.png'
import receipt from './assets/receipt.png'






export default function AceCoinPay() {


const aceRef = useRef<HTMLDivElement>(null)
const cardNumberRef1 = useRef<HTMLInputElement>(null)
const cardNumberRef2 = useRef<HTMLInputElement>(null)
const cardNumberRef3 = useRef<HTMLInputElement>(null)
const cardNumberRef4 = useRef<HTMLInputElement>(null)
const cvvNumberRef = useRef<HTMLInputElement>(null)
const expiryNumberRef1 = useRef<HTMLInputElement>(null)
const expiryNumberRef2 = useRef<HTMLInputElement>(null)
const passwordNumberRef = useRef<HTMLInputElement>(null)
const editIcon = useRef<HTMLImageElement>(null)
const editText = useRef<HTMLSpanElement>(null)
const check = useRef<HTMLImageElement>(null)
const cvvMenu = useRef<HTMLImageElement>(null)
const passwordMenu = useRef<HTMLImageElement>(null)
const paymentButtonRef = useRef<HTMLButtonElement>(null)
const logoDiv = useRef<HTMLDivElement>(null)
const logo = useRef<HTMLImageElement>(null)
const timerDiv = useRef<HTMLDivElement>(null)
const cardNumberDiv = useRef<HTMLDivElement>(null)
const cvvDiv = useRef<HTMLDivElement>(null)
const expiryDiv = useRef<HTMLDivElement>(null)
const passwordDiv = useRef<HTMLDivElement>(null)
const blueStyleDiv = useRef<HTMLDivElement>(null)
const cardBackgroundDiv = useRef<HTMLDivElement>(null)
const cardDiv = useRef<HTMLDivElement>(null)
const productDetailsDiv = useRef<HTMLDivElement>(null)
const dashDiv = useRef<HTMLDivElement>(null)
const prizeDetailsDiv = useRef<HTMLDivElement>(null)










function setCardNumberInputToOnlyAcceptNumber(ref: React.RefObject<HTMLInputElement>) {
  const inputElement = ref.current;

  if (inputElement) {
    inputElement.addEventListener('keydown', (event) => {
      if (
        !(
          event.key === 'Backspace' ||
          event.key === 'Delete' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight' ||
          event.key === 'Tab' ||
          (event.key >= '0' && event.key <= '9')
        )
      ) {
        event.preventDefault();
      }
    });

    inputElement.style.setProperty('appearance', 'textfield');

    inputElement.addEventListener('input', () => {
      const value = inputElement.value;
      if (value.length > 4) {
        inputElement.value = value.slice(0, 4);
      }
    });
  }
}



function setCardExpiryNumberInputToOnlyAcceptTwoNumbers(ref: React.RefObject<HTMLInputElement>) {
  const inputElement = ref.current;

  if (inputElement) {
    inputElement.addEventListener('keydown', (event) => {
      if (
        !(
          event.key === 'Backspace' ||
          event.key === 'Delete' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight' ||
          event.key === 'Tab' ||
          (event.key >= '0' && event.key <= '9')
        )
      ) {
        event.preventDefault();
      }
    });

    inputElement.style.setProperty('appearance', 'textfield');

    inputElement.addEventListener('input', () => {
      const value = inputElement.value;
      if (value.length > 2) {
        inputElement.value = value.slice(0, 2);
      }
    });
  }
}


function setPasswordNumberInputToOnlyAcceptNumbers(ref: React.RefObject<HTMLInputElement>) {
  const inputElement = ref.current;

  if (inputElement) {
    inputElement.addEventListener('keydown', (event) => {
      if (
        !(
          event.key === 'Backspace' ||
          event.key === 'Delete' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight' ||
          event.key === 'Tab' ||
          (event.key >= '0' && event.key <= '9')
        )
      ) {
        event.preventDefault();
      }
    });

    inputElement.style.setProperty('appearance', 'textfield');

  }
}



const enableCardNumberInput = (ref: React.RefObject<HTMLImageElement | HTMLSpanElement>) => {
  const editButton = ref.current;

  if (editButton) {
    editButton.addEventListener('click', () => {
      cardNumberRef4.current?.removeAttribute('disabled');
      cardNumberRef3.current?.removeAttribute('disabled');
      cardNumberRef2.current?.removeAttribute('disabled');
      cardNumberRef1.current?.removeAttribute('disabled');
      cardNumberRef1.current?.focus();
    });
  }
};


const disableCardNumberInputWhenClickedOnCheck = () => {
  const checkButton = check.current;

  if (checkButton) {
    checkButton.addEventListener('click', () => {
      cardNumberRef4.current?.setAttribute('disabled', 'disabled');
      cardNumberRef3.current?.setAttribute('disabled', 'disabled');
      cardNumberRef2.current?.setAttribute('disabled', 'disabled');
      cardNumberRef1.current?.setAttribute('disabled', 'disabled');
    });
  }
};

const focusOnInput = (ref: React.RefObject<HTMLImageElement>,input: React.RefObject<HTMLInputElement>) => {
  const menuGrid = ref.current;
  let numberInput = input
  if (menuGrid) {
    menuGrid.addEventListener('click', () => {
      numberInput.current?.focus();
    });
  }
};

const sendPromtToUsersAskingHowTheyEnjoyedTheirExperienceUsingAceCoinPayPlatform = () => {
  let paymentButton = paymentButtonRef.current;
  
  if (paymentButton) {
    paymentButton.addEventListener('click', () => {
     prompt(`Thank you for using this platform , i hope you enjoyed your experience \u{1F642};`)
    });
  }
};


const displayDivWhenPageLoads = (div:React.RefObject<HTMLDivElement | HTMLButtonElement | HTMLImageElement > ,seconds:number,timeout:number) =>{
let Div = div.current
let Sec = seconds

if(Div){
  setTimeout(() => {
    gsap.to(Div,Sec,{opacity : 1,marginTop : 0,marginRight : 0,marginLeft : 0,ease: 'Power2.out'})
  }, timeout);



}

}


let renderAnimationStyles = useEffect(()=>{
displayDivWhenPageLoads(logoDiv,0.7,0)
displayDivWhenPageLoads(logo,0.7,0)
displayDivWhenPageLoads(cardNumberDiv,0.7,0)
displayDivWhenPageLoads(cvvDiv,0.7,0)
displayDivWhenPageLoads(expiryDiv,0.7,0)
displayDivWhenPageLoads(passwordDiv,0.7,0)
displayDivWhenPageLoads(paymentButtonRef,0.7,0)


displayDivWhenPageLoads(cardBackgroundDiv,1,1500)
displayDivWhenPageLoads(dashDiv,1,1500)
displayDivWhenPageLoads(cardDiv,1,2300)
displayDivWhenPageLoads(blueStyleDiv,1,2800)
displayDivWhenPageLoads(productDetailsDiv,1,2900)
displayDivWhenPageLoads(prizeDetailsDiv,1,3200)



})


let inputFunctionalities = useEffect(()=>{

  setCardNumberInputToOnlyAcceptNumber(cardNumberRef1)
  setCardNumberInputToOnlyAcceptNumber(cardNumberRef2)
  setCardNumberInputToOnlyAcceptNumber(cardNumberRef3)
  setCardNumberInputToOnlyAcceptNumber(cardNumberRef4)
  setCardNumberInputToOnlyAcceptNumber(cvvNumberRef)

  setCardExpiryNumberInputToOnlyAcceptTwoNumbers(expiryNumberRef1) 
  setCardExpiryNumberInputToOnlyAcceptTwoNumbers(expiryNumberRef2)

  setPasswordNumberInputToOnlyAcceptNumbers(passwordNumberRef)



  enableCardNumberInput(editIcon)
  enableCardNumberInput(editText)

  disableCardNumberInputWhenClickedOnCheck()

  focusOnInput(cvvMenu,cvvNumberRef)
  focusOnInput(passwordMenu,passwordNumberRef)

  sendPromtToUsersAskingHowTheyEnjoyedTheirExperienceUsingAceCoinPayPlatform()
})


  return (
    <AceStyle>
    <div ref={aceRef} className='body h-screen  portrait:h-[370vw]  w-screen grid place-items-center'>

<div className="content bg-backgroundColor h-[40vw] portrait:h-[97%] w-[75%]  portrait:w-[90vw]  portrait:flex-col flex justify-between items-center ">

<div className="section1  w-[65%] portrait:w-[100%] portrait:mb-[30vw] h-full flex flex-col justify-between">
<div  ref={logoDiv} className='opacity-0 landscape:mt-[-5vw] headSection  w-full h-[10%]  portrait:mb-[6vw]  portrait:sm:mb-[8vw] flex justify-between items-center'>  <div  className="logoDiv   flex items-center"><img src={aceCoinLogo} ref={logo} alt="" className='mr-[-26vw]  w-[11vw] portrait:w-[40vw] object-contain  aspect-[4/3] '  /></div>   <div ref={timerDiv} className=" numberDiv text-[1.2vw] portrait:text-[5vw] text-backgroundColor flex items-center"><div className="leftNumbers flex"><span className='grid mr-[0.2vw]  portrait:mr-[1vw]  place-items-center h-[2.5vw] portrait:h-[8vw] w-[1.9vw] portrait:w-[5vw] rounded-[0.3vw]  portrait:rounded-[0.5vw]  bg-navyBlue'>0</span><span className='grid    place-items-center h-[2.5vw] portrait:h-[8vw] w-[1.9vw] portrait:w-[5vw] rounded-[0.3vw] portrait:rounded-[0.5vw]  bg-navyBlue'>1</span></div><span className='text-navyBlue   ml-[1vw] mr-[1vw] '>:</span><div className="rightNumbers flex"><span className='grid  mr-[0.2vw] portrait:mr-[1vw]  place-items-center h-[2.5vw] portrait:h-[8vw] w-[1.9vw] portrait:w-[5vw] rounded-[0.3vw] portrait:rounded-[0.5vw]  bg-navyBlue'>1</span><span className='grid  place-items-center h-[2.5vw] portrait:h-[8vw] w-[1.9vw] portrait:w-[5vw] rounded-[0.3vw] portrait:rounded-[0.5vw]  bg-navyBlue'>9</span></div></div>  </div>
<div ref={cardNumberDiv} className='opacity-0 portrait:ml-[-100vw] landscape:mt-[-5vw] cardNumberSection w-full h-[20%]  portrait:h-[13%]   portrait:mb-[6vw] flex flex-col justify-between '>
<div className="cardNumberSection-1 w-full h-[68%] portrait:h-[40%] flex  justify-between items-center"><div className="cardNumberTextDiv h-full flex flex-col justify-between"><div className="heading text-navyBlue text-[1.2vw] portrait:text-[4vw] font-semibold">Card Number</div><div className="enterCardNumber text-lightestBlue text-[1vw]  portrait:text-[3.2vw]">Enter the 16-digit card number on the card</div></div> <div className="editButtonDiv flex "><span className='mr-[0.6vw]'><img ref={editIcon} src={Pencil} alt="" className='cursor-pointer w-[2vw]  portrait:w-[6vw] object-contain  aspect-[4/3]'/></span><span ref={editText} className=' cursor-pointer text-customBlue text-[1.2vw]  portrait:text-[3.8vw]'>Edit</span></div></div>

<div className="cardNumberSection-2 w-full h-[70%]   flex items-end"><div className="cardNumberContainer bg-backgroundColor w-full h-[100%] portrait:h-[12vw]  border border-ash bg-blueAsh rounded-[0.6vw] portrait:rounded-[0.9vw]  flex justify-center">

 <div className="content w-[95%] h-full flex justify-between items-center"> <div className="masterCardIconAndLogoDiv w-[60%] flex"><img src={masterCardIcon} alt="" className='w-[2vw]  portrait:w-[7vw] object-contain  aspect-[4/3] mr-[1.8vw] portrait:mr-[5vw] ' />  <div className="numbers text-[1.2vw] portrait:text-[4vw] text-cardNumberColor w-[80%]     flex justify-between"><input type=""  disabled={true} name="" id=""  ref={cardNumberRef1} placeholder='2412' className='input bg-blueAsh focus:text-navyBlue w-[3vw] portrait:w-[10vw]  border-none outline-none '/><span className='text-navyBlue portrait:mx-[4%]' >-</span><input type="" disabled={true} name="" id=""  ref={cardNumberRef2} placeholder='7512' className='input bg-blueAsh focus:text-navyBlue   w-[3vw] portrait:w-[10vw]  border-none outline-none '/><span className='text-navyBlue portrait:mx-[4%]' >-</span><input type="" disabled={true} name="" id=""  ref={cardNumberRef3} placeholder='3412' className='input bg-blueAsh focus:text-navyBlue  w-[3vw] portrait:w-[10vw]  border-none outline-none '/><span className='text-navyBlue portrait:mx-[4%]'  >-</span><input type="" disabled={true} name="" id=""  ref={cardNumberRef4} placeholder='3456' className='input bg-blueAsh focus:text-navyBlue  w-[3vw] portrait:w-[10vw]  border-none outline-none '/></div>  </div>  <div className="tick"><img src={Tick}  ref={check} alt="" className='cursor-pointer w-[2vw] portrait:w-[6vw] object-contain  aspect-[4/3]' /></div>  </div> 
  
  </div></div>
</div>

<div ref={cvvDiv}  className='  opacity-0 portrait:ml-[-100vw] landscape:mt-[-5vw] cvvNumberSection h-[10%] portrait:h-[13%] portrait:mb-[6vw] w-full  flex portrait:flex-col justify-between items-center'>
<div className="cvvHeadingDiv  h-full w-[40%]  portrait:h-[40%] portrait:w-full flex flex-col justify-between "> <div className="cvvHeading heading text-navyBlue text-[1.2vw] portrait:text-[4vw] font-semibold ">CVV Number</div> <div className="3To4DigitNumber  text-lightestBlue text-[1vw] portrait:text-[3.2vw]">Enter the 3 or 4 digit number on the card</div> </div>
<div className="cvvNumberBox  w-[50%]  portrait:w-full h-full  portrait:h-[12vw] rounded-[0.6vw] portrait:rounded-[0.9vw] border border-ash pr-[1.7vw]  flex justify-end "> <div className="cvvNumberInputDiv w-[50%]     portrait:w-[80%] flex justify-between items-center"> <input type=""   name="" id=""  ref={cvvNumberRef} placeholder='2412' className='input text-navyBlue text-[1.2vw] portrait:text-[4vw]  w-[3vw] portrait:w-[10vw] border-none outline-none '/> <img ref={cvvMenu} src={menuGrid} alt="" className='cursor-pointer w-[3vw] portrait:w-[8vw] object-contain  aspect-[4/3]'/> </div> </div>
</div>

<div ref={expiryDiv} className='  opacity-0  portrait:ml-[-100vw] landscape:mt-[-5vw] expiryDateSection   h-[10%]  portrait:h-[13%] portrait:mb-[6vw] w-ful flex  portrait:flex-col justify-between items-center portrait:items-start'>
<div className="expiryDateHeadingDiv  h-full w-[40%]  portrait:h-[40%] portrait:w-full flex flex-col justify-between">  <div className="expiryDateHeading text-navyBlue text-[1.2vw] portrait:text-[4vw]  font-semibold ">Expiry Date</div> <div className="expiryDateWriteUp  text-lightestBlue text-[1vw]  portrait:text-[3.2vw] ">Enter the expiration date of the card</div> </div>
<div className="expiryDateDivs flex justify-between items-center   w-[50%] h-full  portrait:h-[12vw] text-navyBlue"> <div className="leftDateBox rounded-[0.6vw] portrait:rounded-[0.9vw] border border-ash w-[40%] h-full grid place-items-center portrait:text-[4vw]"><input type=""   name="" id=""  ref={expiryNumberRef1} placeholder='09' className='input text-navyBlue text-[1.2vw]  portrait:text-[4vw] w-[1.5vw]  portrait:w-[5vw] border-none outline-none '/></div> / <div className="rightDateBox rounded-[0.6vw] portrait:rounded-[0.9vw] bg-lightBlue border-2 border-customBlue w-[40%] h-full grid place-items-center"><input type=""   name="" id=""  ref={expiryNumberRef2} placeholder='23' className='input bg-lightBlue text-navyBlue text-[1.2vw] portrait:text-[4vw] w-[1.5vw] portrait:w-[5vw] border-none outline-none '/></div> </div>


</div>

<div ref={passwordDiv}  className='opacity-0  portrait:ml-[-100vw] landscape:mt-[-5vw] passwordSection h-[10%]  portrait:h-[13%] portrait:mb-[13vw] w-full flex   portrait:flex-col justify-between items-center  portrait:items-start'>
<div className="passwordHeadingDiv  h-full w-[40%]  portrait:h-[40%] portrait:w-full flex flex-col justify-between"> <div className="passwordHeading  text-navyBlue text-[1.2vw]  portrait:text-[4vw] font-semibold">Password</div> <div className="passwordWriteUp  text-lightestBlue text-[1vw] portrait:text-[3.2vw]  ">Enter your Dynamic password</div> </div>
<div className="passwordBox  w-[50%] portrait:w-full h-full  portrait:h-[12vw]  rounded-[0.6vw] portrait:rounded-[0.9vw] border border-ash pr-[1.7vw]  flex justify-end "> <div className="passwordNumberInputDiv w-[95%] flex justify-between items-center"> <input type="password"   name="" id=""  ref={passwordNumberRef}  placeholder='**********' className='input  text-navyBlue text-[1.2vw] portrait:text-[4vw]  w-[9vw]  portrait:w-[30vw] border-none outline-none  flex items-center'/> <img ref={passwordMenu} src={menuGrid} alt="" className='cursor-pointer w-[3vw]  portrait:w-[8vw]   object-contain  aspect-[4/3]'/> </div> </div>

</div>

<button  ref={paymentButtonRef} className=' opacity-0  portrait:ml-[-100vw] landscape:mt-[-5vw] paymentButtonRef transition-all ease-in duration-[0.5s]  w-full h-[10%]  portrait:h-[15vw] bg-customBlue rounded-[0.6vw]  portrait:rounded-[1.4vw] grid place-items-center text-[1.2vw]  portrait:text-[5vw]  text-backgroundColor   hover:bg-navyBlue font-semibold cursor-pointer'>Pay Now</button>


</div>

<div className="section2  w-[30%] portrait:w-full h-full flex flex-col justify-between items-center">
<div ref={blueStyleDiv} className=" opacity-0  topLayer rounded-[0.2vw] h-[6%] w-[20%] bg-customBlue">

</div>



<div ref={cardBackgroundDiv} className=" opacity-0 bottomLayer relative h-[84%] w-full bg-ash rounded-[0.6vw] portrait:rounded-[2vw] flex flex-col justify-between items-center">

<div ref={cardDiv} className=" opacity-0 cardSection bg-cover bg-center pb-3 h-[63%] w-[67%] bg-white bg-opacity-80 rounded-[0.9vw] portrait:rounded-[3vw] flex flex-col justify-between items-center  backdrop-blur-lg absolute top-[-18%]">
 <div className="backgroundDiv relative w-[87%] h-full overflow-hidden flex flex-col justify-between items-center"><img src={radalBG} alt=""  className='max-w-[200%] mt-[25%] absolute '/>

<div className="contentDiv h-full w-full flex flex-col justify-between absolute">
<div className="chipAndWifiDiv  h-[22%] w-full flex justify-between items-center mt-[2vw] portrait:mt-[6vw]"> <img src={chip} alt="" className='w-[2.4vw] portrait:w-[10vw] object-contain  aspect-[1/3]'/> <div className="wifi"><img src={wifi} alt="" className='w-[2.5vw]  portrait:w-[10vw] object-contain  aspect-[4/3]'/></div> </div>

<div className="cardDetailsDiv flex flex-col justify-between h-[45%] w-full">

<div className='cardNameAndNumberSection flex flex-col justify-between h-[30%] w-full'>
  <div className='nameDiv text-navyBlue text-[1.2vw]  portrait:text-[4vw] '>Jonathan Michael</div>
<div className='cardNumberDiv text-navyBlue text-[1.3vw]  portrait:text-[4vw] font-semibold flex items-center '> <div className="dotDiv flex items-start mb-[1.2vw] portrait:mb-[3.5vw] portrait:sm:mb-[4vw]"><span className='mr-[0.4vw] text-[2vw] portrait:text-[6vw]  '>.</span><span className='mr-[0.4vw]  text-[2vw] portrait:text-[6vw] '>.</span><span className='mr-[0.4vw]  text-[2vw] portrait:text-[6vw] '>.</span><span className='mr-[1.2vw]  text-[2vw] portrait:text-[6vw] '>.</span> </div> <span>2490</span></div>
</div>

<div className="expiryDateAndLogoSection flex justify-between h-[33%]">
<div className="expiryDateDiv  text-navyBlue text-[1.1vw]  portrait:text-[3.7vw] font-[450]">09/22</div>  <div className="masterCardLogoDiv"><img src={masterCardLogo} alt="" className='w-[3vw]  portrait:w-[10vw] object-contain  aspect-[4/3]'/></div>


</div>


</div>

</div>

 

 
 </div> 
 
 </div>


<div ref={productDetailsDiv} className=" opacity-0 productDetailsDiv absolute w-[70%] h-[27%] top-[50%] flex flex-col justify-between ">
<div className='company w-full flex justify-between '> <div className="title text-lightestBlue text-[1.1vw] portrait:text-[4vw]">Company</div>  <div className="attachment flex text-navyBlue text-[1.1vw] portrait:text-[4vw] font-semibold"><img src={appleIcon} alt=""  className='mr-[0.4vw] w-[1.5vw] portrait:w-[6vw] object-contain  aspect-[4/3]'/><span>Apple</span></div> </div>
<div className='orderNumber  flex justify-between'><div className="title text-lightestBlue text-[1.1vw] portrait:text-[4vw]">Order Number</div>  <div className="attachment text-navyBlue text-[1.1vw] portrait:text-[4vw] font-semibold">3467322</div> </div>
<div className='product  flex justify-between'><div className="title text-lightestBlue text-[1.1vw] portrait:text-[4vw]">Product</div>  <div className="attachment text-navyBlue text-[1.1vw] portrait:text-[4vw] font-semibold ">Macbook Air</div> </div>
<div className='vat  flex justify-between'><div className="title text-lightestBlue text-[1.1vw] portrait:text-[4vw]">VAT(20%)</div>  <div className="attachment text-navyBlue text-[1.1vw] portrait:text-[4vw] font-semibold ">$100.00</div> </div>

</div>

<div ref={dashDiv} className=" opacity-0 dottedSection absolute top-[77%] portrait:top-[80%] w-full  flex justify-between items-center "><div className="circle rounded-full bg-backgroundColor w-[2vw]  portrait:w-[8vw] h-[2vw] portrait:h-[8vw]  ml-[-5%]"></div><div className="dash w-full  h-[0.2vw] portrait:h-[0.6vw]  border-navyBlue "></div><div className="circle mr-[-5%] rounded-full bg-backgroundColor w-[2vw] portrait:w-[8vw] h-[2vw] portrait:h-[8vw] "></div></div>

<div ref={prizeDetailsDiv} className=" opacity-0 extraPaymentDiv absolute flex justify-between items-center h-[12%] w-[70%] top-[85%]">   
<div className="writeUpAndNumberSection flex flex-col justify-between">   
<div className="writeUp text-lightestBlue text-[1.1vw] portrait:text-[4vw]">You have to pay</div>
<div className="number"><span className='text-navyBlue text-[1.8vw] portrait:text-[5vw] font-semibold'>$599</span><span className='text-navyBlue text-[1.1vw] portrait:text-[4vw] font-[400]'>.</span><span className='text-navyBlue text-[1.1vw] portrait:text-[4vw] font-[400]'>99</span></div>
</div> 
 <div className="icon"><img src={receipt} alt=""  className='mr-[0.4vw] w-[3vw] portrait:w-[10vw] object-contain  aspect-[4/3]'/></div>

</div>


</div>


</div>


</div>

    </div>
    
    </AceStyle>
  );
}
