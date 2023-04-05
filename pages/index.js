import { useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = ({ posts }) => {
  const [scrollView, setScrollView] = useState({});

  const gotoHandler = (value) => {
    if (value === "home") {
      setScrollView({
        home: true,
      });
    } else if (value === "about") {
      setScrollView({
        about: true,
      });
    } else if (value === "skills") {
      setScrollView({
        skills: true,
      });
    } else if (value === "projects") {
      setScrollView({
        projects: true,
      });
    } else if (value === "experience") {
      setScrollView({
        experience: true,
      });
    } else if (value === "blogs") {
      setScrollView({
        blogs: true,
      });
    } else if (value === "contact") {
      setScrollView({
        contact: true,
      });
    }
  };

  return (
    <div>
      <Header gotoHandler={gotoHandler} />
      <Intro goTo={scrollView?.home} />
      <About goTo={scrollView?.about} />
      <Skills goTo={scrollView?.skills} />
      <Projects goTo={scrollView?.projects} />
      <Experience goTo={scrollView?.experience} />
      <Blogs posts={posts} goTo={scrollView?.blogs} />
      <Contact goTo={scrollView?.contact} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  let posts;
  await axios
    .get("https://daringpage.vercel.app/api/posts")
    .then((res) => {
      posts = res.data;
    })
    .catch(() => console.log("Server error"));

  return {
    props: {
      posts: posts || [],
    },
  };
}

export default Index;
