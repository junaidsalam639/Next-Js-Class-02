import { getCatApi , getDogApi } from "../userData/RandomImage";

export default async function page(){
   let wait1 = await getDogApi();
   let wait2 = await getCatApi();
   return(
    <>
    <div className="w-full flex flex-col justify-center items-center">
     <h1 className="text-3xl font-bold my-4">Image_Random_Dog</h1>
   <img src={wait1.message} alt="Image" className="object-cover object-center h-64 w-96 rounded-md shadow-md" />
    </div>
    <div className="w-full flex flex-col justify-center items-center">
     <h1 className="text-3xl font-bold my-4">Image_Random_Cat</h1>
   <img src={wait2[0].url} alt="Image" className="object-cover object-center h-64 w-96 rounded-md shadow-md" />
    </div>
    </>
   )
}


