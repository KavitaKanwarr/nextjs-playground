const About = async () => {
  await new Promise((resolve) => setTimeout(() => resolve("help"), 300));
//   throw new Error("Failed to load About");

  return <div className="m-auto text-3xl font-bold">About</div>;
};

export default About;
