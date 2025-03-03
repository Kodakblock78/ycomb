const Blogsection = () => {
    const features = [
      {
        title: "Marketing guidance",
        description:
          "as a small company marketing is a key part of growth and lucky for you we specialize in that",
        image: "/vite/assets/most-experienced-partners-DX4ZPbr4.jpg",
      },
      {
        title: "find that hidden gem",
        description:
          "we have a wide range of companys who we publicize all you have to is pick ur poison.",
        image: "/vite/assets/investor-network-DsrGWUIM.jpg",
      },
      
    ];
  
    return (
      <div
        className="px-4"
        style={{
          background: "rgb(39, 39, 42) 20%",
        }}
      >
        <div className="mx-auto max-w-screen-lg py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 max-w-2xl text-3xl font-medium leading-snug text-white">
              <span className="text-brand">Check out our latest blogs</span>
            </h2>
  
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="rounded-lg bg-beige-light p-6 sm:p-10">
                  <div
                    className="mb-5 h-32 w-full rounded-md bg-stone-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  ></div>
                  <h3 className="mb-3 border-l-4 border-brand pl-2 text-lg font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">
                    {feature.description}
                    {feature.links &&
                      feature.links.map((link, linkIndex) => (
                        <span key={linkIndex}>
                          {" "}
                          <a className="underline text-blue-300" href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.text}
                          </a>
                        </span>
                      ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogsection;
  