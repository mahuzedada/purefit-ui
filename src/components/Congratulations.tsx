const Congratulations: React.FC = () => {
  return (
    <div className="rounded-xl max-w-md mx-auto">
      <div
        className="p-4 mt-12 "
        style={{
          background: "linear-gradient(to right, #FFA500, #FFFFFF, #00FFFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
        <p className="text-md">
          You've successfully fetched a preview of your meal plan! Here's a
          breakfast, lunch, dinner, and snack idea!
        </p>
      </div>
    </div>
  );
};

export default Congratulations;
