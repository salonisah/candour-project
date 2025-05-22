
import React from "react";
import ArticlePage from "../components/ArticlePage"
import crochetImage from "../assets/crochet-img.jpg";
import crochetImage2 from "../assets/crochet-img2.jpg";
import avatarImage from "../../public/crochet.jpg"; 

const CrochetPost = () => {
  const articleData = {
    title: "5 Ways to start crocheting",
    category: "Leisure & Lifestyle",
    tags: ["Crochet"],
    imageSrc: crochetImage,
    imageAlt: "Crochet tools",
    views: "5012", 
    suggestions: "5",
    comments: [
      {
        id:"comment-1",
        avatar: avatarImage,
        author: "Margaret San",
        date: "15th July, 2022",
        text: "Lorem ipsum dolor sit amet consectetur. Odio massa velit urna vulputate magna tellus. Pharetra cursus scelerisque id .",
      },
       {
        id: "comment-2",
        avatar: avatarImage,
        author: "Emma Thompson",
        date: "20th August, 2022",
        text: "This guide is fantastic for beginners! I found the tip about choosing a 5mm hook really helpful. Any advice on the best yarn brands for new crocheters?",
      },
      {
        id: "comment-3",
        avatar: avatarImage,
        author: "Liam Chen",
        date: "5th September, 2022",
        text: "I’ve been crocheting for a month now, and the moodboard idea is a game-changer! It really helps visualize projects before starting. Thanks for sharing!",
      },
    ],
    content: [
      {
        title: "What is crocheting?",
        description:
  "Start by selecting a crochet hook and yarn that match in size. A 5mm hook with medium-weight yarn is great for beginners. Check the yarn label for recommendations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sapien nec nisl fermentum ultricies. Vivamus sed odio nec quam tincidunt volutpat. Integer eget est at erat tincidunt tincidunt. Maecenas ut purus quis leo sagittis varius. Sed tempor ex nec neque sollicitudin, nec egestas ligula.",
    image: crochetImage2,
      },
      
      {
  title: "Things to buy before you start",
  list: [
    {
      title: "Hook",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio massa velit urna vulputate magna tellus. Pharetra cursus scelerisque id vulputate suscipit gravida...",
    },
    {
      title: "Wool",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio massa velit urna vulputate magna tellus. Pharetra cursus scelerisque id vulputate suscipit gravida...",
    },
    {
      title: "Moodboard",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio massa velit urna vulputate magna tellus. Pharetra cursus scelerisque id vulputate suscipit gravida...",
    },
  ],
},
    ],
  };

  return (
    <div>
      <ArticlePage
        title={articleData.title}
        category={articleData.category}
        tags={articleData.tags}
        imageSrc={articleData.imageSrc}
        imageAlt={articleData.imageAlt}
        content={articleData.content}
        views={articleData.views}
        suggestions={articleData.suggestions}
        comments={articleData.comments}
      />
    </div>
  );
};

export default CrochetPost;