import Post from "../Post";

const Article = () => {
  return (
    <section className="container">
      <h3>Articles</h3>
      <div className="mt-5 container-posts">
        <Post
          subtitle="tecnologia"
          title="Primeiro post"
          author="Vinicius Cardoso"
          dateTime="Aug 2, 2020 - 9 read"
        >
          Nulla consequat pariatur enim eu occaecat aute. Sit enim irure mollit
          deserunt laborum ex labore. Amet labore eiusmod aute qui proident
          magna quis in culpa et ipsum aliquip Lorem.
        </Post>

        <Post
          subtitle="hardware"
          title="Segundo post"
          author="Lucas Salles"
          dateTime="Aug 3, 2020 - 9 read"
        >
          Dolor sit id labore ex culpa laboris. Nulla exercitation non veniam
          est ullamco elit. Nostrud adipisicing magna incididunt irure. Do
          labore incididunt excepteur incididunt mollit ex excepteur ea veniam
          dolor quis anim proident excepteur. Voluptate id culpa exercitation
          duis magna ipsum dolor anim officia non officia ut laboris dolor.
        </Post>

        <Post
          subtitle="software"
          title="Terceiro post"
          author="Pedro Augusto"
          dateTime="Aug 5, 2020 - 9 read"
        >
          Anim voluptate occaecat eu qui duis fugiat et irure consequat. Velit
          laboris ipsum officia amet nulla aute. Occaecat aliquip qui aute
          cupidatat eiusmod cupidatat consectetur in magna et quis tempor. Id
          voluptate laborum incididunt veniam. Commodo voluptate cillum duis ex
          qui reprehenderit laboris consequat. Aliqua ipsum et tempor voluptate
          duis ea nostrud. Ipsum id irure tempor ullamco ea ipsum irure
          proident.
        </Post>
      </div>
    </section>
  );
};

export default Article;
