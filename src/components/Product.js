export default function Product() {
  return (
    <section
      className="hero min-h-screen flex py-80 md:py-40 pl-4"
      style={{
        backgroundImage: "url(/wlb131.jpeg)",
      }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold gold-wlb font-raleway">WLB</h1>
          <p className="mb-10 text-3xl font-satisfy font-bold">
            Women luxury beauty
          </p>
          {/* <form action="/create-checkout-session" method="POST"> */}
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              className="btn btn-outline btn-warning py-4 px-8 font-satisfy"
            >
              Accompte
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
