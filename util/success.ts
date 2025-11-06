import a7 from "../public/a7.jpg"
import taichang from "../public/taichang.jpg"
import langu from "../public/langu.jpg"
import case1 from "../public/case1.jpg"
import case2 from "../public/case2.jpg"
import case3 from "../public/case3.jpg"
import case4 from "../public/case4.jpg"
import case5 from "../public/case5.jpg"
import case6 from "../public/case6.jpg"
import case7 from "../public/case7.jpg"
import case8 from "../public/case8.jpg"
import { StaticImageData } from "next/image"

export const success=[
{id:1,img:a7,
name:"所羅門台北市信義區A7"},
{id:2,
 img:taichang,
 name:"台中國光生技濾芯再生"
},
{id:3,
 img:langu,
 name:"蘭嶼電廠"
}
] 
type  CaseItem = {
  id: number;
  image: StaticImageData; // Next.js 的 Image 通常是這個型別
  title: string;
}

export const cases:CaseItem[] = [
{ id: 1, image: case1, title: "案例一" },
{ id: 2, image: case2, title: "案例二" },
{ id: 3, image: case3, title: "案例三" },
{ id: 4, image: case4, title: "案例四" },
{ id: 5, image: case5, title: "案例五" },
{ id: 6, image: case6, title: "案例六" },
{ id: 7, image: case7, title: "案例七" },
{ id: 8, image: case8, title: "案例八" },

];