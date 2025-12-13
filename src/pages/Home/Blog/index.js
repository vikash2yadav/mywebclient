import React, { useEffect, useState } from "react";
import BlogBox from "../../../components/BlogBox";
import { blogsData } from "../../../constant/sampleData";

const Blog = (props) => {
 const [isVisible, setIsVisible] = useState(false);
 const [typedText, setTypedText] = useState("");
 const [hasTyped, setHasTyped] = useState(false);
 const title = "Our Blogs";

 useEffect(() => {
   if (isVisible && !hasTyped) {
     let index = 0;
     const type = () => {
       if (index <= title.length) {
         setTypedText(title.slice(0, index));
         index++;
         setTimeout(type, 120);
       } else {
         setHasTyped(true);
       }
     };
     type();
   }
 }, [isVisible, hasTyped]);

 useEffect(() => {
   const handleScroll = () => {
     const scrollTop =
       window.pageYOffset || document.documentElement.scrollTop;
     setIsVisible(scrollTop > 500); // Adjust the value as per your requirement
   };

   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);
 return (
   <>
     <div style={styles.maindiv} id="blog">
       <h1
         id={`${props.title}`}
         className="text-5xl text-center font-serif mb-4 text-gray-700 font-semibold"
       >
         {typedText}
         <span style={styles.blinking_cursor}>|</span>
       </h1>

       <div className="w-full h-1 mb-8 flex justify-center ">
         <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg"></div>
       </div>

       <p className="mb-20 text-center text-gray-400 text-m">
         ✨ Dive into our collection of insightful blogs that showcase my
         expertise and passion for technology. If you have questions or need
         assistance, feel free to reach out—I'm here to help!
       </p>

       <div style={styles.seconddiv} className="mb-20">
         {blogsData.map((item) => (
           <BlogBox
             date={item?.date}
             feild={item?.feild}
             title={item?.title}
             description={item?.description}
           />
         ))}
       </div>
     </div>
   </>
 );
};

const styles = {
 maindiv: {
   width: "100%",
   height: "auto",
   backgroundColor: "#f0f0f0",
   padding: "100px 20px",
   "@media (max-width: 400px)": {
     padding: "0px 20px",
   },
 },
 seconddiv: {
   display: "flex",
   flexDirection: "row",
   flexWrap: "wrap",
   justifyContent: "space-evenly",
 },

  blinking_cursor: {
  fontWeight: 100,
  fontSize: "30px",
  color: "red",
  animation: "blink 0.7s infinite",
}
};

export default Blog;


