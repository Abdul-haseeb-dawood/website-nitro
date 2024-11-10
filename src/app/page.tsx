import Image from "next/image";
export default function Home() {
  return (
    <div>
    


<div className="bg-[url('/picture/bg1.jpg')] bg-cover bg-center w-full h-[90vh]"
>
<Image
    src={'/picture/Can (2).png'}
    alt="can"
    height={650}
    width={600}
    className=" mx-auto pt-[9rem] transform transition hover:scale-110 hover:duration-500"
  />
</div>
    

    <div>
    <Image src={'/picture/new2.png'} alt="image" height={100} width={1122} className="w-[150rem] h-[40rem]"></Image>
    </div>


    </div>
  );
}
