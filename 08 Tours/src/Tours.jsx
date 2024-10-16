import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
