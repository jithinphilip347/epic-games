import BannerImage from "../assets/bannerImage.jpeg";
import GameImage from "../assets/game-1.jpeg";
import GameImage1 from "../assets/game-2.png";
import GameImage2 from "../assets/game-3.jpeg";
import { MdOutlineClose } from "react-icons/md";

const Home = () => {
  return (
    <div className="w-full ">
<MdOutlineClose className="text-secondary text w-10 h-10 hidden md:flex absolute md:relative md:left-[1300px] md:top-2" />
<div className="container mx-auto ">
        <h1 className="text-white font-roboto font-extralight text-[43px] my-10 text-center justify-center ">
          Epic Games : An American video game and software developer and
          publisher based in Cary, North Carolina.
        </h1>
      </div>
      <div className="container mx-auto w-full md:w-[1415px] h-[200px] md:h-[418px] overflow-hidden object-cover">
  <img src={BannerImage} alt="banner" className="" />
</div>

<div className="container mx-auto px-4">
  <p className="text-white font-poppins font-thin my-10 text-[17px] text-center">
    Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that&apos;s right for you and your friends. Find it all in Fortnite ... Drop In.
  </p>
</div>
<div className="container mx-auto">
  <div className="bg-secondary w-full sm:w-[400px] h-[50px] mx-auto my-4">
    <p className="text-primary text-center p-4 font-poppins font-medium">
      Visit Website
    </p>
  </div>
</div>

<div className="container mx-auto flex flex-col md:flex-row items-center justify-center mt-12 md:mt-48 gap-10">
  <div className="flex flex-col gap-10 w-full md:w-[347px] h-auto md:h-[500px] ">
    <div className="w-full md:w-[347px] h-[347px] object-cover overflow-hidden">
      <img src={GameImage} alt="game" className="w-full h-full object-cover" />
    </div>
    <p className="text-secondary font-roboto font-thin text-[21px] text-center justify-center px-4 md:px-0">
      Explore large, destructible environments where no two games are ever the same.
    </p>
  </div>
  <div className="flex flex-col gap-10 w-full md:w-[347px] h-auto md:h-[500px] ">
    <div className="w-full md:w-[347px] h-[347px] object-cover overflow-hidden">
      <img src={GameImage1} alt="game" className="w-full h-full object-cover" />
    </div>
    <p className="text-secondary font-roboto font-thin text-[21px] text-center justify-center px-4 md:px-0">
      Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
    </p>
  </div>
  <div className="flex flex-col gap-10 w-full md:w-[347px] h-auto md:h-[500px] ">
    <div className="w-full md:w-[347px] h-[347px] object-cover overflow-hidden">
      <img src={GameImage2} alt="game" className="w-full h-full object-cover" />
    </div>
    <p className="text-secondary font-roboto font-thin text-[21px] text-center justify-center px-4 md:px-0">
      Discover even more ways to play across thousands of creator-made game genres
    </p>
  </div>
</div>

<div className="container mx-auto flex flex-col gap-5 mt-20 md:mt-40 px-4 md:px-0">
  <h3 className="text-secondary font-roboto text-center font-extralight text-2xl md:text-4xl">
    Our Contribution
  </h3>
  <p className="text-secondary font-poppins font-extralight text-center text-lg md:text-xl">
    Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
  </p>
</div>

<div className="container mx-auto flex flex-col gap-5 px-4 md:px-0 mt-24">
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-64 text-secondary font-roboto font-extralight">
    <div className="flex flex-col items-center md:items-start gap-4 md:gap-10">
      <h2 className="text-4xl md:text-[72px] md:relative md:left-40">5M</h2>
      <p className="text-lg md:text-[27px] text-center md:relative md:left-[115px]">Daily User Engagements</p>
    </div>
    <div className="flex flex-col items-center md:items-start gap-4 md:gap-10">
      <h2 className="text-4xl md:text-[72px] md:relative md:left-4">$500K</h2>
      <p className="text-lg md:text-[27px] text-center">Revenue Surge for Platform</p>
    </div>
    <div className="flex flex-col items-center md:items-start gap-4 md:gap-10">
      <h2 className="text-4xl md:text-[72px] md:relative md:right-8">10X</h2>
      <p className="text-lg md:text-[27px] text-center md:relative md:right-28">ROAS on all our marketing campaigns</p>
    </div>
  </div>
</div>



<div className="container mx-auto px-4 md:px-0">
  <div className="flex flex-col gap-8 items-center justify-center mt-20 md:mt-40">
    <h2 className="font-roboto text-secondary font-light text-3xl md:text-5xl text-center">
      Interested in delving deeper into the project?
    </h2>
    <p className="font-roboto text-secondary text-lg md:text-4xl font-extralight text-center">
      If you&apos;d like to explore further details about our initiatives or any of our affiliated brands, don&apos;t hesitate to connect. You can reach out to us via email at <span className="font-normal">hello@abc.com</span> or give us a call at <span className="font-normal">+91 480 20802730</span>
    </p>
  </div>
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-8 md:mt-16">
    <p className="text-secondary font-poppins text-[18px] text-center border-[1px] p-2 w-full md:w-72">
      Ring us on Skype
    </p>
    <p className="text-primary font-poppins text-[18px] text-center p-2 w-full md:w-72 bg-secondary">
      Contact Us
    </p>
  </div>
</div>

<div className="container mx-auto mt-20 md:mt-40 px-4 md:px-0">
  <p className="font-roboto font-thin text-base md:text-xl text-secondary text-center">
    © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
  </p>
</div>

    </div>
  );
};

export default Home;
