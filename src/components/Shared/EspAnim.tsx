"use client";
import Image from "next/image";
import e from "@/assets/images/e.png";
import s from "@/assets/images/s.png";
import p from "@/assets/images/p.png";
import r from "@/assets/images/r.png";
import pyramid from "@/assets/images/pyramid.png";
import n from "@/assets/images/n.png";
import z from "@/assets/images/z.png";
import a from "@/assets/images/a.png";

const EspAnimation = () => {
    return (
        <div className="flex items-center front">
            <div className="flex items-center box-border ">

                <span className="letter"><Image src={e} alt="" /></span>
                <span className="letter"><Image src={s} alt="" /></span>
                <span className="letter"><Image src={p} alt="" /></span>
                <span className="letter"><Image src={e} alt="" /></span>
                <span className="letter"><Image src={r} alt="" /></span>
                <span className="letter"><Image src={pyramid} alt="" /></span>
                <span className="letter"><Image src={n} alt="" /></span>
                <span className="letter"><Image src={z} alt="" /></span>
                <span className="letter"><Image src={a} alt="" /></span>
            </div>
            <style jsx>{`
        .letter{
            width: auto;
            height: max-content;
            }
        .front span{
	text-shadow: #f22d2d 1px 0vh 10px;
	margin:4px;
	animation: amin 6s linear infinite;
}
@keyframes amin{
	0%{
		opacity: 1;
        
	}
	50%{
		opacity: 0;
       
	}
	100%{
		opacity: 1;
        
	}
}
            .front span:nth-child(1){
                animation-delay: 0.6s;
            }
.front span:nth-child(2){
  animation-delay: 1.2s;
  transition-duration: 0.6s;
}
.front span:nth-child(3){
  animation-delay: 1.8s;
  transition-duration: 0.6s;
}
.front span:nth-child(4){
  animation-delay: 2.4s;
  transition-duration: 0.6s;
}
.front span:nth-child(5){
  animation-delay: 3.0s;
  transition-duration: 0.6s;
}
.front span:nth-child(6){
  animation-delay: 3.6s;
  transition-duration: 0.6s;
}
.front span:nth-child(7){
  animation-delay: 4.2s;
  transition-duration: 0.6s;
}
.front span:nth-child(8){
  animation-delay: 4.8s;
  transition-duration: 0.6s;
}
.front span:nth-child(9){
  animation-delay: 5.4s;
  transition-duration: 0.6s;
}

.front:hover{
	cursor:pointer;
}
.front span:hover{
	animation: step-end;
}
        `}</style>
        </div>
    )
}

export default EspAnimation;