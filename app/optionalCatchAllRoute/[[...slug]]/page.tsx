const OptionalCatchAllRoute = () => {
  return (
    <div className="m-auto">
      <h2 className="text-xl font-bold">Test Optional Catch All Route with</h2>
      <ul className="[&>li]:pl-10 [&>li]:text-gray-400">
        <li>/optionalCatchAllRoute</li>
        <li>/optionalCatchAllRoute/anything</li>
        <li>/optionalCatchAllRoute/anything/nested</li>
      </ul>
    </div>
  );
};

export default OptionalCatchAllRoute;
