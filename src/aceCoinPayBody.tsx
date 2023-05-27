import React from 'react';
import radalBG from './assets/radal-stroke.png'
import aceCoinLogo from './assets/acecoinlogo.png'
import Pencil from './assets/pencil.png'
import masterCardIcon from './assets/mastercard.png'
import masterCardLogo from './assets/mastercardlogo.png'
import Tick from './assets/tick.png'


export default function AceCoinPay() {
  return (
    <>
    <div className='body h-screen w-screen grid place-items-center'>

<div className="content bg-backgroundColor h-[40vw] w-[75%]  flex justify-between items-center ">

<div className="section1  w-[65%] h-full flex flex-col justify-between">
<div className='headSection w-full h-[10%]  flex justify-between items-center'>  <div className="logoDiv flex items-center"><img src={aceCoinLogo} alt="" className='w-[11vw] object-contain  aspect-[4/3] '  /></div>   <div className="numberDiv text-[1.2vw] text-backgroundColor flex items-center"><div className="leftNumbers flex"><span className='grid mr-[0.2vw] place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>0</span><span className='grid place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>1</span></div><span className='text-navyBlue ml-[0.3vw] mr-[0.3vw] '>:</span><div className="rightNumbers flex"><span className='grid mr-[0.2vw] place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>1</span><span className='grid place-items-center h-[2.5vw] w-[1.9vw] rounded bg-navyBlue'>9</span></div></div>  </div>
<div className='cardNumberSection w-full h-[20%]  flex flex-col justify-between '>
<div className="cardNumberSection-1 w-full h-[47%] flex  justify-between items-center"><div className="cardNumberTextDiv h-full flex flex-col justify-between"><div className="heading text-navyBlue text-[1.2vw] font-semibold">Card Number</div><div className="enterCardNumber text-lightestBlue text-[1vw]">Enter the 16-digit card number on the card</div></div> <div className="editButtonDiv flex "><span className='mr-[0.6vw]'><img src={Pencil} alt="" className='w-[2vw] object-contain  aspect-[4/3]'/></span><span className='text-customBlue '>Edit</span></div></div>

<div className="cardNumberSection-2 w-full h-[70%] flex items-end"><div className="cardNumberContainer bg-backgroundColor w-full h-[80%] border border-ash rounded flex justify-center">
  
 <div className="content w-[95%] h-full flex justify-between items-center"> <div className="masterCardIconAndLogoDiv w-[60%] flex"><img src={masterCardIcon} alt="" className='w-[2vw] object-contain  aspect-[4/3] mr-[1.8vw]' />  <div className="numbers text-cardNumberColor w-[80%] flex justify-between"><span>2412</span><span className='text-navyBlue' >-</span><span>7512</span><span className='text-navyBlue' >-</span><span>3412</span><span className='text-navyBlue' >-</span><span>3456</span></div>  </div>  <div className="tick"><img src={Tick} alt="" className='w-[2vw] object-contain  aspect-[4/3]' /></div>  </div> 
  
  </div></div>
</div>

<div className='cvvNumberSection h-[10%] w-full bg-green-700 flex justify-between items-center'>
<div className="cvvHeadingDiv  h-full w-[40%] flex flex-col justify-between"> <div className="cvvHeading">CVV Number</div> <div className="3To4DigitNumber">Enter the 3 0r 4 digit number on the card</div> </div>
<div className="cvvNumberBox bg-customOrange w-[50%] h-full rounded border border-ash"></div>
</div>

<div className='expiryDateSection  h-[10%] w-full bg-green-400 flex justify-between items-center'>
<div className="expiryDateHeadingDiv  h-full w-[40%] flex flex-col justify-between">  <div className="expiryDateHeading">Expiry Date</div> <div className="expiryDateWriteUp">Enter the expiration date of the card</div> </div>
<div className="expiryDateDivs flex justify-between items-center bg-pink-800  w-[50%] h-full"> <div className="leftDateBox rounded border border-ash w-[40%] h-full grid place-items-center">09</div> / <div className="rightDateBox rounded border border-ash w-[40%] h-full grid place-items-center">23</div> </div>


</div>

<div className='passwordSection h-[10%] w-full bg-green-700 flex justify-between items-center'>
<div className="passwordHeadingDiv  h-full w-[40%] flex flex-col justify-between"> <div className="passwordHeading">Password</div> <div className="passwordWriteUp">Enter your Dynamic password</div> </div>
<div className="passwordBox bg-customOrange w-[50%] h-full rounded border border-ash"></div>
</div>

<div className='paymentButton w-full h-[10%] bg-customBlue rounded grid place-items-center'>Pay Now</div>


</div>

<div className="section2  w-[30%] h-full flex flex-col justify-between items-center">
<div className="topLayer rounded h-[6%] w-[20%] bg-customBlue">

</div>



<div className="bottomLayer relative h-[84%] w-full bg-ash rounded flex flex-col justify-between items-center">

<div  className="cardSection bg-cover bg-center h-[61%] w-[67%] bg-white bg-opacity-80 rounded-lg flex flex-col justify-between items-center  backdrop-blur-lg absolute top-[-18%]">
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

<div className="dottedSection absolute top-[77%] w-full  flex justify-between items-center"><div className="circle rounded-full bg-backgroundColor w-[30px] h-[25px] ml-[-5%]"></div><div className="dash w-full border  border-black  border-dashed"></div><div className="circle mr-[-5%] rounded-full bg-backgroundColor w-[30px] h-[25px]"></div></div>

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
    
    </>
  );
}
