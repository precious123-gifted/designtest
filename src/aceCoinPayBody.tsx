import React, { useEffect, useRef, useState } from 'react';
import { AceStyle } from './aceCoinPayBody.styled';
import radalBG from './assets/radal-stroke.png'
import aceCoinLogo from './assets/acecoinlogo.png'
import Pencil from './assets/pencil.png'
import masterCardIcon from './assets/mastercard.png'
import masterCardLogo from './assets/mastercardlogo.png'
import menuGrid from './assets/menu-grid.png'
import Tick from './assets/tick.png'


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
const [passwordValue, setPasswordValue] = useState('');


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



const hideNumbersAndDisplayDot = (ref: React.RefObject<HTMLInputElement>) => {
  const inputElement = ref.current;

  if (inputElement) {
    inputElement.addEventListener('input', () => {
      const value = inputElement.value;
      const dots = value.replace(/[0-9]/g, '.');
      inputElement.value = dots;
    });
  }
};




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





useEffect(()=>{

  setCardNumberInputToOnlyAcceptNumber(cardNumberRef1)
  setCardNumberInputToOnlyAcceptNumber(cardNumberRef2)
  setCardNumberInputToOnlyAcceptNumber(cardNumberRef3)
  setCardNumberInputToOnlyAcceptNumber(cardNumberRef4)
  setCardNumberInputToOnlyAcceptNumber(cvvNumberRef)

  setCardExpiryNumberInputToOnlyAcceptTwoNumbers(expiryNumberRef1) 
  setCardExpiryNumberInputToOnlyAcceptTwoNumbers(expiryNumberRef2)

  setPasswordNumberInputToOnlyAcceptNumbers(passwordNumberRef)

  hideNumbersAndDisplayDot(passwordNumberRef)

  enableCardNumberInput(editIcon)
  enableCardNumberInput(editText)

  disableCardNumberInputWhenClickedOnCheck()

  focusOnInput(cvvMenu,cvvNumberRef)
  focusOnInput(passwordMenu,passwordNumberRef)
})


  return (
    <AceStyle>
    <div ref={aceRef} className='body h-screen w-screen grid place-items-center'>

<div className="content bg-backgroundColor h-[40vw] w-[75%]  flex justify-between items-center ">

<div className="section1  w-[65%] h-full flex flex-col justify-between">
<div className='headSection w-full h-[10%]  flex justify-between items-center'>  <div className="logoDiv flex items-center"><img src={aceCoinLogo} alt="" className='w-[11vw] object-contain  aspect-[4/3] '  /></div>   <div className="numberDiv text-[1.2vw] text-backgroundColor flex items-center"><div className="leftNumbers flex"><span className='grid mr-[0.2vw] place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>0</span><span className='grid place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>1</span></div><span className='text-navyBlue ml-[0.3vw] mr-[0.3vw] '>:</span><div className="rightNumbers flex"><span className='grid mr-[0.2vw] place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>1</span><span className='grid place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>9</span></div></div>  </div>
<div className='cardNumberSection w-full h-[20%]  flex flex-col justify-between '>
<div className="cardNumberSection-1 w-full h-[47%] flex  justify-between items-center"><div className="cardNumberTextDiv h-full flex flex-col justify-between"><div className="heading text-navyBlue text-[1.2vw] font-semibold">Card Number</div><div className="enterCardNumber text-lightestBlue text-[1vw]">Enter the 16-digit card number on the card</div></div> <div className="editButtonDiv flex "><span className='mr-[0.6vw]'><img ref={editIcon} src={Pencil} alt="" className='cursor-pointer w-[2vw] object-contain  aspect-[4/3]'/></span><span ref={editText} className=' cursor-pointer text-customBlue text-[1.2vw] '>Edit</span></div></div>

<div className="cardNumberSection-2 w-full h-[70%] flex items-end"><div className="cardNumberContainer bg-backgroundColor w-full h-[80%] border border-ash rounded-[0.6vw] flex justify-center">
  
 <div className="content w-[95%] h-full flex justify-between items-center"> <div className="masterCardIconAndLogoDiv w-[60%] flex"><img src={masterCardIcon} alt="" className='w-[2vw] object-contain  aspect-[4/3] mr-[1.8vw]' />  <div className="numbers text-[1.2vw] text-cardNumberColor w-[80%] flex justify-between"><input type="number"  disabled={true} name="" id=""  ref={cardNumberRef1} placeholder='2412' className='input focus:text-navyBlue w-[3vw] border-none outline-none -webkit-appearance-none m-0'/><span className='text-navyBlue' >-</span><input type="number" disabled={true} name="" id=""  ref={cardNumberRef2} placeholder='7512' className='input focus:text-navyBlue   w-[3vw] border-none outline-none -webkit-appearance-none m-0'/><span className='text-navyBlue' >-</span><input type="number" disabled={true} name="" id=""  ref={cardNumberRef3} placeholder='3412' className='input focus:text-navyBlue  w-[3vw] border-none outline-none -webkit-appearance-none m-0'/><span className='text-navyBlue' >-</span><input type="number" disabled={true} name="" id=""  ref={cardNumberRef4} placeholder='3456' className='input focus:text-navyBlue  w-[3vw] border-none outline-none -webkit-appearance-none m-0'/></div>  </div>  <div className="tick"><img src={Tick}  ref={check} alt="" className='cursor-pointer w-[2vw] object-contain  aspect-[4/3]' /></div>  </div> 
  
  </div></div>
</div>

<div className='cvvNumberSection h-[10%] w-full  flex justify-between items-center'>
<div className="cvvHeadingDiv  h-full w-[40%] flex flex-col justify-between"> <div className="cvvHeading heading text-navyBlue text-[1.2vw] font-semibold ">CVV Number</div> <div className="3To4DigitNumber  text-lightestBlue text-[1vw]">Enter the 3 0r 4 digit number on the card</div> </div>
<div className="cvvNumberBox  w-[50%] h-full rounded-[0.6vw] border border-ash pr-[1.7vw]  flex justify-end "> <div className="cvvNumberInputDiv w-[50%] flex justify-between items-center"> <input type="number"   name="" id=""  ref={cvvNumberRef} placeholder='2412' className='input text-navyBlue text-[1.2vw] w-[3vw] border-none outline-none -webkit-appearance-none m-0'/> <img ref={cvvMenu} src={menuGrid} alt="" className='cursor-pointer w-[3vw] object-contain  aspect-[4/3]'/> </div> </div>
</div>

<div className='expiryDateSection  h-[10%] w-ful flex justify-between items-center'>
<div className="expiryDateHeadingDiv  h-full w-[40%] flex flex-col justify-between">  <div className="expiryDateHeading text-navyBlue text-[1.2vw] font-semibold ">Expiry Date</div> <div className="expiryDateWriteUp  text-lightestBlue text-[1vw] ">Enter the expiration date of the card</div> </div>
<div className="expiryDateDivs flex justify-between items-center   w-[50%] h-full text-navyBlue"> <div className="leftDateBox rounded-[0.6vw] border border-ash w-[40%] h-full grid place-items-center"><input type="number"   name="" id=""  ref={expiryNumberRef1} placeholder='09' className='input text-navyBlue text-[1.2vw] w-[1.5vw] border-none outline-none -webkit-appearance-none m-0'/></div> / <div className="rightDateBox rounded-[0.6vw] bg-lightBlue border-2 border-customBlue w-[40%] h-full grid place-items-center"><input type="number"   name="" id=""  ref={expiryNumberRef2} placeholder='23' className='input bg-lightBlue text-navyBlue text-[1.2vw] w-[1.5vw] border-none outline-none -webkit-appearance-none m-0'/></div> </div>


</div>

<div className='passwordSection h-[10%] w-full flex justify-between items-center'>
<div className="passwordHeadingDiv  h-full w-[40%] flex flex-col justify-between"> <div className="passwordHeading  text-navyBlue text-[1.2vw] font-semibold">Password</div> <div className="passwordWriteUp  text-lightestBlue text-[1vw]">Enter your Dynamic password</div> </div>
<div className="passwordBox  w-[50%] h-full rounded-[0.6vw] border border-ash pr-[1.7vw]  flex justify-end "> <div className="passwordNumberInputDiv w-[95%] flex justify-between items-center"> <input type="password"   name="" id=""  ref={passwordNumberRef} value={passwordValue} placeholder='**********' className='input  text-navyBlue text-[1.2vw] w-[9vw] border-none outline-none -webkit-appearance-none m-0 flex items-center'/> <img ref={passwordMenu} src={menuGrid} alt="" className='cursor-pointer w-[3vw] object-contain  aspect-[4/3]'/> </div> </div>

</div>

<div className='paymentButton transition-all ease-in duration-[0.5s]  w-full h-[10%] bg-customBlue rounded-[0.6vw] grid place-items-center text-[1.2vw] text-backgroundColor   hover:bg-navyBlue font-semibold cursor-pointer'>Pay Now</div>


</div>

<div className="section2  w-[30%] h-full flex flex-col justify-between items-center">
<div className="topLayer rounded-[0.6vw] h-[6%] w-[20%] bg-customBlue">

</div>



<div className="bottomLayer relative h-[84%] w-full bg-ash rounded-[0.6vw] flex flex-col justify-between items-center">

<div  className="cardSection bg-cover bg-center h-[61%] w-[67%] bg-white bg-opacity-80 rounded-[0.6vw]-lg flex flex-col justify-between items-center  backdrop-blur-lg absolute top-[-18%]">
 <div className="backgroundDiv relative w-[87%] h-full overflow-hidden flex flex-col justify-between items-center"><img src={radalBG} alt=""  className='max-w-[200%] mt-[25%] absolute '/>
 <div className="chipAndWifiDiv h-[22%] w-full flex justify-between items-end"> <div className="chip">chip</div> <div className="wifi">wifi</div> </div>

<div className="cardDetailsDiv flex flex-col justify-between h-[40%] w-full">

<div className='cardNameAndNumberSection flex flex-col justify-between h-[45%] w-full'>
  <div className='nameDiv'>john snow</div>
<div className='cardNumberDiv'>****2490</div>
</div>

<div className="expiryDateAndLogoSection flex justify-between h-[33%]">
<div className="expiryDateDiv">09/22</div>  <div className="masterCardLogoDiv">logo</div>


</div>


</div>
 
 </div> 
 
 </div>


<div className="productDetailsDiv absolute w-[70%] h-[27%] top-[47%] flex flex-col justify-between ">
<div className='company w-full flex justify-between '> <div className="title">Company</div>  <div className="attachment">hjhj</div> </div>
<div className='orderNumber  flex justify-between'><div className="title">Order Number</div>  <div className="attachment">3467322</div> </div>
<div className='product  flex justify-between'><div className="title">Product</div>  <div className="attachment">Macbook Air</div> </div>
<div className='vat  flex justify-between'><div className="title">VAT(20%)</div>  <div className="attachment">$100.00</div> </div>

</div>

<div className="dottedSection absolute top-[77%] w-full  flex justify-between items-center"><div className="circle rounded-[0.6vw]-full bg-backgroundColor w-[30px] h-[25px] ml-[-5%]"></div><div className="dash w-full border  border-black  border-dashed"></div><div className="circle mr-[-5%] rounded-[0.6vw]-full bg-backgroundColor w-[30px] h-[25px]"></div></div>

<div className="extraPaymentDiv absolute flex justify-between items-center h-[12%] w-[70%] top-[85%] bg-slate-500">   
<div className="writeUpAndNumberSection flex flex-col justify-between">   
<div className="writeUp">You have to pay</div>
<div className="number">$549.99</div>
</div> 
 <div className="icon">paper</div>

</div>


</div>


</div>


</div>

    </div>
    
    </AceStyle>
  );
}
