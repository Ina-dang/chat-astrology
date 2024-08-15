const ErrorPage: React.FC = () => {
  return (
    <main>
      <section>
        <h1>This Page Does Not Exist</h1>
        <p>We're sorry, but it appears the website address you entered was incorrect</p>
        <button
          onClick={() => {
            location.replace('/');
          }}
        >
          <span>Go Back Home</span>
        </button>
      </section>
    </main>
  );
};

export { ErrorPage };
