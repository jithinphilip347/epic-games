import BannerImage from "../assets/bannerImage.jpeg";
import { MdOutlineClose } from "react-icons/md";


const listitems = [
  {
      num:"01",
      image:"./src/assets/game-1.jpeg",
      description: "Explore large, destructible environments where no two games are ever the same.",
  },
  {
    num:"02",
    image:"./src/assets/game-2.png",
    description: "Team up with friends by sprinting,  climbing and smashing your way to earn your Victory Royale",
},
{
  num:"03",
  image:"./src/assets/game-3.jpeg",
  description: "Discover even more ways to play across thousands of creator-made game genres",
},
]

const Home = () => {
  return (
    <div className="w-full ">
      <MdOutlineClose className="text-secondary text relative left-[1300px] top-2 w-10 h-10  "/>
        <div className="container mx-auto ">
          <h1 className="text-white font-roboto font-extralight text-[43px] my-10 text-center justify-center ">
            Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
            </h1>      
        </div>
        <div className="container mx-auto w-[1415px] h-[418px] overflow-hidden">
            <img src={BannerImage} alt="banner" className="" />
        </div>
        <div className="container mx-auto  ">
          <p className="text-white font-poppins font-thin my-10 text-[17px] text-center">
            Create, play, and battle with friends for free in Fortnite. 
            Be the last player standing in Battle Royale and Zero Build, 
            experience a concert or live event, or discover over a million 
            creator made games, including racing, parkour, zombie survival, 
            and more. Each Fortnite island has an individual age rating so you can find 
            the one that&apos;s right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        </div>
        <div className="container mx-auto">
        <div className="bg-secondary w-[400px] h-[50px] mx-96  ">
        <p className="text-primary text-center p-4 font-poppins font-medium">Visit Website</p>
        </div>
         </div>
         <div className="container mx-auto flex items-center justify-center mt-48 gap-10">
          {listitems.map((listitem, index) => {
            return(
              <div key={index} className="flex flex-col gap-10 w-[347px] h-[500px] ">
                <div className="w-[347px] h-[347px] object-cover overflow-hidden">
                <img src={listitem.image} alt="game"/>
                </div>
                <p className="text-secondary font-roboto font-thin text-[21px]  text-center justify-center">{listitem.description}</p>
                </div>                        
            )
          })}
         </div>
         <div className="container mx-auto flex flex-col gap-5 mt-40">
            <h3 className="text-secondary font-roboto text-center font-extralight text-4xl">Our Contribution</h3>
            <p className="text-secondary font-poppins font-extralight text-center text-xl">
              Our core offering extends beyond mere profit generation; 
              we emphasize the growth and active involvement of our user community.
               Collaborating with us represents an investment, 
               rather than a mere expenditure. Our dedication to providing distinctive digital 
               interactions guarantees unparalleled benefits for our clientele.</p>      
         </div>

       <div className="container mx-auto flex flex-col gap-2">
        <div className="flex items-center gap-64 text-secondary font-roboto text-[72px] font-extralight ml-[103px]  mt-16 ">
          <h2>5M</h2>
          <h2>$500K</h2>
          <h2>10X</h2>
        </div>

        <div className="flex items-center gap-64 text-secondary font-roboto text-[20px] text-center font-extralight mx-24 ">
          <p>Daily User Engagements</p>
          <p>Revenue Surge for an Platform</p>
          <p>ROAS on all our  marketing campaigns</p>
        </div>
       </div>

      <div className="container mx-auto ">
      <div className=" flex flex-col gap-8 items-center justify-center mt-40">
        <h2 className="font-roboto text-secondary font-light text-5xl text-center">Interested in delving deeper into the project?</h2>
        <p className="font-roboto text-secondary text-4xl font-extralight text-center ">
          If you&apos;d like to explore further details about our initiatives 
          or any of our affiliated brands, don&apos;t hesitate to connect. 
          You can reach out to us via email at <span className="font-normal">hello@abc.com</span> or give
           us a call at <span className="font-normal">+91 480 20802730</span></p>
        </div>   
        <div className="flex items-center justify-center gap-10 mt-16">
          <p className="text-secondary font-poppins text-[18px] text-center border-[1px] p-2 w-72 ">Ring us on Skype</p>
          <p className="text-primary font-poppins text-[18px] text-center p-2 w-72 bg-secondary">Contact Us</p>
        </div>
      </div>
        <div className="container mx-auto mt-40">
          <p className="font-roboto font-thin text-xl text-secondary text-center">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Home