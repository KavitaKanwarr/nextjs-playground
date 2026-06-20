const CatchAllRoute = () => {
  return (
    <div className="m-auto">
      <h2 className="text-xl font-bold">Test Catch All Route with</h2>
      <ul className="[&>li]:pl-10 [&>li]:text-gray-400">
        <li>/catchAllRoute - will fail</li>
        <li>/catchAllRoute/anything</li>
        <li>/catchAllRoute/anything/nested</li>
      </ul>
    </div>
  );
};

export default CatchAllRoute;
