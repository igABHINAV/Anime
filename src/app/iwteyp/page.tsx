import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import React from "react";

const page = () => {
  const images = [
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg",
    "https://joshuaagar.wordpress.com/wp-content/uploads/2019/01/DvEXuOOVAAIZ7II.jpg?w=584",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-19-Nov-2022-0507-PM.jpg",
   
  ];

  return (
    <div>
      return <ParallaxScroll images={images} />
    </div>
  );
};

export default page;
